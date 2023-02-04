import React from 'react';
import { useContext } from 'react';
import {  Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, Form, Button, Image } from 'react-bootstrap';
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

// import media files
//import Logo from '';

export const Login = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  function login(event) {
    // Previene el comportamiento por defecto, evitando que la pagina se recargue
    event.preventDefault();
    // Se crea un objeto "FormData" con los datos del formulario
    let data = new FormData(event.target);
    // Se obtiene el nuevo item del formulario
    let email = data.get("email");
    let password = data.get("password");

    actions
      .login(email, password)
      .then((resp) => {
        if (resp.code == 200) navigate("/");
        else console.log("Problema en el acceso de usuario: ", resp);
      })
      .catch((error) => {
        console.log("Error en el registro: ", error);
      });
  }

	return (
		<Fragment>
			<Row className="align-items-center justify-content-center g-0 min-vh-100">
				<Col lg={5} md={5} className="py-8 py-xl-0">
					<Card>
						<Card.Body className="p-6">
							<div className="mb-4">
								<Link to="/">
									<Image src="" className="mb-4" alt="" />
								</Link>
								<h1 className="mb-1 fw-bold">Ingresar</h1>
								<span>
									No tienes una cuenta?{' '}
									<Link to="/authentication/sign-up" className="ms-1">
										Registrarse
									</Link>
								</span>
							</div>
							{/* Form */}
							<Form onSubmit={login}>
								<Row>
									<Col lg={12} md={12} className="mb-3">
										{/* Username or email */}
										<Form.Label>Correo Eléctronico</Form.Label>
										<Form.Control
											type="email"
											id="email"
											placeholder="Correo eléctronico"
											required
										/>
									</Col>
									<Col lg={12} md={12} className="mb-3">
										{/* Password */}
										<Form.Label>Contraseña </Form.Label>
										<Form.Control
											type="password"
											id="password"
											placeholder="**************"
											required
										/>
									</Col>
									<Col lg={12} md={12} className="mb-3">
										{/* Checkbox */}
										<div className="d-md-flex justify-content-between align-items-center">
											<Form.Group
												className="mb-3 mb-md-0"
												controlId="formBasicCheckbox"
											>
												<Form.Check type="checkbox" label="Remember me" />
											</Form.Group>
											<Link to="/authentication/forget-password">
												Olvidaste tu contraseña?
											</Link>
										</div>
									</Col>
									<Col lg={12} md={12} className="mb-0 d-grid gap-2">
										{/* Button */}
										<Button variant="primary" type="submit">
											Sign in
										</Button>
									</Col>
								</Row>
							</Form>
							<hr className="my-4" />
							<div className="mt-4 text-center">
								{/* Facebook */}
								<Link
									to="#"
									className="btn-social btn-social-outline btn-facebook"
								>
									<i className="fab fa-facebook"></i>
								</Link>{' '}
								{/* Twitter */}
								<Link
									to="#"
									className="btn-social btn-social-outline btn-twitter"
								>
									<i className="fab fa-twitter"></i>
								</Link>{' '}
								{/* LinkedIn */}
								<Link
									to="#"
									className="btn-social btn-social-outline btn-linkedin"
								>
									<i className="fab fa-linkedin"></i>
								</Link>{' '}
								{/* GitHub */}
								<Link
									to="#"
									className="btn-social btn-social-outline btn-github"
								>
									<i className="fab fa-github"></i>
								</Link>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};


