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

export const ProfileCoverDashboard = ({ dashboardData }) => {
  return (
    <Row className="align-items-center">
			<Col xl={12} lg={12} md={12} sm={12}>
				{/* <!-- Bg --> */}
				<div
					className="py-10 bg-primary rounded-top-md"
				>
				</div>
				<div className="d-flex align-items-end justify-content-between bg-white px-4 pt-2 pb-4 rounded-none rounded-bottom-md shadow-sm">
					<div className="d-flex align-items-center">
						<div className="me-2 position-relative d-flex justify-content-end align-items-end mt-n5">
							<Image
								src={dashboardData.image}
								className="avatar-xl rounded-circle border border-4 border-white position-relative"
								alt=""
							/>
						</div>
						<div className="lh-1">
							<h2 className="mb-0 text-dark">
								{dashboardData.name}
							</h2>
							<p className="mb-0 d-block">{dashboardData.id}</p>
						</div>
					</div>
					<div>
						<Link
							to='/eventos/nuevo'
							className={`btn btn${
								dashboardData.outlinebutton ? '-outline' : ''
							}-primary btn-sm d-none d-md-block`}
						>
							Crear Evento
						</Link>
					</div>
				</div>
			</Col>
		</Row>
  )
}
