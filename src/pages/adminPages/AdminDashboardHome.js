import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import adminService from '../../services/admin.service'
import courseService from '../../services/course.service'
import employeeService from '../../services/employee.service'
import studentService from '../../services/student.service'
import subjectService from '../../services/subject.service'
import userService from '../../services/user.service'
import '../../styles/pages/DashboardHome.css'
import AdminProfile from './AdminProfile'

function AdminDashboardHome() {
    const userID = userService.getCurrentUserID()
    const [admin, setAdmin] = useState([])
    const [employees, setEmployees] = useState([])
    const [students, setStudents] = useState([])
    const [subjects, setSubjects] = useState([])
    const [courses, setCourses] = useState([])

    useEffect( async () => {
        await adminService.getOneAdmin(userID)
         .then(response => {
           console.log(response.data)
           setAdmin(response.data)
         })
         .catch(function(error) {
           console.log(error);
         });
         await employeeService.getProfs()
         .then(response => {
            console.log(response.data)
             setEmployees(response.data)
         })
         .catch(function(error) {
            console.log(error);
          });
        await studentService.getStudents()
        .then(response => {
            console.log(response.data)
             setStudents(response.data)
         })
         .catch(function(error) {
            console.log(error);
          });
        await subjectService.getSubjects()
        .then(response => {
            console.log(response.data)
             setSubjects(response.data)
         })
         .catch(function(error) {
            console.log(error);
          });
          await courseService.getCourses()
        .then(response => {
            console.log(response.data)
             setCourses(response.data)
         })
         .catch(function(error) {
            console.log(error);
          });
     }, []);

    return (
            <Container>
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
                                    <p className="par-center">Total Employees: {employees.length}</p><br/><br/>
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
                                    <p className="par-center">Total Students: {students.length}</p><br/><br/>
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
                                    <p className="par-center">Total Subjects: {subjects.length}</p><br/><br/>
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
                                    <p className="par-center">Total Course: {courses.length}</p> <br/><br/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>      
            </Container>
    )
}

export default AdminDashboardHome