const express = require('express')
const bodyParser = require('body-parser')
const app =express()
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express')
const schema = require('./schema')
const PORT= 5678

require('./db/setup')

app.use("/graphql", bodyParser.json(), graphqlExpress({schema}))
app.use("/graphiql", graphiqlExpress({endpointURL: 'graphql'}))

app.listen(PORT, function(){
	console.log("Servidor corriendo")	
})