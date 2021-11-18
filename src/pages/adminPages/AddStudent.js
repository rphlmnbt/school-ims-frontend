import React, { useRef, useState } from 'react'
import { Formik} from 'formik'
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";
import { FaUserCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import '../../styles/pages/EditUser.css'
import { useHistory } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import schema from '../../schemas/addstudent.schema'
import studentService from '../../services/student.service';

function AddStudent() {
    const formRef = useRef()
    const history = useHistory();
    const [show, setShow] = useState(false);

    const addNewStudent = () => {
        const userRole =  "student";
        studentService.addNewStudent(
            formRef.current.values.email, 
            formRef.current.values.password, 
            userRole,
            formRef.current.values.first_name,
            formRef.current.values.last_name,
            formRef.current.values.gender,
            formRef.current.values.birth_date,
            formRef.current.values.home_address,
            formRef.current.values.contact_number,
            formRef.current.values.civil_status,
            formRef.current.values.year_level,
            formRef.current.values.course_id,
            formRef.current.values.section);

            handleShow();
    };

    const handleClose = () => {
        setShow(false)
        history.push('/acadbase/AdminDashboard')
    };
    const handleShow = () => setShow(true);

    return (
        <Formik
            validationSchema={schema}
            onSubmit={addNewStudent}
            innerRef = {formRef}
            initialValues={{
            }}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
            }) => ( 
                <Container className="extend-height py-5 ">
                    <Row className="align-items-center justify-content-center">
                        <Col  md={8} sm={12} className="text-center mt-5 shadow p-3 mb-5 bg-white">
                            <div className="pb-3 mx-auto" >
                                <p className="form-title">Add New Student</p><br />
                                <IconContext.Provider value={{size:"80px", color:"#710E1D"}}>
                                    <FaUserCircle />
                                </IconContext.Provider>
                            </div>
                           
                            <Form noValidate onSubmit={handleSubmit}>
                                <Row className="g-2">
                                    <Col md>
                                        <Form.Group  controlId="email">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="email" 
                                                value={values.email} 
                                                onChange={handleChange}
                                                isValid={touched.email && !errors.email}
                                                isInvalid={touched.email && !!errors.email} 
                                                placeholder="Email" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.email}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group controlId="password">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control 
                                                type="password" 
                                                name="password" 
                                                value={values.password} 
                                                onChange={handleChange}
                                                isValid={touched.password && !errors.password}  
                                                isInvalid={touched.password && !!errors.password} 
                                                placeholder="Password" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.password}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="g-2">
                                    <Col md>
                                        <Form.Group controlId="first_name">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="first_name" 
                                                value={values.first_name} 
                                                onChange={handleChange}
                                                isValid={touched.first_name && !errors.first_name}  
                                                isInvalid={touched.first_name && !!errors.first_name} 
                                                placeholder="First Name" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.first_name}
                                            </Form.Control.Feedback>
                                         </Form.Group>
                                    </Col>

                                    <Col md>
                                        <Form.Group controlId="last_name">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="last_name" 
                                                value={values.last_name} 
                                                onChange={handleChange}
                                                isValid={touched.last_name && !errors.last_name} 
                                                isInvalid={touched.last_name && !!errors.last_name} 
                                                placeholder="Last Name" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.last_name}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        
                                    </Col>
                                </Row>

                                <Row className="g-2 " >
                                    <Col md>
                                    <Form.Group controlId="gender">
                                            <Form.Label>Gender</Form.Label>
                                                    <Row className="g-2">
                                                    
                                                        <Col md>
                                                            <Form.Check 
                                                                name = "gender"
                                                                type="radio" 
                                                                label="Male" 
                                                                value={"Male"} 
                                                                onChange={handleChange}
                                                                isValid={touched.gender && !errors.gender} 
                                                                isInvalid={touched.gender && !!errors.gender} 
                                                            />
                                                        </Col>
                                                        <Col md>
                                                            <Form.Check 
                                                                name = "gender"
                                                                type="radio" 
                                                                label="Female" 
                                                                value={"Female"} 
                                                                onChange={handleChange}
                                                                isValid={touched.gender && !errors.gender} 
                                                                isInvalid={touched.gender && !!errors.gender} 
                                                            />
                                                        </Col>
                                                    </Row>

                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.gender}
                                                </Form.Control.Feedback>
                                     </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group controlId="birth_date">
                                            <Form.Label>Birth Date</Form.Label>
                                            <Form.Control 
                                                type="date" 
                                                name="birth_date" 
                                                value={values.birth_date} 
                                                onChange={handleChange}
                                                isValid={touched.birth_date && !errors.birth_date} 
                                                isInvalid={touched.birth_date && !!errors.birth_date} 
                                                placeholder="Birth Date" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.birth_date}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="g-2">
                                    

                                    <Col md>
                                        <Form.Group controlId="contact_number">
                                            <Form.Label>Contact Number</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="contact_number" 
                                                value={values.contact_number} 
                                                onChange={handleChange}
                                                isValid={touched.contact_number && !errors.contact_number} 
                                                isInvalid={touched.contact_number && !!errors.contact_number} 
                                                placeholder="Contact Number" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.contact_number}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col md>
                                        <Form.Group controlId="civil_status">
                                            <Form.Label>Civil Status</Form.Label>
                                            <Form.Control 

                                                as="select"
                                                name="civil_status" 
                                                value={values.civil_status} 
                                                onChange={handleChange}
                                                isValid={touched.civil_status && !errors.civil_status} 
                                                isInvalid={touched.civil_status && !!errors.civil_status} 
                                                placeholder="Civil Status" 
                                            >
                                                <option value="" disabled selected>Select your option</option>
                                                <option value="Single">Single</option>
                                                <option value="Married">Married</option>
                                                <option value="Annulled">Annulled</option>
                                                <option value="Widowed">Widowed</option>
                                            </Form.Control>
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.civil_status}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                </Row>
                                
                                <Row className="g-2">
                                    <Col md>
                                        <Form.Group controlId="home_address">
                                            <Form.Label>Home Address</Form.Label>
                                            <Form.Control 
                                                type="home_address" 
                                                name="home_address" 
                                                value={values.home_address} 
                                                onChange={handleChange}
                                                isValid={touched.home_address && !errors.home_address} 
                                                isInvalid={touched.home_address && !!errors.home_address} 
                                                placeholder="Home Address" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.home_address}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <hr />
                                <Row className="g-2">
                                    <Col md>
                                        <Form.Group controlId="course_id">
                                            <Form.Label>Course ID</Form.Label>
                                            <Form.Control 
                                                type="course_id" 
                                                name="course_id" 
                                                value={values.course_id} 
                                                onChange={handleChange}
                                                isValid={touched.course_id && !errors.course_id} 
                                                isInvalid={touched.course_id && !!errors.course_id} 
                                                placeholder="Course ID" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.course_id}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group controlId="year_level">
                                            <Form.Label>Year Level</Form.Label>
                                            <Form.Control 
                                                type="year_level" 
                                                name="year_level" 
                                                value={values.year_level} 
                                                onChange={handleChange}
                                                isValid={touched.year_level && !errors.year_level} 
                                                isInvalid={touched.year_level && !!errors.year_level} 
                                                placeholder="Year Level " 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.year_level}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="g-2">
                                    <Col md>
                                        <Form.Group controlId="home_address">
                                            <Form.Label>Section</Form.Label>
                                            <Form.Control 
                                                type="section" 
                                                name="section" 
                                                value={values.section} 
                                                onChange={handleChange}
                                                isValid={touched.section && !errors.section} 
                                                isInvalid={touched.section && !!errors.section} 
                                                placeholder="Section" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.section}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <br />
                                <Button 
                                    variant="primary btn-block" 
                                    type="submit" 
                                    className="submit-btn"
                                >
                                    Add Student
                                </Button>
                                <LinkContainer to="/acadbase/AdminDashboard">
                                    <Button 
                                        variant="primary btn-block"  
                                        className="submit-btn"
                                    >
                                        Back to Dashboard
                                    </Button>
                                </LinkContainer>
                            </Form>
                        </Col>
                    </Row>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Edit Success!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Redirecting to User Dashboard</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            )}
        </Formik>
       
    )
}

export default AddStudent