import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../styles/pages/AdminDashboardHome.css'
import { FaUserCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

function AdminDashboardHome() {

    return (
        <>
        
            <Container className="extend-width  " >
                <Row className=" w-100 pt-5 ">
                    <Col lg={12} sm={12} className=" shadow " >
                        <Row>
                            <Col className="boxTitle p-2">
                                <div >
                                    <h4>Admin Information</h4>
                                </div>
                            </Col>
                        </Row>
                        <Row className="boxInfo p-2 d-flex align-items-center">
                            <Col lg={2} sm={12}>
                                <IconContext.Provider value={{size:"80px", color:"#710E1D"}}>
                                    <FaUserCircle />
                                </IconContext.Provider>
                            </Col>
                            
                            <Col lg={5} sm={12}>
                                    <p className="LName">Manabat,</p>
                                    <p className="FName">RAPHAEL DUCUT</p>
                            </Col>
                            <span className="borderLeft"></span>
                            <Col lg={2} sm={12} className="">
                                <div>
                                    <p className="AdminInfo m-0 p-0">Admin Number : </p>
                                    <p className="AdminInfo  m-0 p-0">Gender: </p>
                                    <p className="AdminInfo  m-0 p-0">Nationality: </p>
                                    <p className="AdminInfo ">Region: </p>
                                    
                                </div>
                            </Col>
                            <Col lg={2} sm={12} className="">
                                <div>
                                    <p className="AdminInfo m-0 p-0">12345674</p>
                                    <p className="AdminInfo  m-0 p-0">Male</p>
                                    <p className="AdminInfo  m-0 p-0">Filipino</p>
                                    <p className="AdminInfo ">Yen's Org</p>
                                    
                                </div>
                            </Col>
                            
                            
                        </Row>
                    </Col>
                </Row>
                
            
                <Row className=" w-100 pt-5 justify-content-center" >
                    <Col lg={5} sm={12} className=" shadow " >
                        <Row>
                            <Col className="boxTitle p-2">
                                <div >
                                    <h4>Employee Information</h4>
                                </div>
                            </Col>
                        </Row>
                        <Row className="boxInfo p-2 ">
                            <Col >
                                <div>
                                    <p className="parCenter">Total Employees: 99</p><br/><br/>
                                    <p className="parCenter">Total Employees Resigned: 99</p><br/><br/>
                                    <p className="parCenter">Total Employees Present: 99</p>
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
                        <Row className="boxInfo p-2 ">
                            <Col >
                                <div>
                                    <p className="parCenter">Total Students: 99</p><br/><br/>
                                    <p className="parCenter">Total Students Resigned: 99</p><br/><br/>
                                    <p className="parCenter">Total Students Present: 99</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
            
                <Row className=" w-100 pt-5 justify-content-center">
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
                    <Col lg={5} sm={12} className="shadow ">
                        <Row className="boxTitle p-2">
                            <Col>
                                <div>
                                    <h4>Course Information</h4>
                                </div>
                            </Col>
                        </Row>
                        <Row className="boxInfo p-2 ">
                            <Col >
                                <div>
                                    <p className="parCenter">Total Course: 99</p> <br/><br/>
                                    <p className="parCenter">Total Course Resigned: 99</p><br/><br/>
                                    <p className="parCenter">Total Course Present: 99</p>
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