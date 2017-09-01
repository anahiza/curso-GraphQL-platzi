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
	}
}
module.exports=resolvers