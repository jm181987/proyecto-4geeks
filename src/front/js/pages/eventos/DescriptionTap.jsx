import React from 'react'
import { Fragment } from 'react'
import { Col, Row, ListGroup } from 'react-bootstrap'

export const DescriptionTab = () => {
	return (
		<Fragment>
			<div className="mb-4">
				<h3 className="mb-2">Descripcion del Evento</h3>
				<p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
			<h4 className="mb-3">Experiencia</h4>
			<Row className="mb-3">
				<Col lg={6} md={6} sm={12}>
					<ListGroup bsPrefix="list-unstyled" variant="flush">
						<ListGroup.Item bsPrefix=" " className="d-flex mb-2">
							<i className="far fa-check-circle text-success me-2 mt-2"></i>
							<span>
								Recognize the importance of understanding your objectives when
								addressing an audience.
							</span>
						</ListGroup.Item>
						<ListGroup.Item bsPrefix=" " className="d-flex mb-2">
							<i className="far fa-check-circle text-success me-2 mt-2"></i>
							<span>
								Identify the fundaments of composing a successful close.
							</span>
						</ListGroup.Item>
						<ListGroup.Item bsPrefix=" " className="d-flex mb-2">
							<i className="far fa-check-circle text-success me-2 mt-2"></i>
							<span>
								Explore how to connect with your audience through crafting
								compelling stories.
							</span>
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col lg={6} md={6} sm={12}>
					<ListGroup bsPrefix="list-unstyled" variant="flush">
						<ListGroup.Item bsPrefix=" " className="d-flex mb-2">
							<i className="far fa-check-circle text-success me-2 mt-1"></i>{' '}
							<span>
								Examine ways to connect with your audience by personalizing your
								content.
							</span>
						</ListGroup.Item>
						<ListGroup.Item bsPrefix=" " className="d-flex mb-2">
							<i className="far fa-check-circle text-success me-2 mt-1"></i>
							<span>Break down the best ways to exude executive presence.</span>
						</ListGroup.Item>
						<ListGroup.Item bsPrefix=" " className="d-flex mb-2">
							<i className="far fa-check-circle text-success me-2 mt-1"></i>
							<span>
								Explore how to communicate the unknown in an impromptu
								communication.
							</span>
						</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
			<p>
				Maecenas viverra condimentum nulla molestie condimentum. Nunc ex libero,
				feugiat quis lectus vel, ornare euismod ligula. Aenean sit amet arcu
				nulla.
			</p>
			<p>
				Duis facilisis ex a urna blandit ultricies. Nullam sagittis ligula non
				eros semper, nec mattis odio ullamcorper. Phasellus feugiat sit amet leo
				eget consectetur.
			</p>
		</Fragment>
	);
}