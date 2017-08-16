const {makeExecutableSchema} = require('graphql-tools')

const typeDefs = `
	union ResultadoBusqueda= Profesor | Curso
	
	#Esto es un curso en el sistema
	type Curso {
		id: ID!
		titulo: String!
		#Esta es una breve descripcion del curso
		descripcion: String!
		profesor: Profesor
		rating: Float
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


const schema = makeExecutableSchema({
	typeDefs

})

module.exports = schema