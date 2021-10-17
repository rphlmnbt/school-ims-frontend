import React from 'react'
import { Container, Row } from 'react-bootstrap'
import '../styles/components/Footer.css'
import SocialIcons from './footerComponents/SocialIcons'
import NeedAssistance from './footerComponents/NeedAssistance'
import Copyright from './footerComponents/Copyright'



function Footer() {
    return (
        
        <Container className="footer" >
            <Row>
                <SocialIcons />
                <NeedAssistance />
                <Copyright />
            </Row>
        </Container>
    )
}

export default Footer