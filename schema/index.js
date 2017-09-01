const {makeExecutableSchema} = require('graphql-tools')

const resolvers = require('../resolvers')
const Profesor = require('./Profesor')
const Curso = require('./Curso')


const rootQuery = `
	union ResultadoBusqueda= Profesor | Curso
	type Query {
		cursos:[Curso]
		profesores: [Profesor]
		curso(id: Int): Curso
    	profesor(id: Int): Profesor
		buscar: [ResultadoBusqueda]
	}
`
const schema = makeExecutableSchema({
	typeDefs: [rootQuery, Profesor, Curso],
	resolvers

})

module.exports = schema
