import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../styles/pages/DashboardHome.css'
import AdminProfile from './AdminProfile'

function AdminDashboardHome() {

    return (
            <Container className="extend-width" >
                <AdminProfile />
                <Row className="mx-auto w-100 pt-5 justify-content-center" >
                    <Col lg={5} sm={12} className="shadow" >
                        <Row>
                            <Col className="box-title p-2">
                                <div >
                                    <h4>Employee Information</h4>
                                </div>
                            </Col>
                        </Row>
                        <Row className="box-info p-2 ">
                            <Col >
                                <div>
                                    <p className="par-center">Total Employees: 99</p><br/><br/>
                                    <p className="par-center">Total Employees Resigned: 99</p><br/><br/>
                                    <p className="par-center">Total Employees Present: 99</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={1} sm={12}>
                    <div className="mx-auto mt-3" ></div>
                    </Col>
                    <Col lg={5} sm={12} className="shadow ">
                        <Row className="box-title p-2">
                            <Col>
                                <div >
                                    <h4>Student Information</h4>
                                </div>
                            </Col>
                        </Row>
                        <Row className="box-info p-2 ">
                            <Col >
                                <div>
                                    <p className="par-center">Total Students: 99</p><br/><br/>
                                    <p className="par-center">Total Students Resigned: 99</p><br/><br/>
                                    <p className="par-center">Total Students Present: 99</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row> 
                <Row className="mx-auto w-100 pt-5 justify-content-center">
                    <Col lg={5} sm={12} className=" shadow " >
                        <Row>
                            <Col className="box-title p-2">
                                <div >
                                    <h4>Subjects Information</h4>
                                </div>
                            </Col>
                        </Row>
                        <Row className="box-info p-2 ">
                            <Col >
                                <div>
                                    <p className="par-center">Total Subjects: 99</p><br/><br/>
                                    <p className="par-center">Total Subjects Resigned: 99</p><br/><br/>
                                    <p className="par-center">Total Subjects Present: 99</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={1} sm={12}>
                    <div className="mx-auto mt-3" ></div>
                    </Col>
                    <Col lg={5} sm={12} className="shadow ">
                        <Row className="box-title p-2">
                            <Col>
                                <div>
                                    <h4>Course Information</h4>
                                </div>
                            </Col>
                        </Row>
                        <Row className="box-info p-2 ">
                            <Col >
                                <div>
                                    <p className="par-center">Total Course: 99</p> <br/><br/>
                                    <p className="par-center">Total Course Resigned: 99</p><br/><br/>
                                    <p className="par-center">Total Course Present: 99</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>      
            </Container>
    )
}

export default AdminDashboardHome