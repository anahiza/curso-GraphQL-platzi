module.exports= `#Esto es un curso en el sistema
	type Curso {
		id: ID!
		titulo: String!
		#Esta es una breve descripcion del curso
		descripcion: String!
		profesor: Profesor
		rating: Float @deprecated(reason: "no creemos más en los puntajes")
		comentarios: [Comentario]
	}
	
	type Comentario {
		id: ID!
		nombre: String!
		cuerpo: String!
	}

	input NuevoCurso {
		titulo: String!
		descripcion: String!
	}

	input CursoEdit {
		titulo: String!
		descripcion: String!
	}

	`