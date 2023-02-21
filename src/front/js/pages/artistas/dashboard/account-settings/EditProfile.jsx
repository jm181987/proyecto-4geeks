import React, { useContext, useEffect, useState } from 'react'
import { Card, Form, Row, Col, Button, Image } from 'react-bootstrap';
import { DashboardLayout } from '../DashboardLayout.jsx'
import { FormSelect } from '../../../../component/forms/FormSelect.jsx';

{/**IMPORTACION PARA SUBIDA DE DATOS A FIREBASE */ }
import { doc, serverTimestamp, setDoc, updateDoc  } from "firebase/firestore";
import { db } from '../../../../firebase/firebase.js';
import { uploadFile } from '../../../../firebase/firebase.js';
import { useAuth } from '../../../../context/authContext.js';
import Avatar from '../../../../../img/avatar/avatar.jpg'
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Context } from '../../../../store/appContext.js';

export const EditProfile = () => {
    const { store, actions } = useContext(Context)
    const { user } = useAuth()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({});

    const [file, setFile] = useState(null)

    async function rdyToUpload() {
        if (file != null) {
            const downloadUrl = await uploadFile(file)
            console.log('File available at OTRO', downloadUrl)
            setFormData({
                ...formData,
                image: downloadUrl
            });;
        }
    }


    useEffect(() => {
        const artistStore = store.artists.filter(art => art.id == user.uid)
        if (artistStore.length > 0) {
            setFormData(artistStore[0])
        }
        
    }, [store.artists, user.uid])


    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
        console.log('handleChange')
    };

    const handleAdd = async () => {
        console.log('Activando handleAdd')
        //const user = firebase.auth().currentUser;
        //formData.createdBy = user.uid;
        try {
            await updateDoc(doc(db, "artistas", user.uid), formData);
            toast.success('Cambios realizados correctamente!')
            actions.getArtists()
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

    const status = [
        { value: "available", label: "Disponible" },
        { value: "nuevo", label: "No aparecer" },
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

    return (
        <DashboardLayout>
            <Card className="border-0">
                <Card.Header>
                    <div className="mb-3 mb-lg-0">
                        <h3 className="text-dark mb-0">Informacion del Perfil</h3>
                        <p className="mb-0">
                            Desde aqui tienes todo el acceso a la administracion de tu perfil.
                        </p>
                    </div>
                </Card.Header>
                <Card.Body>
                    <div className="d-lg-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center mb-4 mb-lg-0">
                            <Image
                                src={formData.image !== null ? formData.image : Avatar}
                                alt=""
                                className="avatar-xl rounded-circle"
                            />
                            <div className="ms-3">
                                <h4 className="text-dark mb-0">Imagen de perfil</h4>
                                <p className="mb-0">
                                    PNG o JPG no mayor a 800px de ancho y alto.
                                </p>
                            </div>
                        </div>
                        <div>
                            <Form.Control
                                id="image"
                                name='image'
                                type="file"
                                className="form-control mb-1"
                                onChange={e => setFile(e.target.files[0])}
                                size='sm'
                            />
                            <Button variant="primary" size='sm' className="input-group-text mb-0" onClick={e => rdyToUpload()}  >
                                Subir
                            </Button>
                        </div>
                    </div>
                    <hr className="my-5" />
                    <div>
                        <h4 className="text-dark mb-0">Detalles Personales</h4>
                        <p className="mb-4">Edita tu informacion de artista.</p>
                        {/* Form */}
                        <Form>
                            <Row>
                                {/* First name */}
                                <Col md={6} sm={12} className="mb-3">
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="name">Nombre Artistico</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Nombre Artistico"
                                            id="name"
                                            name="name"
                                            onChange={e => handleChange(e)}
                                        />
                                    </Form.Group>
                                </Col>

                                {/* Last name */}
                                <Col md={6} sm={12} className="mb-3">
                                    <Form.Group className="mb-3" >
                                        <Form.Label htmlFor="email">Correo Electonico</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Correo Electronico de Trabajo"
                                            id="workemail"
                                            name="workemail"
                                            onChange={e => handleChange(e)}
                                        />
                                    </Form.Group>
                                </Col>

                                {/* Phone */}
                                <Col md={6} sm={12} className="mb-3">
                                    <Form.Group className="mb-3" >
                                        <Form.Label htmlFor="phone">Numero De Telefono</Form.Label>
                                        <Form.Control
                                            type="phone"
                                            placeholder="+###-###-####"
                                            id="phone"
                                            name="phone"
                                            onChange={e => handleChange(e)}
                                        />
                                    </Form.Group>
                                </Col>

                                {/* About */}
                                <Col md={6} sm={12} className="mb-3">
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Sobre ti</Form.Label>
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
                                    </Form.Group>
                                    </Col>
                                    <Col md={6} sm={12} className="mb-3">
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Estado</Form.Label>
                                        <FormSelect
                                            options={status}
                                            id="status"
                                            name="status"
                                            placeholder="Elegir Estado"
                                            onChange={e => handleChange(e)}
                                        />
                                    </Form.Group>
                                </Col>

                                    <Col md={6} sm={12} className="mb-3">
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Etiquetas</Form.Label>
                                        <Form.Control
                                            type="text-area"
                                            id="topic"
                                            name="topic"
                                            placeholder="Etiquetas"
                                            onChange={e => handleChange(e)}
                                        />
                                    </Form.Group>
                                </Col>

                                {/* Categoria */}
                                <Col md={6} sm={12} className="mb-3">
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Categoria</Form.Label>
                                        <FormSelect
                                            options={categoryOptions}
                                            id="category_category"
                                            name="category_category"
                                            placeholder="Elegir Categoria"
                                            onChange={e => handleChange(e)}
                                        />
                                    </Form.Group>
                                </Col>

                                {/* Genero */}
                                <Col md={6} sm={12} className="mb-3">
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Genero</Form.Label>
                                        <FormSelect
                                            options={Generomusical}
                                            id="Genero"
                                            name="Genero"
                                            placeholder="Genero Musical"
                                            onChange={e => handleChange(e)}
                                        />
                                    </Form.Group>
                                </Col>

                                {/* Button */}
                                <Col sm={12} md={12}>
                                    <Button variant="primary" onClick={handleAdd}>
                                        Actualizar Perfil
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Card.Body>
            </Card>
        </DashboardLayout>
    )
}
