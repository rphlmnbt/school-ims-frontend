import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../../pseudoDb/acadbase-logo.png'
import Accounts from './Accounts'
import Sidebar from '../sideBarcomponents/Sidebar'
import TopNav from './TopNav'

function NavMenu() {
    const [user, setUser] = useState(undefined);
    const location = useLocation()
    useEffect(() => {   
        if (localStorage.getItem("logged") === 'true') {
            setUser("Active")
            console.log(user)
        } else {
            setUser()
        }
    }, [location]);

    return (
        <div id="navbar">
            {user ? <Sidebar /> : <TopNav />}
        </div>
    )
}

export default NavMenu