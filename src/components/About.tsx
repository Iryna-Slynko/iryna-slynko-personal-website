import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import myphoto from "../images/hero10.jpg"
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons'

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
      Hi! My name is Iryna Slynko. I am a Final Year Computing student at Technological University Dublin. 
         <br />
        In March 2022 I am also graduating from National College of Ireland with Level 8 Higher Diploma in Science in Software Development. 
      <br />
      I have strong skills in Python, C#, JavaScript and SQL as well as learning Java, Spring Boot, Node.js, ReactJS, DevOps, GitOps and Cloud Computing.
      <br />
      I possess excellent communication and people skills with a Bachelors degree in Psychology. I am a great team player as well as an initiative individual contributor.
      <br />
      I would love to take part in projects that would be challenging enough and help me grow my skills.
      </p>
      <Row>
        <Col className="d-flex">
          <Button variant="secondary" href="Iryna-Slynko.pdf" target='_blank'><span><FontAwesomeIcon className="pe-1" icon={faDownload} />Download Resume</span></Button>
        </Col>
      </Row>
      </Col>
    </Row>
    </section>
  )
}
