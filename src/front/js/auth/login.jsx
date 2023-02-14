import React from 'react';
import { useContext } from 'react';
import {  Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, Form, Button, Image } from 'react-bootstrap';
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.js'
import { GoogleAuthProvider } from 'firebase/auth';

// import media files
//import Logo from '';

export const Login = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  async function login(event) {
    // Previene el comportamiento por defecto, evitando que la pagina se recargue
    event.preventDefault();
    // Se crea un objeto "FormData" con los datos del formulario
    let data = new FormData(event.target);
    // Se obtiene el nuevo item del formulario
    let email = data.get("email");
    let password = data.get("password");
	try {
		const credentials = await signInWithEmailAndPassword( auth, email, password)
		console.log(credentials)
	} catch (error) {
		if (error.code === 'auth/wrong-password') {
			toast.error("Contrase;a incorrecta", "error")
		  } else if (error.code === 'auth/user-not-found') {
			toast.error("Usuario no encontrado", "error")
		  } else {
			toast.error("Algo salio mal...", "error")
		  }
	}
  }

  async function googleLogin(){
	const provider = new GoogleAuthProvider

	try {
		const credentials = await signInWithPopup(auth, provider)
		toast.success('Hola ' + credentials.user.displayName)
	} catch (error) {
		console.log(error)
		
	}
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
											name='email'
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
											name='password'
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
												<Form.Check type="checkbox" label="Recuerdame" />
											</Form.Group>
											
										</div>
									</Col>
									<Col lg={12} md={12} className="mb-0 d-grid gap-2">
										{/* Button */}
										<Button  variant="primary" type="submit" >
											Iniciar Sesion
										</Button>
										<Button  href="/password" >
											Olvide Contraseña
										</Button>
									</Col>
								</Row>
							</Form>
							<hr className="my-4" />
							<div className="mt-4 text-center">
								{/* Google */}
								<a
									className="btn-social btn-social-outline btn-google"
									onClick={googleLogin}
								>
									<i className="fab fa-google"></i>
								</a>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Toaster
				position="top-center"
				reverseOrder={false}
			/>
		</Fragment>
	);
};


