import React, { Fragment } from 'react'
import { 
    Container, 
    Row, 
    Col, 
    Nav,
    Card,
    Tab, 
    ListGroup,
    Image,
    ListGroupItem
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Tippy from '@tippyjs/react'
import 'tippy.js/animations/scale.css'

import Avatar1 from '../../../img/avatar/avatar-11.jpg'
//Estrellas para ratings
import Ratings from '../../component/common/ratings/Ratings.jsx'

import { DescriptionTab } from './DescriptionTap.jsx'

//Portada del evento
import EventPoster from '../../../img/poster/poster1.jpg'

export const EventSingle = () => {
  return (
    <Fragment>
        {/* Page Header */}
        <div className='pt-lg-8 pb-lg-16 pt-8 pb-12'>
            <Container xl={7} lg={7} md={12} sm={12}>
                <Row className='align-items-center'>
                    <Col>
                        <div>
                            <h1 className='display-4 fw-bold'>Revolution Event Title Example</h1>
                        </div>
                        <p className='text-white mb-6 lead'>
                            Esto es un a descripcion del evento.
                        </p>
                        <div className='d-felx align-items-center'>
                            <Tippy content="Agregar a Favoritos" animation={'scale'}>
                                <Link to='#' className='bookmark text-white text-decoration-none'>
                                    <i className="fe fe-bookmark text-white-50 me-2"></i>
									Agendar
                                </Link>
                            </Tippy>
                            <span className='text-white ms-3'>
                                <i className='fe fe-user text-white-50'></i>10 Contratados 
                            </span>
                            <span className='ms-4'>
                                <span className='text-warning'>
                                    <Ratings rating={4}/>
                                    <span className='ms-1 text-white'>(5)</span>
                                </span>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        {/* Page content */}
        <div className='pb-10'>
            <Container>
                <Row>
                    <Col lg={8} md={12} sm={12} className="mt-n8 mb-4 mb-lg-0">
                        <Tab.Container defaultActiveKey='descripcion'>
                            <Card>
                                <Nav className='nav-lb-tab'>
                                    {[
                                        'Descripcion',
                                        'FAQ'
                                    ].map((item, index) => (
                                        <Nav.Item key={index}>
                                            <Nav.Link href={`#${item.toLowerCase()}`} eventKey={item.toLowerCase()}
                                            className='mb-sm-3 mb-md-0'>
                                                {item}
                                            </Nav.Link>
                                        </Nav.Item>
                                    ))}
                                </Nav>
                                <Card.Body className='p-0'>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="descripcion" className='pb-4 pt-3 px-4'>
                                            {/* Tab de Descripcion */}
                                            <DescriptionTab />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="faq" className='pb-4 p-4'>
                                            {/* Tab de FAQ */}
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Card.Body>
                            </Card>
                        </Tab.Container>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mt-lg-n22">
                        <Card className='mb-4'>
                            <div className='p-1'>
                                <div
                                    className='d-flex justify-content-center position-relative rounded py-10 border-white border rounded-3 bg-cover'
                                    style={{
                                        background: `url(${EventPoster})`,
                                        backgroundSize: '500px',
                                        backgroundPosition: 'top center',
                                        backgroundRepeat: 'no-repeat'

                                    }}
                                >
                                    <Link to='popup-youtube icon-shape rounded-circle btn-play icon-xl text-decoration-none'>
                                         PLAY
                                    </Link>
                                </div>
                            </div>

                            {/* AQUI EL PREVIEW DE MUSICA */}

                            {/* AQUI TERMINA EL PREVIEW DE MUSICA */}

                            <Card.Body>
                                {/* AQUI VA EL PRECIO */}
                                <div className='mb-3'>
                                    <span className='text-dark fw-bold h2 me-2'>$200</span>
                                    <del className='fs-4 text-muted'>$450</del>
                                </div>
                                <div className='d-grid'> 
                                    <Link to='#' className='btn btn-outline-primary mb-2'>
                                        Contratar evento
                                    </Link>
                                    <Link to='#' className='btn btn-outline-primary'>
                                        Ver Perfil
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className='mb-4'>
                            <Card.Header>
                                <h4 className='mb-0'>Que esta incluido?</h4>
                            </Card.Header>
                            <Card.Body className='p-0'>
                                <ListGroup className='flush'>
                                    <ListGroup.Item>
                                        X Horas de musica en vivo
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Juego de polvora al finalizar
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Set de DJ profesional
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Pantalla con animaciones
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                        <Card className='mb-4'>
                            <Card.Body>
                                <div className='d-flex align-items-center'>
                                    <div className='position-relative'>
                                        <Image src={Avatar1} className='rounded-circle avatar-xl'/>
                                        <Link to='#' className='postion-absolute mt-2 ms-n3'>
                                            <Image />
                                        </Link>
                                    </div>
                                    <div className='ms-4'>
                                        <h3 className='mb-0'>Alejandro Fantini</h3>
                                        <p className='mb-1 fs-6'>DJ, Tehcno</p>
                                        <span className='text-warning'>
                                            4,5
                                        </span>
                                        <span className='mdi mdi-star text-warning me-2'></span>
                                        Opiniones
                                    </div>
                                </div>
                                <Row className='border-top border-bottom'>
                                    <Col>
                                        <div className='pe-1 ps-3 py-3'>
                                            <h5 className='mb-0'>677</h5>
                                            <span>Horas</span>
                                        </div>
                                    </Col>
                                    <Col className='border-start'>
                                        <div className='pe-1 ps-3 py-3'>
                                            <h5 className='mb-0'>11</h5>
                                            <span>Eventos</span>
                                        </div>
                                    </Col>
                                    <Col className='border-start'>
                                        <div className='pe-1 ps-3 py-3'>
                                            <h5 className='mb-0'>143</h5>
                                            <span>Opiniones</span>
                                        </div>
                                    </Col>
                                </Row>
                                <p>Soy un apasionado de la musica electronica....ChatGPT AQUI</p>
                                <Link to='' className='btn btn-primary btn-outline-white btn-sm'>
                                    Ver Perfil
                                </Link>
                            </Card.Body>
                        </Card>
                        


                    </Col>
                </Row>
                {/* UNA MEJORA PUEDE SER PONER AQUI LOS CURSOS RELACIONADOS */}
            </Container>
        </div>

    </Fragment>
  )
}
