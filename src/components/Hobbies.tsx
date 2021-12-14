import React from 'react';
import Image from 'react-bootstrap/Image';
import hobbies from '../images/hobbies.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Hobbies() {
  return (
    <section id='hobbies'>
      <Container>
        <Row className="justify-content-start">
          <Col className="pb-5 text-left" sm={3} md={2}>
            <h4>
              <span>
                Hobbies
              </span>
            </h4>
          </Col>
          <Col className='bars'>
            <Image src={hobbies} fluid  />
          </Col>
        </Row>
      </Container>

    </section>
  )
}