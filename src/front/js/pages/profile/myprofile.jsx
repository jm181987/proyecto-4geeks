import React from 'react'

export const MyProfile = () => {
  return (
    <div>myprofile</div>
  )
}

// Aqui se va hacer la pagina de perfil tanto del usuario como del artista
// Lo que se va hacer basicamente es tomar el useAuth para acceder al role del usuario con usuariodb.role
// Dependiendo del usuario se va hacer la carga de uno o de otro
// Tambien se debe de pensar que el artista tambien es un usuario asi que tambien se puede intentar que aqui
// se haga el handle de la informacion para ser subida a firebase
// por ultimo aqui deberia de salir los favoritos de los usuarios (hacer si da tiempo)
// se debe de cargar los eventos favoritos de los artistas
// tambien se puede hacer por microservicios haciendo que este sea el lobby para ver que tipo de usuario es 
// y dependiendo del rol convocar uno u otro....
