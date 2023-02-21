import React from 'react'
import { 
  Card,
  Row,
  Col,
  Form,
  Button } from 'react-bootstrap'
import { DashboardLayout } from '../DashboardLayout.jsx'


export const SocialProfiles = () => {
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
                />
                <Form.Text className='text-muted'>Agrega el URL de tu perfil de Instagram</Form.Text>
              </Col>
            </Row>
            {/** BOTON */}
            <Row>
              <Col>
                <Button>
                  Guardar Redes Sociales
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </DashboardLayout>
  )
}
