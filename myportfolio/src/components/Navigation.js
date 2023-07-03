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
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
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