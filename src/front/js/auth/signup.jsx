import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";
import { Toaster, toast } from "react-hot-toast";
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Card, Form, Button, Image } from 'react-bootstrap';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase.js'
import { useAuth } from "../context/authContext.js";
import { FormSelect } from "../component/forms/FormSelect.jsx";
import Logo from '../../img/logo.png'



export const SignUp = () => {
    const { signup } = useAuth();
	const { store, actions } = useContext(Context)

    const [user, setUser] = useState({
        email: "",
        password: "",
		role: "",
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const credentials = await signup(user.email, user.password, user.role);
            console.log(credentials)
			toast.success(credentials.user.email + ' registrado correctamente!')
			actions.getArtists()
        	setTimeout(() => {
				navigate("/");
			  }, 2000);
        } catch (error) {
			console.log(error)
			if (error.code === 'auth/email-already-in-use') {
				toast.error("Correo ya registrado", "error")
			  } else if (error.code === 'auth/invalid-email') {
				toast.error("Correo invalido", "error")
			  } else if (error.code === 'auth/weak-password') {
				toast.error("Contrase;a debil", "error")
			  } else if (error.code) {
				toast.error("Algo salio mal", "error")
			  }
        }
    };

	const UserRole = [
		{ value: 'Artista', label: 'Artista'  },
		{ value: 'Usuario', label: 'Usuario' }
	];
/*

const notify = () => toast.success('Registro exitoso!');

export const SignUp = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();


  async function signUpUser(event){
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

	try{
		const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
		toast.success(userCredentials.user.email + ' registrado correctamente!')
	} catch (error){
		console.log(error)
		if (error.code === 'auth/email-already-in-use') {
			toast.error("Correo ya registrado", "error")
		  } else if (error.code === 'auth/invalid-email') {
			toast.error("Correo invalido", "error")
		  } else if (error.code === 'auth/weak-password') {
			toast.error("Contrase;a debil", "error")
		  } else if (error.code) {
			toast.error("Algo salio mal", "error")
		  }
	}
  }*/

  return (
    <Fragment>
			<Row className="align-items-center justify-content-center g-0 min-vh-100">
				<Col lg={5} md={5} className="py-8 py-xl-0">
					<Card>
						<Card.Body className="p-6">
							<div className="mb-0">
								<Link to="/">
									<Image src={Logo} className="mb-0" alt="" />
								</Link>
								<h1 className="mb-1 fw-bold">Registro</h1>
								<span>
									Ya tienes un usuario?{' '}
									<Link to="/login" className="ms-1">
										Login
									</Link>
								</span>
							</div>
							{/* Form */}
							<Form onSubmit={handleSubmit}>
								<Row>
									<Col lg={12} md={12} className="mb-3">
										{/* email */}
										<Form.Label>Correo Eléctronico </Form.Label>
										<Form.Control
											type="email"
                                            onChange={(e) => setUser({ ...user, email: e.target.value })}
											id="email"
											placeholder="Email address here"
											name="email"
											required
										/>
									</Col>
									<Col lg={12} md={12} className="mb-3">
										{/* Password */}
										<Form.Label>Contraseña </Form.Label>
										<Form.Control
											type="password"
                                            onChange={(e) => setUser({ ...user, password: e.target.value })}
											id="password"
											placeholder="**************"
											name="password"
											required
										/>
									</Col>
									<Col lg={12} md={12} className="mb-3">
										<Form.Group className="mb-3">
											<Form.Label>Rol</Form.Label>
											<FormSelect
												className="text-dark"
												options={UserRole}
												id="role"
												name="role"
												placeholder="Elegir Rol"
												onChange={(e) => setUser({ ...user, role: e.target.value })}
												required
											/>
											<Form.Text className="text-muted">
												Quieres contratar o publicar eventos?
											</Form.Text>
										</Form.Group>
									</Col>
									<Col lg={12} md={12} className="mb-3">
										{/* Checkbox */}
										<Form.Check type="checkbox" id="check-api-checkbox">
											<Form.Check.Input 
												type="checkbox"
												id="check" 
												name="check"
												required
											/>
											<Form.Check.Label>
												Estoy de acuerdo con los
												<Link to="/pages/terms-and-conditions">
													Terminos de servicio{' '}
												</Link>{' '}
												y{' '}
												<Link to="/pages/terms-and-conditions">
													Política de privacidad.
												</Link>
											</Form.Check.Label>
										</Form.Check>
									</Col>
									<Col lg={12} md={12} className="mb-0 d-grid gap-2">
										{/* Button */}
										<Button variant="primary" type="submit">
											Registrarse
										</Button>
									</Col>
								</Row>
							</Form>
							<hr className="my-4" />
							<div className="mt-4 text-center">
								
								<Link
									to="/login"
								>
									Ya tienes cuenta?
								</Link>
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
