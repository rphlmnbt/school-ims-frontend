import React from "react";
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";
import { FaUserCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { LinkContainer } from 'react-router-bootstrap'
import '../styles/pages/ViewProfile.css'

function ViewUserProfile() {
    return (
        <Container className="extend-height py-5 ">
            <Row className="align-items-center justify-content-center">
                <Col  md={8} sm={12} className="text-center mt-5 shadow p-3 mb-5 bg-white">
                    <div className="pb-3 mx-auto" >
                        <p className="form-title">User Profile</p><br />
                        <IconContext.Provider value={{size:"80px", color:"#710E1D"}}>
                            <FaUserCircle />
                        </IconContext.Provider>
                    </div>
                    <Row className="g-2">
                        <Col md={6} className="text-left px-4">
                            <span className="profile-text">Email: </span>
                            <span>rphlmnbt@gmail.com</span>
                        </Col>
                        <Col md={6} className="text-left px-4">
                            <span className="profile-text">Password:  </span>
                            <span>••••••</span>
                        </Col>
                    </Row>
                    <hr/>
                    <Row className="g-2">
                        <Col md={6} className="text-left px-4">
                            <span className="profile-text">First Name:  </span>
                            <span>Raphael</span>
                        </Col>
                        <Col md={6} className="text-left px-4">
                            <span className="profile-text">Last Name:  </span>
                            <span>Manabat</span>
                        </Col>
                    </Row>
                    <Row className="g-2">
                        <Col md={6} className="text-left px-4">
                            <span className="profile-text">Birth Date:  </span>
                            <span>October 27, 1999</span>
                        </Col>
                        <Col md={6} className="text-left px-4">
                            <span className="profile-text">Age:  </span>
                            <span>21</span>
                        </Col>
                    </Row>
                    <Row className="g-2">
                        <Col md={6} className="text-left px-4">
                            <span className="profile-text">Gender:  </span>
                            <span>Male</span>
                        </Col>
                        <Col md={6} className="text-left px-4">
                            <span className="profile-text">Civil Status:  </span>
                            <span>Single</span>
                        </Col>
                    </Row>
                    <hr/>
                    <Row className="g-2">
                        <Col md={6} className="text-left px-4">
                            <span className="profile-text">Contact Number:  </span>
                            <span>09123456789</span>
                        </Col>
                        <Col md={6} className="text-left px-4">
                            <span className="profile-text">Home Address:  </span>
                            <span>City Of San Fernando, Pampanga</span>
                        </Col>
                    </Row>
                    <hr/>
                    <Row className="g-2">
                        <Col md={12} className="text-left px-4">
                            <span className="profile-text">Course:  </span>
                            <span>Bachelor Of Science in Computer Engineering</span>
                        </Col>
                    </Row>
                    <Row className="g-2">
                        <Col md={6} className="text-left px-4">
                            <span className="profile-text">Year Level:  </span>
                            <span>4th Year</span>
                        </Col>
                        <Col md={6} className="text-left px-4">
                            <span className="profile-text">Section:  </span>
                            <span>CpE - 401</span>
                        </Col>
                    </Row>
                    <hr/>
                    <Row className="g-2">
                        <Col md={12} className="text-left px-4">
                            <span className="profile-text">Office:  </span>
                            <span>Finance Office</span>
                        </Col>
                    </Row>  
                    <hr/>
                    <Row className="g-2">
                        <Col md={12} className="text-left px-4">
                            <span className="profile-text">Department:  </span>
                            <span>School of Engineering and Architecture</span>
                        </Col>
                    </Row>           
                    <br />
                    <LinkContainer to="/acadbase/StudentDashboard/EditUserProfile">
                        <Button 
                            variant="primary btn-block"  
                            className="submit-btn"
                        >
                            Edit User Details
                        </Button>
                    </LinkContainer>
                    <LinkContainer to="/acadbase/StudentDashboard">
                        <Button 
                            variant="primary btn-block"  
                            className="submit-btn"
                        >
                            Back to Dashboard
                        </Button>
                    </LinkContainer>
                </Col>
            </Row>
        </Container>
    )
}

export default ViewUserProfile