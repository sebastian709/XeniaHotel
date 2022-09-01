import Container from 'react-bootstrap/Container'
import  { Nav, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <>
      <Navbar expand="lg" className='navcolor'>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light ms-auto'/>

          <Navbar.Collapse id="basic-navbar-nav">
           <Nav className='m-auto font-link'>
              <Nav.Link href="#home" className='text-light m-auto'>Home</Nav.Link>
              <Nav.Link href="#link" className='text-light m-auto'>About</Nav.Link>
              <Nav.Link href="#contact" className='text-light m-auto'>Contact</Nav.Link>
            </Nav> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;