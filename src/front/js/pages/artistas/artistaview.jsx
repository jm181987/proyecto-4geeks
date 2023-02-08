import React, { useState } from "react";
import { Container, Row, Col, Image, Card, icons } from "react-bootstrap";

export const Artistaview = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col lg={3} className="text-center">
          <Image
            src="https://via.placeholder.com/150"
            roundedCircle
            className="mb-3"
          />
          <h3>Nombre artistico</h3>
          <p>tipo de artista</p>
        </Col>
        <Col lg={9}>
          <Card className="shadow-sm">
            <Card.Body>
              <div>
                <h5 class="h5usuario">Genero</h5>
                <p>House</p>
              </div>
              <div>
              <h5 class="h5usuario">Descripcion </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                vehicula odio a mauris tincidunt, at hendrerit tellus consequat.
              </p>
              </div>
              <div>
                <h5 class="h5usuario">Repertorio</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                vehicula odio a mauris tincidunt, at hendrerit tellus consequat.</p>
              </div>
              <div>
                <h5 class="h5usuario">Rating</h5>
              <h5 class="h5usuario">10.0/10.0</h5>
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
export default Artistaview;