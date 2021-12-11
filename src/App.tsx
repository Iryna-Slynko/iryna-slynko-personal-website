import React from 'react';
import './App.scss';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Resume />
        <Portfolio />
        </main>
        <Footer />
    </div>
  );
}

export default App;
