import React from "react";
import { Card, Form, Button } from "react-bootstrap";

// import custom components
import { FormSelect } from "/workspace/proyecto-4geeks/src/front/js/component/forms/FormSelect.jsx";

export const Detallesdeusuario = (props) => {
 
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
              placeholder="Nombre y apellido"
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
         
          
          
        </Card.Body>
      </Card>
      {/* Button */}
      <Button variant="primary" onClick={next}>
        Siguiente
      </Button>
    </Form>
  );
};
