import React from 'react'
import { Link } from "react-router-dom"
import { Navbar} from 'react-bootstrap';

function Navigation() {
    return(
        <div className="NavBarContainer">
            <Navbar>
                <Link to="/">
                    Courtney Cash
                </Link>
                <Link to="/about">
                    <h3>About</h3>
                </Link>
                <Link to="/workinprogress">
                    <h3>Work in Progress</h3>
                </Link>
                <Link to="/projects">
                    <h3>Projects</h3>
                </Link>
            </Navbar>
        </div>
    )
}

export default Navigation;