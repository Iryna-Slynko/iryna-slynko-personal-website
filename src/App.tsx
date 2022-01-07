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
  faHome, faDownload
} from '@fortawesome/free-solid-svg-icons'
import MyInfo from './data/MyInfo';
import Hero from './components/Hero';

library.add(
  fab,
  faHome,
  faDownload
)

function App() {
  return (
    <div id='home'>
      <Header />
      <Hero />
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
