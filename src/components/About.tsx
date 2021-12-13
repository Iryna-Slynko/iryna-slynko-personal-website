import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import myphoto from "../images/hero10.jpg"
import { Button } from 'react-bootstrap';

export default function About() {
  return (
    <section id='about'>
      <Row>
      <Col className="d-none d-sm-block align-content-center" sm={6} md={4} lg={2}>
      <Image src={myphoto} roundedCircle fluid className='profile-pic' alt='Iryna Slynko'/>
      </Col>
      <Col>
      <h2 className='justify'>
        About Me
      </h2>
      <p>
      Hi! My name is Iryna Slynko. I am a final year Computing student at Technological University Dublin as well as Level 8
      Software Development student at National College of Ireland graduating in spring 2022.
      <br />
      I have strong skills in Python, C#, JavaScript and SQL as well as learning Java, Spring Boot, Node.js, ReactJS, DevOps, GitOps and Cloud Computing.
      <br />
      I possess excellent communication and people skills with a Bachelors degree in Psychology. I am a great team player as well as being an initiative individual contributor.
      <br />
      I would love to take part in projects that would be challenging enough and help me grow my skills.
      </p>
      <Row>
        <Col>
        </Col>
        <Col>
          <Button variant="secondary" href="Iryna-Slynko.pdf" target='_blank'>Download My Resume</Button>
        </Col>
      </Row>
      </Col>
    </Row>
    </section>
  )
}