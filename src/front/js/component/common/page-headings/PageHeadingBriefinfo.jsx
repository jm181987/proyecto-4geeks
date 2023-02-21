// import node module libraries
import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/authContext.js';

const PageHeadingBriefinfo = ({ pagetitle, briefinfo, tolink, buttontext }) => {
	const { usuariodb } = useAuth()

	return (
		<div className="bg-primary">
			<Container>
				<Row className="align-items-center">
					<Col xl={12} lg={12} md={12} sm={12}>
						<div className="py-4 py-lg-6">
							<h1 className="mb-1 text-white display-4">{pagetitle}</h1>
							<p className="text-white mb-0 lead">{briefinfo}</p>
							{usuariodb && usuariodb.role === "Artista" && (
								<Link to={tolink} className="artist-role btn btn-success mb-2">{buttontext}</Link>
							)}
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default PageHeadingBriefinfo;