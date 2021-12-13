import React from 'react';
import './App.scss';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Hobbies from './components/Hobbies';
import Resume from './components/Resume';
import Container from 'react-bootstrap/Container';

import {
  library
} from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faHome
} from '@fortawesome/free-solid-svg-icons'

library.add(
  fab,
  faHome
)

const hero = <section className="hero bg-dark">
</section>;

function App() {
  return (
    <div id='home'>
      {hero}
      <Header />
      <div>
        <main>
          <About />
          <Container>
            <Resume />
            <Hobbies />
          </Container>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
