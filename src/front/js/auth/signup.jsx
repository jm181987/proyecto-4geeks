import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

import { Card, Row, Container, Column } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
      return;
    }

    actions
      .signUp(email, password, phoneNumber)
      .then((resp) => {
        if (resp.code == 201) navigate("/login");
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="confirm"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Phone Number"
                name="phone-number"
              />
              <Form.Text className="text-muted">
                We'll never share your phone Number with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="I accept the terms"
                required
                name="check"
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={() => actions.signUp(email, password, phoneNumber)}>
              Submit
            </Button>
          </Form>
        </Card>
      </Row>
    </Container>
  );
};
