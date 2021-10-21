import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../styles/pages/DashboardHome.css'
import StudentProfile from './StudentProfile'
function StudentDashboardHome() {

    return (
        <>
            <Container className="extend-width" >
                <StudentProfile />
                <Row className="mx-auto w-100 pt-5 justify-content-center">
                    <Col lg={5} sm={12} className=" shadow " >
                        <Row>
                            <Col className="boxTitle p-2">
                                <div >
                                    <h4>Subjects Information</h4>
                                </div>
                            </Col>
                        </Row>
                        <Row className="boxInfo p-2 ">
                            <Col >
                                <div>
                                    <p className="parCenter">Total Subjects: 99</p><br/><br/>
                                    <p className="parCenter">Total Subjects Resigned: 99</p><br/><br/>
                                    <p className="parCenter">Total Subjects Present: 99</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={1} sm={12}>
                    <div className="mx-auto mt-3" ></div>
                    </Col>
                    <Col lg={5} sm={12} className=" ">
                        <div className=" shadow ">
                            <Row className="boxTitle p-2 ">
                                <Col>
                                    <div>
                                        <h4>Course Information</h4>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="boxInfo p-2 ">
                                <Col >
                                    <div>
                                        <p className="parCenter">Bachelor of Science in Computer Engineering</p><br/><br/>
                                        <p className="parCenter">4th Year Student</p> 
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        
        </>
    )
}

export default StudentDashboardHome