import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

export const Profile = () => {

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
                <h5 class="h5usuario">Gustos musicales</h5>
                <p>house, tech house </p>
              </div>
              <div>
              <h5 class="h5usuario">Cantantes favoritos</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                vehicula odio a mauris tincidunt, at hendrerit tellus consequat.
              </p>
              </div>
              
              <div>
                <h5 class="h5usuario">Rating</h5>
              <h5 class="h5usuario">10.0/10.0</h5>
              </div>
              <div>
              <button className='btn btn-primary' href="" >Crear nuevo evento</button>
              </div>
              
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};