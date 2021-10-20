import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../../pseudoDb/acadbase-logo.png'
import Accounts from './Accounts'
import Sidebar from '../sideBarcomponents/Sidebar'

function NavMenu() {
    
    if(sessionStorage.getItem("logged") === 'true'){
        return(
            <>
                <Sidebar />
            </>
        )
    }
    else{
        return (
            <div>
                <Navbar className="navbar py-0" sticky="top" variant="light" expand="lg">
                        <Navbar.Brand>
                            <img 
                                src={logo} 
                                alt="acadbase-logo"
                                style={{padding : "5px"}}
                                height={"80px"}
                            />
                            <span className="brand-label">
                                ACADBASE
                            </span>
                        </Navbar.Brand>
                    <Nav  className="mr-auto">
                    </Nav>
                    <Accounts />
                </Navbar>
                <div className="color-bar"></div>
            </div>
        )
    }
}

export default NavMenu