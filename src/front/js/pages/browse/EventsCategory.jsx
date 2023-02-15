// import node module libraries
import React, { useContext } from 'react';
import { Fragment } from 'react';
import { Col, Row, Nav, Tab, Container } from 'react-bootstrap';
import { Context } from '../../store/appContext.js';
import { Link } from 'react-router-dom';

// import custom components
import PageHeadingBriefinfo from '../../component/common/page-headings/PageHeadingBriefinfo.jsx';

// import sub components
import PopularArtistCard from './PopularArtistCard.jsx';
import ArtistCard from '../../component/artists/ArtistCard.jsx';

// import data files
import AllArtistsData from '../../../data/slider/AllArtistData.jsx';
import ArtistData from '../../../data/users/ArtistData.jsx';

const EventsCategory = () => {
	const { store, actions } = useContext(Context)
	



	return (
		<Fragment>
			{/* Page header */}
			<PageHeadingBriefinfo
				pagetitle="Eventos"
				briefinfo="Todo tipo de música para tus eventos"
				tolink='/eventos/nuevo'
				buttontext='Publicar Evento Nuevo'
			/>
			
			<div className="py-6">
				<Container>
					<Row className="mb-6">
						<Col md={12}>
							<Tab.Container defaultActiveKey="mostpopular">
								<Nav className="nav-lb-tab">
									<Nav.Item className="ms-0">
										<Nav.Link
											eventKey="mostpopular"
											className="mb-sm-3 mb-md-0"
										>
											Más Populares
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="trending" className="mb-sm-3 mb-md-0">
											En Tendencia
										</Nav.Link>
									</Nav.Item>
								</Nav>

								<Tab.Content>
									<Tab.Pane
										eventKey="mostpopular"
										className="pb-4 p-4 ps-0 pe-0"
									>
										{/* most popular started */}
										<Row>
											{AllArtistsData.filter(function (datasource) {
												return datasource.category === 'techno';
											})
												.slice(0, 4)
												.map((item, index) => (
													<Col lg={3} md={6} sm={12} key={index}>
														<ArtistCard item={item} />
													</Col>
												))}
										</Row>
										{/* end of most popular */}
									</Tab.Pane>
									<Tab.Pane eventKey="trending" className="pb-4 p-4 ps-0 pe-0">
										{/* trending events started */}
										<Row>
											{AllArtistsData.filter(function (datasource) {
												return (
													datasource.id === 1 ||
													datasource.id === 2 ||
													datasource.id === 3 ||
													datasource.id === 4
												);
											}).map((item, index) => (
												<Col lg={3} md={6} sm={12} key={index}>
													<ArtistCard item={item} />
												</Col>
											))}
										</Row>
										{/* end of trending events */}
									</Tab.Pane>
								</Tab.Content>
							</Tab.Container>
						</Col>
					</Row>

					{/* Popular Artists start */}
					<Row>
						<Col lg={12} md={12} sm={12}>
							<div className="mb-5">
								<h2 className="mb-1">Artistas Populares</h2>
								<p className="mb-0">
									Artistas populares para tus eventos.
								</p>
							</div>
						</Col>
					</Row>
					<Row className="mb-6">
						{/*{ArtistData.filter(function (datasource) {
							return datasource.hoursbook > 26000;
						}).map((item, index) => */}
						{store.artists.map((item, index) => (
							<Col lg={3} md={6} sm={12} key={index}>
								<PopularArtistCard item={item} />
							</Col>
						))}
					</Row>
					{/* end of Popular Artists */}

					{/*  start */}
					<Row>
						<Col lg={12} md={12} sm={12}>
							<div className="mb-5">
								<h2 className="mb-1">Primera hora gratis</h2>
								<p className="mb-0">LA fiesta apenas empieza!</p>
							</div>
						</Col>
					</Row>
					<Row className="mb-6">
						{AllArtistsData.filter(function (datasource) {
							return datasource.category === 'javascript';
						})
							.slice(0, 4)
							.map((item, index) => (
								<Col lg={3} md={6} sm={12} key={index}>
									<ArtistCard item={item} free />
								</Col>
							))}
					</Row>
					{/* end */}

					{/* all  events start */}
					<Row>
						<Col lg={12} md={12} sm={12}>
							<div className="mb-5">
								<h2 className="mb-1">Los mejores DJs de música eléctrocina</h2>
								<p className="mb-0">
									Aquí encontraras los que más te gustan.
								</p>
							</div>
						</Col>
					</Row>
					<Row className="mb-6">
						{store.events.map((item, index) => (
							<Col lg={3} md={6} sm={12} key={index}>
								<ArtistCard item={item} free />
							</Col>
						))}
					</Row>
					{/* end of all events */}
				</Container>
			</div>
		</Fragment>
	);
};

export default EventsCategory;
