import React, { Fragment, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { 
    Container, 
    Row, 
    Col, 
    Nav,
    Card,
    Tab, 
    ListGroup,
    Image,
    ListGroupItem,
    Button
} from 'react-bootstrap'
import { Context } from '../../store/appContext.js'

import { Link, useLocation, useParams, useNavigate } from 'react-router-dom'

import Tippy from '@tippyjs/react'
import 'tippy.js/animations/scale.css'

import Avatar1 from '../../../img/avatar/avatar-11.jpg'
//Estrellas para ratings
import Ratings from '../../component/common/ratings/Ratings.jsx'

import { DescriptionTab } from './DescriptionTap.jsx'
import PaypalButton from "../../paypal/paypal-integration.jsx";

//Portada del evento
import EventPoster from '../../../img/poster/poster1.jpg'
import CheckLabel from '../../../img/check-mark.png'

import ModalVideo from 'react-modal-video'
import AllArtistData from '../../../data/slider/AllArtistData.jsx'
import { useAuth } from '../../context/authContext.js';

export const EventSingle = () => {
    const { store, actions } = useContext(Context);
    const { usuariodb } = useAuth()
    const [isOpen, setOpen] = useState(false);
    const params = useParams()
    let eventId = params.theid
    const [event, setEvent] = useState({})
    const navigate = useNavigate()
    const goBack = () =>{
      navigate(-1)
    }

    const [artist, setArtist] = useState({})
    
    useEffect(() => {
        const eventStore = store.events.filter(evnt => evnt.id == eventId)
        if (eventStore.length > 0) {
            setEvent(eventStore[0])
        }
    }, [store.events, eventId])
    
    useEffect(() => {
        const artistStore = store.artists.filter(art => art.id == event.artist_id)
        if (artistStore.length > 0) {
            setArtist(artistStore[0])
        }
    }, [store.artists, event.artist_id])
    
    return (
        <Fragment>
            {/* Page Header */}
            <div className='pt-lg-8 pb-lg-16 pt-8 pb-12'>
                <Container>
                    <Row className='align-items-center'>
                        <Col xl={7} lg={7} md={12} sm={12}>
                            <div>
                                <h1 className='display-4 fw-bold'>{event.title}</h1>
                                <h4>{event.id}</h4>
                                <p className='text-white mb-6 lead'>
                                    Esto es un a descripcion del evento.
                                </p>
                                <div className='d-felx align-items-center'>
                                    <span className='text-white ms-3'>
                                        {event.booked} Contratados 
                                    </span>
                                    <span className='ms-4'>
                                        <span className='text-warning'>
                                            <Ratings rating={event.rating}/>
                                            <span className='ms-1 text-white'>({event.ratingby})</span>
                                        </span>
                                    </span>
                                </div>
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
                                            'Descripcion'
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
                                        className='d-flex justify-content-center position-relative rounded py-20 border-white border rounded-3 bg-cover'
                                        style={{
                                            background: `url(${event.image})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'contian',
                                            backgroundPosition: 'top center'
                                        
                                        }}
                                    >
                                        <Button className="popup-youtube  rounded-circle btn-play text-decoration-none" onClick={()=> setOpen(true)}>PLAY</Button>
                                    </div>
                                </div>

                                {/* AQUI EL PREVIEW DE MUSICA */}
                                
                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={event.video_url} onClose={() => setOpen(false)} />

                                {/* AQUI TERMINA EL PREVIEW DE MUSICA */}

                                <Card.Body>
                                    {/* AQUI VA EL PRECIO */}
                                    <div className='mb-3'>
                                        <span className='text-dark fw-bold h2 me-2'>${event.price}</span>
                                        {/* <del className='fs-4 text-danger text-muted'>$450</del>*/}
                                    </div>
                                    <div className='d-grid'> 

                                        {/*<Link to='#' className='btn btn-outline-primary mb-2'>
                                            Contratar evento
                                    </Link>*/}
                                        {usuariodb && usuariodb.role === "Usuario" && (
    
                                            <div className="paypalButton mt-3"><PaypalButton price={event.price} eventid={event.id} /></div>
                                        )}
                                        <Link to={'/artistas/' + event.artist_id} className='btn btn-outline-primary'>
                                            Ver Perfil
                                        </Link>


                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className='mb-4'>
                                <Card.Header>
                                    <h4 className='mb-0 text-black'>Que esta incluido?</h4>
                                </Card.Header>
                                <Card.Body className='p-0'>
                                <ListGroup className='flush'>
                                    {event.features && Array.isArray(event.features) && event.features.map((item, index) => (
                                        <ListGroup.Item key={index} className='align-middle me-2 text-primary'>
                                            {item}
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                                </Card.Body>
                            </Card>
                            <Card className='mb-4'>
                                <Card.Body>
                                    <div className='d-flex flex-row'>
                                        <div className='position-relative'>
                                            <Image src={artist.image} className='rounded-circle avatar-xl'/>
                                            <Link
                                                    to="#"
                                                    className="position-absolute mt-2 ms-n3"
                                                    data-bs-toggle="tooltip"
                                                    data-placement="top"
                                                    title="Verifed"
                                                >
                                                    <Image
                                                        src={CheckLabel}
                                                        alt=""
                                                        height="30"
                                                        width="30"
                                                    />
                                                </Link>
                                        </div>
                                        <div className='ms-4'>
                                            <h4 className='mb-1 text-black'>{artist.name}</h4>
                                            <p className='mb-1 fs-6'>{artist.topic}</p>
                                            <span className='fs-6'>
                                                <span className='text-warning'>4,5</span>
                                                <span className='mdi mdi-star text-warning me-2'></span>
                                                Opiniones
                                            </span>
                                        </div>
                                    </div>
                                    <Row className='border-top mt-3 border-bottom mb-3 g-0'>
                                        <Col>
                                            <div className='pe-1 ps-3 py-3'>
                                                <h5 className='mb-0 text-black'>{artist.hoursbook}</h5>
                                                <span>Horas</span>
                                            </div>
                                        </Col>
                                        <Col className='border-start'>
                                            <div className='pe-1 ps-3 py-3'>
                                                <h5 className='mb-0 text-black'>{artist.events}</h5>
                                                <span>Eventos</span>
                                            </div>
                                        </Col>
                                        <Col className='border-start'>
                                            <div className='pe-1 ps-3 py-3'>
                                                <h5 className='mb-0 text-black'>{artist.reviews}</h5>
                                                <span>Opiniones</span>
                                            </div>
                                        </Col>
                                    </Row>
                                    <p>{artist.about}</p>
                                    <Link to={`/artistas/${event.artist_id}`} className='btn btn-primary btn-outline-white btn-sm text-white'>
                                        Ver Perfil
                                    </Link>
                                </Card.Body>
                            </Card>
                            <Button onClick={goBack} className='btn btn-danger'>
                                &larr; Volver
                            </Button>


                        </Col>
                    </Row>
                    {/* UNA MEJORA PUEDE SER PONER AQUI LOS CURSOS RELACIONADOS */}
                </Container>
            </div>

        </Fragment>
    )
}

EventSingle.propTypes = {
    location: PropTypes.object.isRequired
  };
