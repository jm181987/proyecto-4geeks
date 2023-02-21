import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Image, Navbar, Nav } from 'react-bootstrap'
import { ProfileCover } from '../../../component/common/page-headings/ProfileCover.jsx'
import { useAuth } from '../../../context/authContext.js'
import { Context } from '../../../store/appContext.js'
import { AccountSettingsMenu, DashboardMenu } from './DashboardMenu.js'


export const DashboardLayout = (props) => {
  const { user } = useAuth()
  const { store, actions } = useContext(Context)
  const [artist, setArtist] = useState({})

  useEffect(() => {
    const artistStore = store.artists.filter(art => art.id == user.uid)
    if (artistStore.length > 0) {
      setArtist(artistStore[0])
    }
  }, [store.artists, user.uid])

  return (
    <Fragment>
      <div className='pt-5 pb-5'>
        <Container>
          {/** Portada */}
          <ProfileCover dashboardData={artist} />

          {/** Contenido */}
          <Row className='mt-0 mt-md-4'>
            <Col lg={3} md={4} sm={12}>
            
              <Navbar
                expand='lg'
                className='navbar navbar-expand-md navbar-light shadow-sm mb-4 mb-lg-0 sidenav'>
                <Link to='#'
                className='d-xl-none d-lg-none d-md-none text-inherit fw-bold fs-5 float-start py-1'
                >Menu</Link>
                <Navbar.Toggle
                  aria-controls='basic-navbar-nav'
                  className='p-0 focus-none border-0'
                  label='Menu responsivo'>
                  <span
                    className="navbar-toggler d-md-none icon-shape icon-sm rounded bg-primary p-0 text-white float-end"
										data-bs-toggle="collapse"
										data-bs-target="#sidenav"
										aria-controls="sidenav"
										aria-expanded="false"
										aria-label="Toggle navigation"
                  >...</span>
                </Navbar.Toggle>

                <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='me-auto flex-column' as='ul'>
                    <Nav.Item as='li' className='navbar-header'>
                      Dashboard
                    </Nav.Item>
                    {DashboardMenu.map((item, index) => (
                      <Nav.Item
                        as='li'
                        key={index}
                        className={`$
													item.link === location.pathname ? 'active' : ''
												`}>
                        <Link className='nav-link' to={item.link}>{item.title}</Link>
                      </Nav.Item>
                    ))}
                    <Nav.Item as='li' className='navbar-header'>
                      Ajustes de cuenta
                    </Nav.Item>
                    {AccountSettingsMenu.map((item, index) => (
                      <Nav.Item
                        as='li'
                        key={index}
                        className={`$
													item.link === location.pathname ? 'active' : ''
												`}>
                        <Link className='nav-link' to={item.link}>{item.title}</Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </Navbar.Collapse>

              </Navbar>
            </Col>
            <Col>
              {props.children}
            </Col>
          </Row>

        </Container>
      </div>
    </Fragment>
  )
}
