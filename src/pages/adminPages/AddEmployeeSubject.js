import React, { useRef, useState } from 'react'
import { Formik} from 'formik'
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import schema from '../../schemas/addemployeesubject.schema'
import adminService from '../../services/admin.service';


function AddEmployeeSubject() {

    const formRef = useRef()
    const history = useHistory();
    const [show, setShow] = useState(false);



    const handleClose = () => {
        setShow(false)
        history.push('/acadbase/AdminDashboard')
    };
    const handleShow = () => setShow(true);

    const addProfSubject = () => {
        
        adminService.addProfSubject(
            formRef.current.values.professor_id,
            formRef.current.values.subject_id);
        handleShow();
    };

    return (
        <Formik
            validationSchema={schema}
            onSubmit={addProfSubject}
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
                                        <h4>Add Subject to Professor</h4>
                                    </div>
                                </Col>
                            </Row>
                            <Form noValidate onSubmit={handleSubmit}>
                                <Row className="g-2">
                                    <Col md>
                                        <Form.Group controlId="subject_id">
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
                                <Row className="g-2">
                                    <Col md>
                                        <Form.Group  controlId="professor_id">
                                            <Form.Label>Professor ID</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                name="professor_id" 
                                                value={values.professor_id} 
                                                onChange={handleChange}
                                                isValid={touched.professor_id && !errors.professor_id}
                                                isInvalid={touched.professor_id && !!errors.professor_id} 
                                                placeholder="Professor ID" 
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.professor_id}
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
                                    Add Subject
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

export default AddEmployeeSubject