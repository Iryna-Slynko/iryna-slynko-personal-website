import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Skills() {
  return (
    <section id='skills'>
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={3} md={2}>
            <h4>
              <span>
                Projects
              </span>
            </h4>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>

    </section>
  )
}