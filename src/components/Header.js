import React from 'react'
import NavMenu from './headerComponents/NavMenu.js'
import '../styles/components/Header.css'


function Header() {
    return (
        <header className="sticky-top">
            <NavMenu />
        </header>
    )
}

export default Header