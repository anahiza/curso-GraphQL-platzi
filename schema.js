const {makeExecutableSchema, addMockFunctionsToSchema} = require('graphql-tools')
const casual = require('casual')
const Curso = require('./db/models/Curso')
const Profesor = require('./db/models/Profesor')

const datos = require('./datos_ejemplo')

const typeDefs = `
	union ResultadoBusqueda= Profesor | Curso

	#Esto es un curso en el sistema
	type Curso {
		id: ID!
		titulo: String!
		#Esta es una breve descripcion del curso
		descripcion: String!
		profesor: Profesor
		rating: Float @deprecated(reason: "no creemos más en los puntajes")
		comentarios: [Comentario]
	}

	type Profesor {
		id: ID!
		nombre: String!
		nacionalidad: String!
		genero: Genero
		cursos: [Curso]
	}

	enum Genero {
		MASCULINO
		FEMENINO
	}

	type Comentario {
		id: ID!
		nombre: String!
		cuerpo: String!
	}

	type Query {
		cursos:[Curso]
		profesores: [Profesor]
		curso(id: Int): Curso
		profesor(id: Int): Profesor
		buscar: [ResultadoBusqueda]
	}
`

const resolvers = {
	Query: {
		cursos: ()=>{
			return Curso.query()
		},
		profesores: () => {
			return Profesor.query()

		},
		curso:(rootValue, args) => {
			Curso.query().findById(args.id)
		},
		profesor: (rootValue, args) => {
			Profesor.query().findById(args.id)
		}
	},

	Curso: {
		profesor: ()=>{
			return {
				nombre: "Pablo"
			}
		}
	}
}


const schema = makeExecutableSchema({
	typeDefs,
	resolvers

})

/*addMockFunctionsToSchema({
	schema,
	mocks: {
		Curso: function() {
			return {
				id: casual.uuid,
				titulo: casual.sentence,
				descripcion: casual.sentences(3)
			}
		},
		Profesor: function () {
			return {
				nombre: casual.name,
				id: casual.uuid,
				nacionalidad: casual.country

			}
		}
	}
})
*/
module.exports = schema
