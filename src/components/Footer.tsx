import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Col, Container, Row } from 'react-bootstrap';

interface INetwork {
  name: string,
  url: string,
  className: IconProp
}

export default function Footer() {
  const networkData:INetwork[] = [{
    name: "twitter",
    url: "http://twitter.com/IRYNAS14/",
    className: ["fab", "twitter"]
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/iryna-slynko/",
    className: ["fab", "linkedin"]
  },
  {
    name: "home",
    url: "https://iryna-slynko.com/",
    className: "home"
  },
  {
    name: "github",
    url: "https://github.com/Iryna-Slynko/",
    className: ["fab", "github"]
  },
  {
    name: "medium",
    url: "https://medium.com/@iryna.slynko/",
    className: ["fab", "medium"]
  }];
  const networks = networkData.map(function (network) {
    return <li key={network.name}>
      <a title={network.name} href={network.url} target="_blank" rel="noreferrer">
        <FontAwesomeIcon  icon={network.className} />
      </a>
    </li>;
  })
  return (
    <footer>
      <Container>
        <Row  className="justify-content-md-center">
          <Col xs={3}></Col>
          <Col>
      <ul>
        {networks}
      </ul>
      </Col>
      <Col xs={3}></Col>

      </Row>
<Row  className="justify-content-md-center">
      Made with ❤️. Fuelled by coffee ☕ and 🏋️
      </Row>
      <Row  className="justify-content-md-center">
      © Copyright 2021 Iryna Slynko
      </Row>
      
      </Container>
    </footer>
  )
}
