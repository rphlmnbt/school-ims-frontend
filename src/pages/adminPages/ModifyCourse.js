import React, { useRef, useState } from 'react'
import { Formik} from 'formik'
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import schema from '../../schemas/course.schema'
import courseService from '../../services/course.service';

function ModifyCourse() {

    const formRef = useRef()
    const history = useHistory();
    const [show, setShow] = useState(false);
    let [formValues, setFormValues] = useState(null);
    const [updateId, setupdateId] = useState(null);

    // function for setting data using id
    const setData = async e => {
        var x = e.target.value;
        var id = parseInt(x);
        setupdateId(id);
        await courseService.getOneCourse(id)
        .then(response => {
            const  loadValues =  {
                course_name: response.data.courseCode,
                course_code: response.data.courseCode,
                department_id: response.data.department.departmentID,
                chairperson: response.data.chairperson
            }   
        return  setFormValues(loadValues);             
        })
        .catch(function(error) {
          console.log(error);
        });
        
    }

    const updateCourse = () => {
        courseService.updateCourse(    
            formRef.current.values.course_name,  
            formRef.current.values.course_code,
            formRef.current.values.department_id, 
            formRef.current.values.chairperson,
            updateId)
            console.log(
                updateId);
            handleShow();
    };

    

    const handleClose = () => {
        setShow(false)
        history.push('/acadbase/AdminDashboard')
    };
    const handleShow = () => setShow(true);

    const initialValues = {
        course_code: '',
        course_name: '',
        department_id: '',
        chairperson: ''
    }


    return (
        <Formik
            validationSchema={schema}
            initialValues={   formValues || initialValues}
            enableReinitialize
            onSubmit={updateCourse}
            innerRef = {formRef}
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
                                        <h4>Modify Course</h4>
                                    </div>
                                </Col>
                            </Row>
                            <Form noValidate onSubmit={handleSubmit}>
                                <Row className="g-2">
                                    <Col md>
                                        <Form.Group  controlId="course_id">
                                            <Form.Label>Course ID</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="course_id" 
                                                value={values.course_id} 
                                                onChange={handleChange, setData}
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
                                        <Form.Group controlId="course_code">
                                            <Form.Label>Course Code</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="course_code" 
                                                value={values.course_code} 
                                                onChange={handleChange}
                                                isValid={touched.course_code && !errors.course_code} 
                                                isInvalid={touched.course_code && !!errors.course_code} 
                                                placeholder="Course Code" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.course_code}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        
                                    </Col>
                                </Row>
                                <Row className="g-2">
                                    <Col md>
                                        <Form.Group  controlId="course_name">
                                            <Form.Label>Course Name</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="course_name" 
                                                value={values.course_name} 
                                                onChange={handleChange}
                                                isValid={touched.course_name && !errors.course_name}
                                                isInvalid={touched.course_name && !!errors.course_name} 
                                                placeholder="Course Name" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.course_name}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col md>
                                        <Form.Group controlId="department_id">
                                            <Form.Label>Department ID</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="department_id" 
                                                value={values.department_id} 
                                                onChange={handleChange}
                                                isValid={touched.department_id && !errors.department_id} 
                                                isInvalid={touched.department_id && !!errors.department_id} 
                                                placeholder="Department ID" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.department_id}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        
                                    </Col>
                                </Row>
                                <Row className="g-2">
                                    <Col md>
                                        <Form.Group  controlId="chairperson">
                                            <Form.Label>Chairperson</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="chairperson" 
                                                value={values.chairperson} 
                                                onChange={handleChange}
                                                isValid={touched.chairperson && !errors.chairperson}
                                                isInvalid={touched.chairperson && !!errors.chairperson} 
                                                placeholder="Chairperson" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.chairperson}
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
                                    Apply Changes
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

export default ModifyCourse