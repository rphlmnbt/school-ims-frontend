import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import studentService from '../../services/student.service'
import userService from '../../services/user.service'
import '../../styles/pages/DashboardHome.css'
import StudentProfile from './StudentProfile'

function StudentDashboardHome() {
    const userID = userService.getCurrentUserID()
    const [student, setStudent] = useState([])
    const [subjects, setSubjects] = useState("NUM")
    const [course, setCourse] = useState("COURSE")
    const [activities, setActivities] = useState("ACT")
    
    useEffect( async () => {
         await studentService.getOneStudent(userID)
          .then(response => {
            console.log(response.data)
            setStudent(response.data)
            setSubjects(response.data.joinedStudentSubjects)
            setCourse(response.data.course)
            setActivities(response.data.activities)
          })
          .catch(function(error) {
            console.log(error);
          });
      }, []);



      


    return (
        <Container className="extend-width" >
            <StudentProfile />
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
                                <p className="par-center">Total Subjects: {subjects.length} </p><br/><br/>
                                <p className="par-center">Total Activities: {activities.length}</p><br/><br/>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={1} sm={12}>
                <div className="mx-auto mt-3" ></div>
                </Col>
                <Col lg={5} sm={12} className=" ">
                    <div className="shadow ">
                        <Row className="box-title p-2 ">
                            <Col>
                                <div>
                                    <h4>Course Information</h4>
                                </div>
                            </Col>
                        </Row>
                        <Row className="box-info p-2 ">
                            <Col >
                                <div>
                                    <p className="par-center">Course Name: {course.courseName}</p><br/><br/>
                                    <p className="par-center">Year Level: {student.yearLevel}</p> <br/><br/>
                                    <p className="par-center">Section: {student.section}</p> 
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row> 
        </Container>
    )
}

export default StudentDashboardHome