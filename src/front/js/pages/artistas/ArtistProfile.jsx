import React, {useState} from 'react'

export const ArtistProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    LastName:"",
    email: "",
    location: "",
    age:"",
    genero:"",
    descripcion:"",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className='container-flex m-5 row '>
      <form className='row'>
        <div className='col-3 m-2'>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        </div>
        <div className='col-3 m-2'>
        <label>
          Apellido:
          <input
            type="text"
            name="LastName"
            value={formData.LastName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        </div>
        <div className='row'>
          <div className='col-3 m-2'>
        <label>
          Edad:
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </label>
        <br />
        </div>
        <div className='col-3 m-2'>
        <label>
          Genero: 
          <input
            type="text"
            name="genero"
            value={formData.genero}
            onChange={handleInputChange}
          />
        </label>
        <br />
        </div>
        </div>
        <div className='row'>
          <div className='col-3 m-2'>
        <label>
          Correo electrónico:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        </div>
        <div className='col-3 m-2'>
        <label>
          Ubicación:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
        </label>
        <br />
        </div>
        </div>
        <div className='row'>
        <div className='col-3 m-2'>
        <label>
          Descripcion:
          <input
            type="text"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleInputChange}
          />
        </label>
        <br />
        </div>
        </div>
      </form>
      <hr />
      <h2>Mi perfil</h2>
      <p>Nombre: {formData.name}</p>
      <p>Apellido: {formData.LastName}</p>
      <p>Edad: {formData.age}</p>
      <p>Genero: {formData.genero}</p>
      <p>Correo electrónico: {formData.email}</p>
      <p>Ubicación: {formData.location}</p>
      <p>Descripcion: {formData.descripcion}</p>
    </div>
  );
};

export default ArtistProfile;
