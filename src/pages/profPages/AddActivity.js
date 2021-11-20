import React, { useRef, useState } from 'react'
import { Formik} from 'formik'
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import schema from '../../schemas/activity.schema'
import activityService from '../../services/activity.service';
import userService from '../../services/user.service';

function AddActivity() {

    const formRef = useRef()
    const history = useHistory();
    const [show, setShow] = useState(false);
    const userRole = userService.getCurrentUserRole()
    const userID = userService.getCurrentUserID()

    const addNewActivity = () => {
        console.log(formRef.current.values.activity_name, 
            formRef.current.values.activity_type,
            formRef.current.values.student_score, 
            formRef.current.values.total_score);
        activityService.addNewActivity(
            formRef.current.values.activity_name, 
            formRef.current.values.activity_type,
            formRef.current.values.student_score, 
            formRef.current.values.total_score,
            formRef.current.values.student_id,
            userID,
            formRef.current.values.subject_id);

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
            onSubmit={addNewActivity}
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
                        <Col  md={8} sm={12} className="text-center mt-5 shadow pb-3 mb-5 bg-white">
                            <Row>
                                <Col className="box-title p-2 mb-5">
                                    <div >
                                        <h4>Record Activity</h4>
                                    </div>
                                </Col>
                            </Row>
                            <Form noValidate onSubmit={handleSubmit}>
                                <Row className="g-2">
                                    <Col md>
                                        <Form.Group  controlId="activity_name">
                                            <Form.Label>Activity Name</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="activity_name" 
                                                value={values.activity_name} 
                                                onChange={handleChange}
                                                isValid={touched.activity_name && !errors.activity_name}
                                                isInvalid={touched.activity_name && !!errors.activity_name} 
                                                placeholder="Activity Name" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.activity_name}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md>
                                        <Form.Group controlId="activity_type">
                                            <Form.Label>Activity Type</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="activity_type" 
                                                value={values.activity_type} 
                                                onChange={handleChange}
                                                isValid={touched.activity_type && !errors.activity_type} 
                                                isInvalid={touched.activity_type && !!errors.activity_type} 
                                                placeholder="Activity Type" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.activity_type}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        
                                    </Col>
                                </Row>
                                <Row className="g-2">
                                    <Col md>
                                        <Form.Group  controlId="student_score">
                                            <Form.Label>Student Score</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="student_score" 
                                                value={values.student_score} 
                                                onChange={handleChange}
                                                isValid={touched.student_score && !errors.student_score}
                                                isInvalid={touched.student_score && !!errors.student_score} 
                                                placeholder="Student Score" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.student_score}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col md>
                                        <Form.Group controlId="total_score">
                                            <Form.Label>Total Score</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="total_score" 
                                                value={values.total_score} 
                                                onChange={handleChange}
                                                isValid={touched.total_score && !errors.total_score} 
                                                isInvalid={touched.total_score && !!errors.total_score} 
                                                placeholder="Total Score" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.total_score}
                                            </Form.Control.Feedback>
                                        </Form.Group>  
                                    </Col>
                                </Row>
                                <Row className="g-2">
                                <Col md>
                                        <Form.Group  controlId="student_id">
                                            <Form.Label>Student ID</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="student_id" 
                                                value={values.student_id} 
                                                onChange={handleChange}
                                                isValid={touched.student_id && !errors.student_id}
                                                isInvalid={touched.student_id && !!errors.student_id} 
                                                placeholder="Student ID" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.student_id}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col md>
                                        <Form.Group controlId="total_score">
                                            <Form.Label>Subject ID</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="subject_id" 
                                                value={values.subject_id} 
                                                onChange={handleChange}
                                                isValid={touched.subject_id && !errors.subject_id} 
                                                isInvalid={touched.subject_id && !!errors.subject_id} 
                                                placeholder="Subject ID" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.subject_id}
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
                                    Create Activity
                                </Button>
                                <LinkContainer to="/acadbase/ProfessorDashboard">
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
                        <Modal.Title>Created!</Modal.Title>
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

export default AddActivity