import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../styles/pages/AdminDashboardHome.css'

function AdminDashboardHome() {

    return (
        <>
            <Container className=" pt-5 d-flex  justify-content-center">
                <Row className=" w-100">
                    <Col lg={5} sm={12} className=" shadow " >
                        <Row>
                            <Col className="boxTitle p-2">
                                <div >
                                    <h4>Employee Information</h4>
                                </div>
                            </Col>
                        </Row>
                        <Row className="boxInfo p-2">
                            <Col >
                                <div>
                                    <p>Total Employees: 99</p><br/>
                                    <p>Total Employees Resigned: 99</p><br/>
                                    <p>Total Employees Present: 99</p><br/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={1} sm={12}>
                    <div className="mx-auto mt-3" ></div>
                    </Col>
                    <Col lg={5} sm={12} className="shadow ">
                        <Row className="boxTitle p-2">
                            <Col>
                                <div >
                                    <h4>Student Information</h4>
                                </div>
                            </Col>
                        </Row>
                        <Row className="boxInfo p-2">
                            <Col >
                                <div>
                                    <p>Total Students: 99</p><br/>
                                    <p>Total Students Enrolled: 99</p><br/>
                                    <p>Total Students Drop: 99</p><br/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
            </Container>
            <Container className=" pt-5 d-flex  justify-content-center">
                <Row className=" w-100">
                    <Col lg={5} sm={12} className=" shadow " >
                        <Row>
                            <Col className="boxTitle p-2">
                                <div >
                                    <h4>Subjects Information</h4>
                                </div>
                            </Col>
                        </Row>
                        <Row className="boxInfo p-2">
                            <Col >
                                <div>
                                    <p>Total Subjects: 99</p><br/>
                                    <p>Total Inactive Subjects : 99</p><br/>
                                    <p>Total Active Subjects : 99</p><br/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={1} sm={12}>
                    <div className="mx-auto mt-3" ></div>
                    </Col>
                    <Col lg={5} sm={12} className="shadow ">
                        <Row className="boxTitle p-2">
                            <Col>
                                <div >
                                    <h4>Course Information</h4>
                                </div>
                            </Col>
                        </Row>
                        <Row className="boxInfo p-2">
                            <Col >
                                <div>
                                    <p>Total Courses: 99</p><br/>
                                    <p>Total Active Courses: 99</p><br/>
                                    <p>Total Inactive Courses: 99</p><br/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
            </Container>
        
        </>
    )
}

export default AdminDashboardHome