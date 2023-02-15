import React from 'react';
import { useState, useContext } from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, Form, Button, Image } from 'react-bootstrap';
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.js'
import { useAuth } from '../context/authContext.js';
import { GoogleAuthProvider } from 'firebase/auth';


// import media files
//import Logo from '';

export const Login = () => {
	/*const { store, actions } = useContext(Context);
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
		  const user = credentials.user
		  dispatch({type:'LOGIN', payload: user})
		  navigate('/')
	  } catch (error) {
		  if (error.code === 'auth/wrong-password') {
			  toast.error("Contrase;a incorrecta", "error")
			} else if (error.code === 'auth/user-not-found') {
			  toast.error("Usuario no encontrado", "error")
			} else {
			  toast.error("Algo salio mal...", "error")
			}
	  }
	}*/

	const [user, setUser] = useState({
		email: "",
		password: "",
	  });
	  const { login, loginWithGoogle, resetPassword } = useAuth();
	  const [error, setError] = useState("");
	  const navigate = useNavigate();
	
	  const handleSubmit = async (e) => {
		e.preventDefault();
		toast.error("");
		try {
		  await login(user.email, user.password);
		  navigate("/");
		} catch (error) {
			toast.error(error.message);
		}
	  };
	
	  const handleChange = ({ target: { value, name } }) =>
		setUser({ ...user, [name]: value });
	
	  const handleGoogleSignin = async () => {
		try {
		  await loginWithGoogle();
		  navigate("/");
		} catch (error) {
			toast.error(error.message);
		}
	  };
	
	  const handleResetPassword = async (e) => {
		e.preventDefault();
		if (!user.email) return toast.error("Write an email to reset password");
		try {
		  await resetPassword(user.email);
		  toast.error('We sent you an email. Check your inbox')
		} catch (error) {
		toast.error(error.message);
		}
	  };

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
							<Form onSubmit={handleSubmit}>
								<Row>
									<Col lg={12} md={12} className="mb-3">
										{/* Username or email */}
										<Form.Label>Correo Eléctronico</Form.Label>
										<Form.Control
											type="email"
											name="email"
											id="email"
											onChange={handleChange}
											placeholder="Correo eléctronico"
											required
										/>
									</Col>
									<Col lg={12} md={12} className="mb-3">
										{/* Password */}
										<Form.Label>Contraseña </Form.Label>
										<Form.Control
											type="password"
											name="password"
											id="password"
											onChange={handleChange}
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
											<Button onClick={handleResetPassword}>
												Olvidaste tu contraseña?
											</Button>
										</div>
									</Col>
									<Col lg={12} md={12} className="mb-0 d-grid gap-2">
										{/* Button */}
										<Button variant="primary" type="submit">
											Acceder
										</Button>
									</Col>
								</Row>
							</Form>
							<hr className="my-4" />
							<div className="mt-4 text-center">
								{/* Google */}
								<a
									className="btn-social btn-social-outline btn-google"
									onClick={handleGoogleSignin}
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


