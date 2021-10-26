import React, { useRef, useState } from 'react'
import { Formik} from 'formik'
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import schema from '../../schemas/modifySubject.schema'


function AddSubject() {

    const formRef = useRef()
    const history = useHistory();
    const [show, setShow] = useState(false);



    const handleClose = () => {
        setShow(false)
        history.push('/acadbase/AdminDashboard')
    };
    const handleShow = () => setShow(true);

    return (
        <Formik
            validationSchema={schema}
            onSubmit={handleShow}
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
                                        <h4>Create New Subject</h4>
                                    </div>
                                </Col>
                            </Row>
                            <Form noValidate onSubmit={handleSubmit}>
                                <Row className="g-2">
                                    <Col md>
                                        <Form.Group  controlId="id">
                                            <Form.Label>Subject ID</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="id" 
                                                value={values.id} 
                                                onChange={handleChange}
                                               
                                                isValid={touched.id && !errors.id}
                                                isInvalid={touched.id && !!errors.id} 
                                                placeholder="ID" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.id}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col md>
                                        <Form.Group controlId="subject_code">
                                            <Form.Label>Subject Code</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="subject_code" 
                                                value={values.subject_code} 
                                                onChange={handleChange}
                                                isValid={touched.subject_code && !errors.subject_code} 
                                                isInvalid={touched.subject_code && !!errors.subject_code} 
                                                placeholder="Subject Code" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.subject_code}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        
                                    </Col>
                                </Row>
                                <Row className="g-2">
                                    <Col md>
                                        <Form.Group  controlId="subject_name">
                                            <Form.Label>Subject Name</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="subject_name" 
                                                value={values.subject_name} 
                                                onChange={handleChange}
                                                isValid={touched.subject_name && !errors.subject_name}
                                                isInvalid={touched.subject_name && !!errors.subject_name} 
                                                placeholder="Subject Name" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.subject_name}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col md>
                                        <Form.Group controlId="units">
                                            <Form.Label>Units</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="units" 
                                                value={values.units} 
                                                onChange={handleChange}
                                                isValid={touched.units && !errors.units} 
                                                isInvalid={touched.units && !!errors.units} 
                                                placeholder="Units" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.units}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        
                                    </Col>
                                </Row>
                                <Row className="g-2">
                                    <Col md>
                                        <Form.Group  controlId="lec_hours">
                                            <Form.Label>Lecture Hours</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="lec_hours" 
                                                value={values.lec_hours} 
                                                onChange={handleChange}
                                                isValid={touched.lec_hours && !errors.lec_hours}
                                                isInvalid={touched.lec_hours && !!errors.lec_hours} 
                                                placeholder="Lecture Hours" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.lec_hours}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col md>
                                        <Form.Group controlId="lab_hours">
                                            <Form.Label>Laboratory Hours</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="lab_hours" 
                                                value={values.lab_hours} 
                                                onChange={handleChange}
                                                isValid={touched.lab_hours && !errors.lab_hours} 
                                                isInvalid={touched.lab_hours && !!errors.lab_hours} 
                                                placeholder="Laboratory Hours" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.lab_hours}
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
                                    Create Subject
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

export default AddSubject