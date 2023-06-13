import React from 'react'
import { Link } from "react-router-dom"
import { Navbar} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"

function Navigation() {
    return(
        <div className="NavBarContainer">
            {/* <Navbar> */}
                <div className="courtney">
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
                </div>
            {/* </Navbar> */}
        </div>
    )
}

export default Navigation;