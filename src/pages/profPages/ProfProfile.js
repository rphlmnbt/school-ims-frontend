import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { FaUserCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

function ProfProfile() {
    return (
        <Row className="user-info-box mx-auto pt-5">
            <Col lg={12} sm={12} className="shadow" >
                <Row>
                    <Col className="box-title p-2">
                        <div >
                            <h4>Professor Information</h4>
                        </div>
                    </Col>
                </Row>
                <Row className="box-info p-2 d-flex align-items-center">
                    <Col lg={2} sm={12}>
                        <IconContext.Provider value={{size:"80px", color:"#710E1D"}}>
                            <FaUserCircle />
                        </IconContext.Provider>
                    </Col>
                    
                    <Col lg={5} sm={12}>
                            <p className="lname">Mendoza,</p>
                            <p className="fname">AILGER CARIÑO</p>
                    </Col>
                    <span className="border-left"></span>
                    <Col lg={2} sm={12}>
                        <div>
                            <p className="profile-info m-0 p-0">Employee Number : </p>
                            <p className="profile-info  m-0 p-0">Gender: </p>
                            <p className="profile-info  m-0 p-0">Nationality: </p>
                            <p className="profile-info ">Religion: </p> 
                        </div>
                    </Col>
                    <Col lg={2} sm={12}>
                        <div>
                            <p className="profile-info m-0 p-0">12345674</p>
                            <p className="profile-info  m-0 p-0">Male</p>
                            <p className="profile-info  m-0 p-0">Filipino</p>
                            <p className="profile-info ">Yen's Org</p>   
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default ProfProfile