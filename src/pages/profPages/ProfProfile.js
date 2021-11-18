import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { FaUserCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import employeeService from '../../services/employee.service'
import userService from '../../services/user.service'

function ProfProfile() {
    const userID = userService.getCurrentUserID()
    const [professor, setProfessor] = useState([])

    useEffect( async () => {
        await employeeService.getOneProf(userID)
         .then(response => {
           console.log(response.data)
           setProfessor(response.data)
         })
         .catch(function(error) {
           console.log(error);
         });
     }, []);

    return (
        <Row className="user-info-box pt-5">
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
                            <p className="lname">{professor.lastName},</p>
                            <p className="fname">{professor.firstName}</p>
                    </Col>
                    <span className="border-left"></span>
                    <Col lg={2} sm={12}>
                        <div>
                            <p className="profile-info m-0 p-0 font-weight-bold">Employee ID : </p>
                            <p className="profile-info  m-0 p-0 font-weight-bold">Email: </p>
                            <p className="profile-info  m-0 p-0 font-weight-bold">Contact Number: </p>
                            <p className="profile-info font-weight-bold">User Role: </p> 
                        </div>
                    </Col>
                    <Col lg={2} sm={12}>
                        <div>
                            <p className="profile-info m-0 p-0">{professor.userID}</p>
                            <p className="profile-info  m-0 p-0">{professor.email}</p>
                            <p className="profile-info  m-0 p-0">{professor.contactNumber}</p>
                            <p className="profile-info ">{professor.userRole}</p> 
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default ProfProfile