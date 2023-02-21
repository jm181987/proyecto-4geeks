import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';




const HeroTyped = () => {
	return (
		<div
			className="imagen_head py-lg-18 py-10 bg-auto"
			style={{
				background: `url(https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg), linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%), rgba(221, 218, 255, 0.3)`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'top center'
			}}
		>
			<Container>
				<Row className="justify-content-center">
					<Col xl={7} lg={7} md={12}>
						<div className="py-8 py-lg-0 text-center">
							<h1 className="display-2 fw-bold mb-5  text-primary">
								<span className="text-white px-3 mt-5 px-md-0">Mejores</span>
								<span className="text-white ms-2">
									<Typed
										strings={['Eventos', 'Artistas', 'Precios', 'Fiestas', 'Momentos']}
										typeSpeed={60}
										backSpeed={50}
										loop
									/>
								</span>
							</h1>
							<p className="seg_titulo mb-5 h2 text-light ">
								Artistas talentosos y profesionales, aseguramos un espectáculo!
							</p>
							<Link
								to="/artistas"
								className="boton_header btn btn-primary me-2 mb-5"
							>
								Ver Artistas
							</Link>
							<Link
								to="/signup"
								className="boton_header btn btn-primary me-2 mb-5"
							>
								Regístrate
							</Link>

							<div className="mt-8 mb-5">
								<ListGroup as="ul" bsPrefix="list-inline">
									<ListGroup.Item
										as="li"
										bsPrefix="list-inline-item  fw-semi-bold lh-1 fs-4 me-3 mb-2 mb-md-0"
									>
										
										<span className="terc_titulo align-middle">+50 Artistas para tus eventos</span>
									</ListGroup.Item>
									<ListGroup.Item
										as="li"
										bsPrefix="list-inline-item  fw-semi-bold lh-1 fs-4 me-3 mb-5 mb-md-0"
									>
										
										</ListGroup.Item>
									<ListGroup.Item
										as="li"
										bsPrefix="list-inline-item  fw-semi-bold lh-1 fs-4 mb-5"
									>
									
										<span className="terc_titulo align-middle mb-5">Piensalo, Agendalo, Vivelo...</span>
									</ListGroup.Item>
								</ListGroup>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default HeroTyped;