import React from "react";
import { Card, Form, Button } from "react-bootstrap";

// import custom components
import { FormSelect } from "/workspace/proyecto-4geeks/src/front/js/component/forms/FormSelect.jsx";

export const Artistanuevo = (props) => {
  const { next } = props;

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
          <h4 className="mb-0">Informacion de Perfil</h4>
        </Card.Header>
        {/* Card body */}
        <Card.Body>
          {/* Title  */}
          <Form.Group className="mb-3">
            <Form.Label htmlFor="courseTitle">Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre Artistico"
              id="Name"
              name="Name"
			  
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="courseTitle">Correo Electonico</Form.Label>
            <Form.Control
              type="text"
              placeholder="Correo Electronico"
              id="Correo"
              name="Correo"
            />
            <Form.Group className="mb-3">
              <Form.Label htmlFor="courseTitle">Numero De Telefono</Form.Label>
              <Form.Control
                type="text"
                placeholder="+###-###-####"
                id="Numero"
                name="Numero"
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
              id="profile_description"
              name="profile_description"
            />
            <Form.Text className="text-muted">
              Coloca aqui una despcripcion detallada de ti como artista
              especificando todo lo relevante de tu performance y del repertorio
              musical que manejas.
            </Form.Text>
			<Form.Group className="mb-3">
              <Form.Label htmlFor="courseTitle">Instagram</Form.Label>
              <Form.Control
                type="text"
                placeholder="Link del perfil"
                id="LinkIG"
                name="LinkIG"
              />
            </Form.Group>
			<Form.Group className="mb-3">
              <Form.Label htmlFor="courseTitle">Facebook</Form.Label>
              <Form.Control
                type="text"
                placeholder="Link del perfil"
                id="LinkFB"
                name="LinkFB"
              />
            </Form.Group> <Form.Group className="mb-3">
              <Form.Label htmlFor="courseTitle">Soundcloud</Form.Label>
              <Form.Control
                type="text"
                placeholder="Link del perfil"
                id="LinkSC"
                name="LinkSC"
              />
            </Form.Group>
		  </Form.Group>
		  
        </Card.Body>
      </Card>
      {/* Button */}
      <Button variant="primary" onClick={next}>
        Siguiente
      </Button>
    </Form>
  );
};
