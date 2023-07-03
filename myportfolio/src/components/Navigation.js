import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
    return(
    <div className="NavBarContainer">
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to="/"href="home" className="NavBarTitle">Courtney Cash</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navBarLinks">
            <Nav.Link to="/about" href="about">About</Nav.Link>
            <Nav.Link to="/projects" href="projects">Projects</Nav.Link>
            <Nav.Link to="/contactme" href="contactme">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            {/* <Navbar> */}
                {/* <div className="courtney">
                    <Link to="/" className="NavBarTitle">
                        Courtney Cash
                    </Link>
                </div>
                <div className="navBarLinks">
                    <Link to="/about" >
                        <h3>About</h3>
                    </Link>
                    <Link to="/projects">
                        <h3>Projects</h3>
                    </Link>
                    <Link to="contactme">
                        <h3>Contact Me</h3>
                    </Link>
                </div> */}
            {/* </Navbar> */}

            
        </div>
    )
}

export default Navigation;