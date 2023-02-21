import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";
import { Toaster, toast } from "react-hot-toast";


import { Card, Row, Container, Column } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const notify = () => toast.success('Registro exitoso!');

export const SignUp = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  function signUpUser(event) {
    // Previene el comportamiento por defecto, evitando que la pagina se recargue
    event.preventDefault();
    // Se crea un objeto "FormData" con los datos del formulario
    let data = new FormData(event.target);
    // Se obtiene el nuevo item del formulario
    let email = data.get("email");
    let password = data.get("password");
    let confirm = data.get("confirm");
    let phoneNumber = data.get("phone-number");
    let check = data.get("check");
    if (password !== confirm) {
      console.error("Las claves no coinciden");
      return;
    }
    if (!check) {
      console.error("El usuario no acepto los terminos");
      toast.error("El usuario no acepto los terminos");
      return;
    }

    actions
      .signUp(email, password, phoneNumber)
      .then((resp) => {
        if (resp.code == 201){
          notify()
          setTimeout(()=> navigate("/login"), 2500)
          }
        else console.log("Problema en el registro de usuario: ", resp);
      })
      .catch((error) => {
        console.log("Error en el registro: ", error);
      });
  }

  return (
    <Container>
      <Row>
        <Card>
          <h1>Registro</h1>
          <Form onSubmit={signUpUser}>
            <Form.Group className="mb-3">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Correo electrónico"
                name="email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                name="password"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirmar contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirme su contraseña"
                name="confirm"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label># WhatsApp</Form.Label>
              <Form.Control
                type="text"
                placeholder="Su número de WhatsApp"
                name="phone-number"
              />
              <Form.Text className="text-muted">
                No compartiremos ninguno de sus datos con terceros.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Acepto los terminos y condiciones"
                required
                name="check"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Registrarse
            </Button>
          </Form>
        </Card>
      </Row>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </Container>
  );
};
