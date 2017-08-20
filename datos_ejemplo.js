const data = {

	cursos : [
			{
				id: 1,
				titulo: 'Curso Graph QL',
				descripcion: 'Aprediendo GraphQL',
				profesor: 1,
				comentarios:[1]
			},
			{
				id: 2,
				titulo: 'Curso PHP',
				descripcion: "Aprediendo PHP"

			},
			{
				id: 3,
				titulo: 'Curso Mongo Db',
				descripcion: "Aprende a usar MongoDb"

			}
		],

profesores:	[
		{
			id: 1,
			nombre: "Anahi",
			nacionalidad: "Mexicana"
		},
		{
			id:3,
			nombre: "Carlos",
			nacionalidad: "Chileno"
		}

	],
comentarios:[
		{
			id: 1,
			nombre: "Juan",
			cuerpo: "buen video",
			curso: 1
		}
	]

}

module.exports=data