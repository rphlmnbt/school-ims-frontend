import React, { useEffect, useRef, useState } from 'react'
import { Formik } from 'formik'
import { Form, Button, Container, Row, Col, Modal } from 'react-bootstrap'
import { FaUserCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import '../styles/pages/LogIn.css'
import schema from '../schemas/login.schema'
import logo from '../pseudoDb/acadbase-logo.png'
import { useHistory  } from 'react-router-dom'
import userService from '../services/user.service'

function LogIn() {
    const formRef = useRef()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const history = useHistory();

    const logIn = () => {
        console.log(formRef.current.values.password)
        userService.login(formRef.current.values.email, formRef.current.values.password)
          .then(response => {
              
            console.log(response.userID)
            if (response.userID){
                localStorage.setItem("logged",true);
                const role = response.userRole;
                var path;
                if(role === 'student') {
                    path = `/acadbase/StudentDashboard`; 
                }
                if(role === 'admin') {
                    path = `/acadbase/AdminDashboard`; 
                }
                if(role === 'professor') {
                    path = `/acadbase/ProfessorDashboard`; 
                }            
                history.push(path);
            }  else {
                handleShow()
            }
               
          })
          .catch(e => {
            console.log(e);
            handleShow()
          });
    };

    localStorage.setItem("logged",false); 
    console.log(localStorage.getItem("logged"));


    return (
        <Formik
            validationSchema={schema}
            onSubmit={console.log("login")}
            innerRef = {formRef}
            initialValues={{
                email: '',
                password: ''
            }}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                isInvalid,
                errors,
            }) => (
                <Container className="extend-height py-5 d-flex align-items-center justify-content-center">
                    <Row className="justify-content-center w-100">
                        <Col lg={6} className="d-sm-none d-md-block shadow " id="info">
                            <div class="pt-3">
                                <img 
                                    src={logo} 
                                    alt="acadbase-logo"
                                    style={{padding : "5px"}}
                                    height={"250px"}
                                />
                            </div>
                            <div>
                                <h3 id="infoLabel">
                                    ACADBASE
                                </h3>
                                <p className="text-white" >Information Management System</p>
                            </div>
                        </Col>
                        <Col lg={4} sm={12} className="text-center shadow p-3 bg-white">
                            <div className="pb-3 mb-3 mx-auto" >
                                <p className="form-title">Log In</p><br />
                                <IconContext.Provider value={{size:"80px", color:"#710E1D"}}>
                                    <FaUserCircle />
                                </IconContext.Provider>
                            </div>
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Group controlId="email">
                                    <Form.Label className="form-label w-100">Email</Form.Label>
                                    <Form.Control 
                                        className="rounded"
                                        type="text" 
                                        name="email" 
                                        value={values.email} 
                                        onChange={handleChange} 
                                        isInvalid={touched.email && !!errors.email} 
                                        placeholder="Enter Email"
                                    />
                                </Form.Group>

                                <Form.Group controlId="password">
                                    <Form.Label className="form-label w-100">Password</Form.Label>
                                    <Form.Control
                                        className="rounded" 
                                        type="password" 
                                        name="password" 
                                        value={values.password} 
                                        onChange={handleChange} 
                                        isInvalid={touched.password && !!errors.password} 
                                        placeholder="Enter Password"
                                    />
                                </Form.Group>
                                <Button 
                                        variant="primary btn-block" 
                                        type="submit" 
                                        className="submit-btn mt-5"
                                        onClick={logIn}
                                    >
                                        Log In
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Log In Failed</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Please make sure your credentials are correct.</Modal.Body>
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

export default LogIn