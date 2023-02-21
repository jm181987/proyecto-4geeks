import React, { useState } from "react";
import { Container, Row, Col, Image, Card, icons } from "react-bootstrap";

export const Usuarioperfil = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col lg={3} className="text-center">
          <Image
            src="https://via.placeholder.com/150"
            roundedCircle
            className="mb-3"
          />
          <h3>Nombre y apellido</h3>
          
        </Col>
        <Col lg={9}>
          <Card className="shadow-sm">
            <Card.Body>
              <div>
                <h5>Gustos musicales</h5>
                <p>house, tech house </p>
              </div>
              <div>
              <h5>Cantantes favoritos</h5>
              <p>
              Mónica Naranjo. Álbum favorito: Tarántula. ...
Beyoncé Álbum favorito: BEYONCÉ, Shakira Álbum favorito: SHAKIRA. 
Lady Gaga. Álbum favorito: Born This Way. Kylie Minogue. Álbum favorito: Aphrodite. Rihanna. Britney Spears. Christina Aguilera.
              </p>
              </div>
              
              <div>
                <h5>Rating</h5>
              <h5>10.0/10.0</h5>
              </div>
              <div>
              <button class="shadow__btn1 mb-5" href="/artistanuevo" >Crear perfil de artista</button>
              </div>
              <div className="row">
                <div className="col-1">
                  <a href="" className="me-4 link-secondary">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                <div className="col-1">
                  <a href="" className="me-4 link-secondary">
                    <i className="fab fa-facebook"></i>
                  </a>
                </div>
                <div className="col-1">
                  <a href="" className="me-4 link-secondary">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
                <div className="col-1">
                  <a href="" className="me-4 link-secondary">
                    <i className="fab fa-soundcloud"></i>
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Usuarioperfil;
