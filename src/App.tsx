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

function App() {
  return (
    <>

      <Header />
      <main>
        <About />
        <Container>
        <Resume />
        <Hobbies />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
