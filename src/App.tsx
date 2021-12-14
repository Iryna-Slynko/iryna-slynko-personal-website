import React from 'react';
import './App.scss';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Hobbies from './components/Hobbies';
import Resume from './components/Resume';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  library
} from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faHome
} from '@fortawesome/free-solid-svg-icons'
import MyInfo from './data/MyInfo';

library.add(
  fab,
  faHome
)

const hero = <section className="hero bg-dark">
  <Container className="center-text vh-100 pb-5">
    <Row className="align-items-end pb-5">
      <Col>
        <h1>Iryna Slynko</h1>
        <h3>Final year Computer Science student.</h3>
      </Col>
    </Row>
  </Container>
</section>;

function App() {
  return (
    <div id='home'>
      <Header />
      {hero}
      <div>
        <main>
          <About />
          <Container>
            <Resume info={MyInfo()} />
            <Hobbies />
          </Container>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
