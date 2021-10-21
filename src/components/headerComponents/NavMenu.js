import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../../pseudoDb/acadbase-logo.png'
import Accounts from './Accounts'
import Sidebar from '../sideBarcomponents/Sidebar'
import TopNav from './TopNav'

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
            <TopNav />
        )
    }
}

export default NavMenu