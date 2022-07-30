import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Dev</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to='skills' spy={true} smooth={true} offset={-100} duration={100}><Nav.Link>Skills</Nav.Link></Link>
            <Link to='project' spy={true} smooth={true} offset={-100} duration={100}><Nav.Link>Projects</Nav.Link></Link>
            <Link to='contact' spy={true} smooth={true} offset={-100} duration={100}><Nav.Link>Contacts</Nav.Link></Link>
          </Nav>
          
          <div className='ms-auto d-flex gap-2 p-2'>
              <Nav.Link href="https://www.facebook.com/dedaldino.papelo">
                <FontAwesomeIcon icon={faFacebook} className='font-icon' />
              </Nav.Link>

              <Nav.Link href="https://github.com/Dedaldino-Papelo" className=''>
                <FontAwesomeIcon icon={faGithub} className='font-icon' />
              </Nav.Link>

              <Nav.Link href="https://www.linkedin.com/in/dedaldino-papelo/">
                <FontAwesomeIcon icon={faLinkedin} className='font-icon' />
              </Nav.Link>

              <Nav.Link href="">
                <FontAwesomeIcon icon={faWhatsapp} className='font-icon' />
              </Nav.Link>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
