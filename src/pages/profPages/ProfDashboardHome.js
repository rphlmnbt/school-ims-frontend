import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import employeeService from '../../services/employee.service'
import userService from '../../services/user.service'
import '../../styles/pages/DashboardHome.css'
import ProfProfile from './ProfProfile'

function ProfDashboardHome() {
    const userID = userService.getCurrentUserID()
    const [professor, setProfessor] = useState([])
    const [subjects, setSubjects] = useState("NUM")
    const [department, setDepartment] = useState("DEPT")
    const [activities, setActivities] = useState("ACT")

    useEffect( async () => {
        await employeeService.getOneProf(userID)
         .then(response => {
           console.log(response.data)
           setProfessor(response.data)
            setSubjects(response.data.joinedProfessorSubjects)
            setDepartment(response.data.department)
            setActivities(response.data.activities)
         })
         .catch(function(error) {
           console.log(error);
         });
     }, []);
    return (
        <Container className="extend-width" >
            <ProfProfile />
            <Row className="mx-auto w-100 pt-5 justify-content-center">
                <Col lg={5} sm={12} className="shadow " >
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
                                <p className="par-center">Total Subjects: {subjects.length}</p><br/><br/>
                                <p className="par-center">Total Activities: {activities.length}</p><br/><br/>
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
                                <h4>Department Information</h4>
                            </div>
                        </Col>
                    </Row>
                    <Row className="box-info p-2 ">
                        <Col >
                            <div>
                                <p className="par-center">Department ID: {department.departmentID}</p><br/><br/>
                                <p className="par-center ">Department Name: {department.departmentName}</p><br/><br/>
                                <p className="par-center">Department Dean: {department.departmentDean}</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row> 
        </Container>
    )
}

export default ProfDashboardHome