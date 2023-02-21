import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Image, Navbar, Nav } from 'react-bootstrap'
import Avatar from '../../../../img/avatar/avatar-1.jpg'
import { ProfileCover } from '../../../component/common/page-headings/ProfileCover.jsx'
import { useAuth } from '../../../context/authContext.js'
import { Context } from '../../../store/appContext.js'


export const DashboardLayout = () => {
  const dashboardData = {
    avatar: Avatar,
    name: 'Alejandro Fantini',
    username: '@afantiniv',
    linkname: 'Crear Nuevo Evento',
    link: '/evento/nuevo'
  }

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
      <div>
        <Container>
          {/** Portada */}
          <ProfileCover dashboardData={artist} />

          {/** Contenido */}
          <Row>
            <Col lg={3} md={4} sm={12}>
            
              <Navbar>
                <Link to='#'>Menu</Link>
                <Navbar.Toggle>
                  <span>Menu</span>
                </Navbar.Toggle>

                <Navbar.Collapse>
                  <Nav>
                    <Nav.Item>
                      Dashboard
                    </Nav.Item>
                    <Nav.Item>
                      Ajustes de cuenta
                    </Nav.Item>
                  </Nav>
                </Navbar.Collapse>

              </Navbar>
            </Col>
          </Row>

        </Container>
      </div>
    </Fragment>
  )
}
