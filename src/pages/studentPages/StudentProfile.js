import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { FaUserCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

function StudentProfile() {
    return (
        <Row className="userinfo mx-auto pt-5 ">
            <Col lg={12} sm={12} className=" shadow " >
                <Row>
                    <Col className="boxTitle p-2">
                        <div >
                            <h4>Student Information</h4>
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
                            <p className="LName">Samson,</p>
                            <p className="FName">Yennyl</p>
                    </Col>
                    <span className="borderLeft"></span>
                    <Col lg={2} sm={12} className="">
                        <div>
                            <p className="AdminInfo m-0 p-0">Admin Number : </p>
                            <p className="AdminInfo  m-0 p-0">Gender: </p>
                            <p className="AdminInfo  m-0 p-0">Nationality: </p>
                            <p className="AdminInfo ">Religion: </p>
                            
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
    )
}

export default StudentProfile