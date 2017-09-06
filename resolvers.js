const Curso = require('./db/models/Curso')
const Profesor = require('./db/models/Profesor')

const resolvers = {
	Query: {
		cursos: ()=>{
			return Curso.query().eager('[profesor, comentarios]')
		},
		profesores: () => {
			return Profesor.query().eager('cursos')

		},
		curso: (rootValue, args) => {
			Curso.query().eager('[profesor, comentarios]').findById(args.id)
		},
		profesor: (rootValue, args) => {
			Profesor.query().eager('cursos').findById(args.id)
		}
	},

	Mutation: {
		profesorAdd: (_, args) => {
			return Profesor.query().insert(args.profesor)
		},

		profesorEdit:(_, args)=>{
			return Profesor.query().patchAndFetchById(args.profesorId, args.profesor)
		},

		profesorDel:(_, args) => {
			return Profesor.query().findById(args.profesorId).then((profesor)=> {
				return Profesor.query().deleteById(args.profesorId).then(()=> profesor)
			})
		}

	}
}
module.exports=resolvers