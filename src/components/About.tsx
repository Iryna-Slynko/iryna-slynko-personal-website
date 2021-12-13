import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import myphoto from "../images/hero10.jpg"

export default function About() {
  return (
    <section id='about'>
      <Container>
      <Row>
<Col xs={6} md={4} lg={2}>
      <Image src={myphoto} roundedCircle fluid className='profile-pic' alt='Iryna Slynko'/>
      </Col>
      <Col>
      <h2 className='justify'>
        About Me
      </h2>
      <p>
      My name is Iryna Slynko. I am a final year computing student at Technological University Dublin, on track for 2:1 BSc&nbsp;Hons degree,
      and a Software Development student at National College of Ireland, studying towards Higher Diploma in Science in Software Development (Java).
      <br />
      I have strong skills in Python, C# and SQL as well as learning Java, JavaScript, Node.js and Flask in current studies and upskilling to become a Full-Stack Software Engineer.
      <br />
      I possess excellent communication, people and empathy skills with a Bachelors degree in Psychology. I am a great team player as well as initiative individual contributor.
      <br />
      I love elevating others and take pride in my high work ethics.
      </p>
      </Col>
    </Row>
    </Container>
    </section>
  )
}