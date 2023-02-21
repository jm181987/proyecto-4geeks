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

const ArtistsGrid = () => {
	const { store, actions } = useContext(Context)
	



	return (
		<Fragment>
			{/* Page header */}
			<PageHeadingBriefinfo
				pagetitle="Artistas"
				briefinfo="Todo tipo de talento"
				tolink='/editprofile'
				buttontext='Editar mi perfil'
			/>
			
			<div className="py-6">
				<Container>

					{/* Popular Artists start
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
                */}
					<Row className="mb-6">
						{/*{ArtistData.filter(function (datasource) {
							return datasource.hoursbook > 26000;
						}).map((item, index) => *
						{store.artists.map((item, index) => */}
						{store.artists.filter(function (datasource) {
							return datasource.status != 'nuevo';
						}).map((item, index) =>(
							<Col lg={3} md={6} sm={12} key={index}>
								<PopularArtistCard item={item} />
							</Col>
						))}
					</Row>
					
					
				</Container>
			</div>
		</Fragment>
	);
};

export default ArtistsGrid;
