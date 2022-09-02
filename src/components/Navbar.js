import React from 'react';
import Container from 'react-bootstrap/Container'
import  { Nav, Navbar } from 'react-bootstrap'
import '../App.css'

function Header() {
  return (
    <>
      <Navbar expand="lg" className='navcolor border-bottom border-light border-2' sticky="top">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light ms-auto'/>

          <Navbar.Collapse id="basic-navbar-nav">
           <Nav className='m-auto font-link'>
              <Nav.Link href="#home" className='text-light m-auto'>Home</Nav.Link>
              <Nav.Link href="#link" className='text-light m-auto'>About</Nav.Link>
              <Nav.Link href="#contact" className='text-light m-auto'>Facilities</Nav.Link>
              <Nav.Link href="#contact" className='text-light m-auto'>Reviews</Nav.Link>
              <Nav.Link href="#contact" className='text-light m-auto'>Location</Nav.Link>
            </Nav> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;