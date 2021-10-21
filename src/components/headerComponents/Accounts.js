import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { FaUserCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { LinkContainer } from 'react-router-bootstrap'
import '../../styles/components/Header.css'


function Accounts() {
    return (
        <span className="px-4">
            <LinkContainer to="/acadbase/login">
                <Button className="custom-btn">
                    <IconContext.Provider value={{size:"30px", style: {marginLeft: "10px", marginRight: "10px"}}}>
                        <FaUserCircle />
                    </IconContext.Provider>
                    Log Out
                </Button>
            </LinkContainer>
        </span>

    )
}

export default Accounts