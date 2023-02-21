import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
    Container,
    Col,
    Row,
    Card,
    Button,
    ListGroup
} from 'react-bootstrap'
import { Context } from '../../store/appContext.js'
import ArtistCard from '../../component/artists/ArtistCard.jsx'
import { ProfileCover } from '../../component/common/page-headings/ProfileCover.jsx'

export const ArtistProfile = () => {
    const { store, actions } = useContext(Context);
    const params = useParams()
    let artistId = params.theid
    const [artist, setArtist] = useState({})
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }

    useEffect(() => {
        const artistStore = store.artists.filter(art => art.id == artistId)
        if (artistStore.length > 0) {
            setArtist(artistStore[0])
        }
    }, [store.artists, artistId])


    return (
        <Fragment>
            {/** PORTADA */}
            <ProfileCover dashboardData={artist} />
            {/** FIN PORTADA */}
            <div className='py-5 py-md-5'>
                <Container>
                    <Row>
                        <Col lg={3} md={4} sm={12}>
                            <Card className='border-0 mb-3'>
                                <Card.Body>
                                    <h4 className='text-dark'>Sobre Mi</h4>
                                    <p>{artist.about}</p>
                                </Card.Body>
                            </Card>
                            <Card className="border-0 mb-3 mb-lg-0">
                                <Card.Body>
                                    <div className='d-flex align-items-center justify-content-between border-bottom pb-3 mb-3'>
                                        <div>

                                            <h4 className='text-dark mb-0 fw-bold'>{artist.events}</h4>
                                            <p className='fs-6 mb-0'>Eventos</p>
                                        </div>
                                        <div>
                                            <span>
                                                <i className=''></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between border-bottom pb-3 mb-3'>
                                        <div>

                                            <h4 className='text-dark mb-0 fw-bold'>{artist.hoursbook}</h4>
                                            <p className='fs-6 mb-0'>Horas contratado</p>
                                        </div>
                                        <div>
                                            <span>
                                                <i className=''></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div>

                                            <h4 className='text-dark mb-0 fw-bold'>{artist.reviews}</h4>
                                            <p className='fs-6 mb-0'>Opiniones</p>
                                        </div>
                                        <div>
                                            <span>
                                                <i className="bi bi-star"></i>
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Header>
                                    <h4 className='text-dark mb-0'>Mis Eventos{' '}
                                        {/** AQUI SE FILTRA LA CANTIDAD DE EVENTOS PUBLICADOS */}
                                        <span className='text-muted fs-6'>
                                            (
                                            {
                                                store.events.filter(function (datasource) {
                                                    return (
                                                        datasource.artist_id ===
                                                        artistId
                                                    );
                                                }).length
                                            }
                                            )
                                        </span>
                                    </h4>
                                </Card.Header>
                                <Card.Body>
                                    <ListGroup variant="flush" className='mb-3'>
                                        {store.events.filter(function (datasource) {
                                            return (
                                                datasource.artist_id ===
                                                artistId
                                            );
                                        }).map((item, index) => (
                                            <ListGroup.Item key={index} className="px-0">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <Link to="#">
                                                        <ArtistCard item={item} viewby="listgroup" />
                                                    </Link>

                                                </div>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                    <Button onClick={goBack} className='btn btn-danger'>
                                        &larr; Volver
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    )
}


