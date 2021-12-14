import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { IProject } from '../types/Project';
import { Technology } from '../types/Technology';

interface IProps {
  readonly projects: IProject[],
  selectedSkill: Technology | null
}

export default class Projects extends React.Component<IProps> {
  render(): React.ReactNode {
    const projectItems = this.props.projects.map((project, index) => {
      return <Carousel.Item key={project.title}>
        <Image fluid
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
         <Col  className="pb-5 text-left" sm={3} md={2}>
          <h4>
            <span>
              Projects
            </span>
          </h4>
        </Col>
            <Col>
        <Carousel variant='dark'>
          {projectItems}
        </Carousel>
        </Col>
        </Row>
        </Container>
      </section>
    ) 
  }
}
