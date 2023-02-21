import React, { useContext, useState } from 'react'
import {
  Card,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { DashboardLayout } from '../DashboardLayout.jsx'
import { useAuth } from '../../../../context/authContext.js'
import { Toaster, toast } from "react-hot-toast";
import { Context } from '../../../../store/appContext.js'

export const SocialProfiles = () => {
  const { store, actions } = useContext(Context)
  const { user } = useAuth()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    instagram: '/',
    facebook: '/',
    youtube: '/',
    soundcloud: '/'
  });

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
      await setDoc(doc(db, "artistas", user.uid), formData);
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

  return (
    <DashboardLayout>
      <Card className='border-0'>
        <Card.Header>
          <div className='mb-3 mb-lg-0'>
            <h3 className='text-dark mb-0'>Redes Sociales</h3>
            <p className='mb-0'>
              Agrega tus redes sociales...
            </p>
          </div>
        </Card.Header>
        <Card.Body>
          <Form>
            {/** SoundCloud */}
            <Row className='mb-5'>
              <Col lg={3} md={4} sm={12}>
                <h5 className='text-dark'>SoundCloud</h5>
              </Col>
              <Col>
                <Form.Control
                  type='text'
                  placeholder='SoundCloud link'
                  className='form-control mb-1'
                  id='soundcloud'
                  name='soundcloud'
                  onChange={e => handleChange(e)}
                />
                <Form.Text className='text-muted'>Agrega el URL de tu perfil de SoundCloud</Form.Text>
              </Col>
            </Row>
            {/** Youtube */}
            <Row className='mb-5'>
              <Col lg={3} md={4} sm={12}>
                <h5 className='text-dark'>YouTube</h5>
              </Col>
              <Col>
                <Form.Control
                  type='text'
                  placeholder='YouTube link'
                  className='form-control mb-1'
                  id='youtube'
                  name='youtube'
                  onChange={e => handleChange(e)}
                />
                <Form.Text className='text-muted'>Agrega el URL de tu perfil de YouTube</Form.Text>
              </Col>
            </Row>
            {/** Facebook */}
            <Row className='mb-5'>
              <Col lg={3} md={4} sm={12}>
                <h5 className='text-dark'>Facebook</h5>
              </Col>
              <Col>
                <Form.Control
                  type='text'
                  placeholder='Facebook link'
                  className='form-control mb-1'
                  id='facebook'
                  name='facebook'
                  onChange={e => handleChange(e)}
                />
                <Form.Text className='text-muted'>Agrega el URL de tu perfil de Facebook</Form.Text>
              </Col>
            </Row>
            {/** Instagram */}
            <Row className='mb-5'>
              <Col lg={3} md={4} sm={12}>
                <h5 className='text-dark'>Instagram</h5>
              </Col>
              <Col>
                <Form.Control
                  type='text'
                  placeholder='Instagram link'
                  className='form-control mb-1'
                  id='instagram'
                  name='instagram'
                  onChange={e => handleChange(e)}
                />
                <Form.Text className='text-muted'>Agrega el URL de tu perfil de Instagram</Form.Text>
              </Col>
            </Row>
            {/** BOTON */}
            <Row>
              <Col>
                <Button variant="primary" onClick={handleAdd}>
                  Actualizar redes sociales
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </DashboardLayout>
  )
}
