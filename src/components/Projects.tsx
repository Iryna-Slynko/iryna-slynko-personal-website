import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { IProject } from '../types/Project';

interface IProps {
  readonly projects: IProject[],
}

export default function Projects({ projects }: IProps) {
  const projectItems = projects.map((project) => {
    return <Carousel.Item key={project.title}>
      <Image fluid
        src={"images/portfolio/" + project.image}
        alt={project.title}
      />
      <Carousel.Caption>
        <a href={project.url} target="_blank" rel="noreferrer"><h3>{project.title}</h3></a>
      </Carousel.Caption>
    </Carousel.Item>
  });

  return (
    <section id='projects'>
      <Container>
        <Row>
          <Col className="pb-5 text-left" sm={3} md={2}>
            <h4>
              <span>
                Projects
              </span>
            </h4>
          </Col>
          <Col sm={5}>
            <Carousel variant='dark'>
              {projectItems}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
