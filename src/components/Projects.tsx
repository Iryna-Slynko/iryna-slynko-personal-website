import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProjectsData from '../data/Projects';

export default function Projects() {
  const projects = ProjectsData().map((project, index) => {
    return <Carousel.Item key={project.title}>
      <img
        className="d-block"
        src={"images/portfolio/" + project.image}
        alt={project.title}
      />
      <Carousel.Caption>
        <a href={project.url} target="_blank" rel="noreferrer"><h3>{project.title}</h3></a>
        <p>{project.description}</p>
        <p>Technologies used: {project.technologies.join(', ')}</p>
      </Carousel.Caption>
    </Carousel.Item>
  });
  return (
    <section id='projects'>
   
      <Container>
         <Row  className="justify-content-md-center">
       <Col sm={3} md={2}>
        <h4>
          <span>
            Projects
          </span>
        </h4>
      </Col>
          <Col>
      <Carousel variant='dark'>
        {projects}
      </Carousel>
      </Col>
      </Row>
      </Container>
    </section>
  )
}