import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

export const Profile = () => {



  return (
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <Image src="https://via.placeholder.com/300x300" roundedCircle />
        </Col>
        <Col xs={12} md={8}>
          <Card>
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Subtitle>Software Engineer</Card.Subtitle>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In quis ipsum euismod, placerat augue id, bibendum velit.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
