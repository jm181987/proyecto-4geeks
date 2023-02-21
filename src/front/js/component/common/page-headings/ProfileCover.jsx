import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { 
    Card,
    Row,
    Col,
    Image,
    Container,
    Badge
 } from 'react-bootstrap'

 // import MDI icons
import Icon from '@mdi/react';
import {
	mdiFacebook,
	mdiTwitter,
	mdiYoutube,
	mdiInstagram
} from '@mdi/js';


export const ProfileCover = ({ dashboardData }) => {
  return (
    <Fragment>
        {/** IMG DE PORTADA */}
        <div
            className='py-10 bg-primary'
        ></div>
        {/** INFORMACION */}
        <Card className='p-lg-2 pt-2 pt-lg-0 rounded-0 border-0'>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={8} md={8} sm={12}>
                        <div className='d-flex align-items-center'>
                            <div className='position-relative mt-n9'>
                                <Image
                                    src={dashboardData.image}
                                    alt='foto perfil artista'
                                    className='rounded-circle avatar-xxl border-white border border-4 position-relative'
                                />
                            </div>
                            <div className='ms-3'>
                                <div className='d-flex align-items-center'>
                                    <h3 className='mb-0 fw-bold me-2 text-dark'>{dashboardData.name}</h3>
                                    <Badge
                                        bg='secondary'
                                        className='bg-light-primary text-primary ms-3'
                                    >{dashboardData.badge}</Badge>
                                </div>
                                <span className='fs-6'>{dashboardData.topic}</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
							<div className="fs-4 mt-4 mt-lg-0 pb-2 pb-lg-0 d-lg-flex justify-content-end">
								<Link to={`${dashboardData.youtube}`}>
									{' '}
									<Icon
										path={mdiYoutube}
										size={0.6}
										className="text-muted me-2"
									/>{' '}
								</Link>
                                <Link to={`${dashboardData.instagram}`}>
									{' '}
									<Icon
										path={mdiInstagram}
										size={0.6}
										className="text-muted me-2"
									/>{' '}
								</Link>
								<Link to={`${dashboardData.facebook}`}>
									{' '}
									<Icon
										path={mdiFacebook}
										size={0.6}
										className="text-muted me-2"
									/>{' '}
								</Link>
								<Link to={`${dashboardData.soundcloud}`}>
									{' '}
									<Icon
										path={mdiTwitter}
										size={0.6}
										className="text-muted me-2"
									/>
								</Link>
								
							</div>
						</Col>
                </Row>
            </Container>
        </Card>
    </Fragment>
  )
}
