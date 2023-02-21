import React from "react";
import { useState } from "react";
import { Card, Form, Button, Image } from "react-bootstrap";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from '../../firebase/firebase.js';
import { uploadFile } from "../../firebase/firebase.js";
import { v4 } from 'uuid';
import { useAuth } from "../../context/authContext.js";
import Avatar from '../../../img/avatar/avatar.jpg'
import { Toaster, toast } from "react-hot-toast";

// import custom components
import { FormSelect } from "/workspace/proyecto-4geeks/src/front/js/component/forms/FormSelect.jsx";
import { useNavigate } from "react-router-dom";

export const NewArtist = (props) => {
  const { next } = props;
  const { user } = useAuth()
  const navigate = useNavigate()

  const [file, setFile] = useState(null)

	async function rdyToUpload() {
		if(file != null){
			const downloadUrl = await uploadFile(file)
			console.log('File available at OTRO', downloadUrl)
      setFormData({
        ...formData,
        image: downloadUrl
      });;
		}
	  }

  const [formData, setFormData] = useState({
		name: 'artist_name',
    email: 'email@example.com',
		image: 'https://firebasestorage.googleapis.com/v0/b/geeks-e71e0.appspot.com/o/9d51f7f4-8d54-477b-9cab-45d40a79a3c1?alt=media&token=025d3f8d-8d24-4e9a-9acb-101d0e7b4c36',
		topic: 'topic',
		events: 0,
		hoursbook: 0,
		rating: 0,
		reviews: 0,
		status: 'registrado',
		about: 'about',
    phone: '',
    instagram: '',
    facebook: '',
    youtube: '',
    soundcloud: '',
		joined: serverTimestamp(),
	});

  const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value
		});
		console.log('handleChange')
	};

  const handleAdd = async() =>{
    console.log('Activando handleAdd')
    //const user = firebase.auth().currentUser;
    //formData.createdBy = user.uid;
    try {  
      await setDoc(doc(db, "artistas", user.uid), formData);
      toast.success('Cambios realizados correctamente!')
		  setTimeout(() => {
			navigate(-1);
		  }, 2000);
    } catch (error) {
      console.log(error)
      toast.error('Error: no se logro realizar los cambios')
    }
  }

  const categoryOptions = [
    { value: "DJ", label: "DJ" },
    { value: "Cantante", label: "Cantante" },
    { value: "Banda Musical", label: "Banda Musical" },
  ];

  const Generomusical = [
    { value: "Acapella", label: "Acapella" },
    { value: "Blues", label: "Blues" },
    { value: "clasica", label: "clasica" },
    { value: "Hip Hop", label: "Hip Hop" },
    { value: "Instrumental", label: "Instrumental" },
    { value: "Jazz", label: "Jazz" },
    { value: "Pop", label: "Pop" },
    { value: "Reggae", label: "Reggae" },
    { value: "Reggaeton", label: "Reggaeton" },
    { value: "Rock", label: "Rock" },
    { value: "Salsa", label: "Salsa" },
    { value: "Techno", label: "Techno" },
  ];

  const initialValue = `<p>Escriba aqui la descripcion del evneto</p>
                      <p><br /></p>        
                      <p>Aqui puedes <strong>escribir</strong> texto</p>
                      <p><br /></p><p><br /></p><p><br /></p><p><br /></p>`;

  return (
    <Form>
      {/* Card */}
      <Card className="mb-3 ">
        <Card.Header className="border-bottom px-4 py-3">
          <h4 className="mb-0 text-black">Informacion de Perfil</h4>
        </Card.Header>
        {/* Card body */}
        <Card.Body>
            
          <Form.Group className="mb-1 input-group">
          <Form.Label htmlFor="image">Foto del Artista</Form.Label> 
          <Image
              src={formData.image !== null ? formData.image : Avatar}
              alt=""
              className="rounded-top-md mb-1"
              height="50"
              width="50"
            />
              <Form.Control
                id="image"
                name='image'
                type="file"
                className="form-control w-50"
                onChange={e => setFile(e.target.files[0])}
              />
              <Button variant="primary" className="input-group-text mb-0" onClick={e => rdyToUpload()}  >
                Subir
              </Button>

            </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre Artistico"
              id="name"
              name="name"
              onChange={e => handleChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Correo Electonico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Correo Electronico"
              id="email"
              name="email"
              onChange={e => handleChange(e)}
            />
            <Form.Group className="mb-3">
              <Form.Label htmlFor="phone">Numero De Telefono</Form.Label>
              <Form.Control
                type="phone"
                placeholder="+###-###-####"
                id="phone"
                name="phone"
                onChange={e => handleChange(e)}
              />
            </Form.Group>
          </Form.Group>
          {/* Category */}
          <Form.Group className="mb-3">
            <Form.Label>Categoria</Form.Label>
            <FormSelect
              options={categoryOptions}
              id="category_category"
              name="category_category"
              placeholder="Elegir Categoria"
            />
          </Form.Group>

          {/* Event level */}
          <Form.Group className="mb-3">
            <Form.Label>Genero</Form.Label>
            <FormSelect
              options={Generomusical}
              id="Genero"
              name="Genero"
              placeholder="Genero Musical"
            />
          </Form.Group>

          {/* Event Description*/}
          <Form.Group className="mb-3">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              type="text-area"
              placeholder="Descripcion Detellada"
              id="description"
              name="description"
              onChange={e => handleChange(e)}
            />
            <Form.Text className="text-muted">
              Coloca aqui una despcripcion detallada de ti como artista
              especificando todo lo relevante de tu performance.
            </Form.Text>
            <Form.Group className="mb-3">
              <Form.Label>Repertorio</Form.Label>
              <Form.Control
                type="text-area"
                id="Repertorio"
                name="Repertorio"
                placeholder="Repertorio"
              />
            </Form.Group>
            <Form.Text className="text-muted">
              Coloca aqui el repertorio que manejas si eres un cantante o una
              banda las canciones y si eres un DJ los estilos musicales que
              manejas. 
            </Form.Text>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="courseTitle">Instagram</Form.Label>
              <Form.Control
                type="text"
                placeholder="Link del perfil"
                id="instagram"
                name="instagram"
                onChange={e => handleChange(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="courseTitle">Facebook</Form.Label>
              <Form.Control
                type="text"
                placeholder="Link del perfil"
                id="facebook"
                name="facebook"
                onChange={e => handleChange(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="courseTitle">Youtube</Form.Label>
              <Form.Control
                type="text"
                placeholder="Link del perfil"
                id="youtube"
                name="youtube"
                onChange={e => handleChange(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="courseTitle">Soundcloud</Form.Label>
              <Form.Control
                type="text"
                placeholder="Link del perfil"
                id="soundcloud"
                name="soundcloud"
                onChange={e => handleChange(e)}
              />
            </Form.Group>
          </Form.Group>
        </Card.Body>
      </Card>
      <Button variant="primary" onClick={handleAdd}>
				Registrar nuevo artista...
			</Button>
       {/** copiar codigo de otras partes y pegarlo para decir "desarrollar" x cambiar para que tenga sentido...
      {/* Button }
      <Button variant="primary" onClick={next}>
        Siguiente
      </Button>*/}
    </Form>
  );
};
