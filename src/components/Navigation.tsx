import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
  return (
    <Navbar id='navigation' expand="sm" bg="dark" variant='dark' className='justify-content-end'>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  className='justify-content-end'/>
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#hobbies">Hobbies</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}