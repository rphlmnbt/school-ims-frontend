import React, { useRef, useState } from 'react'
import { Formik, Field} from 'formik'
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";
import { FaUserCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import '../../styles/pages/EditUser.css'
import { useHistory } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import schema from '../../schemas/modifyemployee.schema'
import profService from '../../services/employee.service';

function ModifyEmployee() {
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
        await profService.getOneProf(id)
        .then(response => {
            const  loadValues =  {

                email: response.data.email, 
                password: response.data.password,
                first_name: response.data.firstName,
                last_name: response.data.lastName,
                gender: response.data.gender,
                birth_date: response.data.birthDate,
                home_address: response.data.homeAddress,
                contact_number: response.data.contactNumber,
                civil_status: response.data.civilStatus,
                department_id: response.data.departmentID
            } ;
        return  setFormValues(loadValues);             
        })
        .catch(function(error) {
          console.log(error);
        });
        
    }

    const updatStudent = () => {
        const userRole =  "student";
        profService.updateStudent(    
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
            formRef.current.values.department_id,
            updateId);
            handleShow();
    };

    const handleClose = () => {
        setShow(false)
        history.push('/acadbase/AdminDashboard')
    };
    const handleShow = () => setShow(true);

    const initialValues = {
        email: '',  
        password: '', 
        first_name: '', 
        last_name: '', 
        gender: '', 
        birth_date: '', 
        home_address: '', 
        contact_number: '', 
        civil_status: '', 
        department_id: ''
    }

    return (
        <Formik
            validationSchema={schema}
            onSubmit={updatStudent}
            innerRef = {formRef}
            initialValues={   formValues || initialValues}
            enableReinitialize
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
                                <p className="form-title">Modify Employee</p><br />
                                <IconContext.Provider value={{size:"80px", color:"#710E1D"}}>
                                    <FaUserCircle />
                                </IconContext.Provider>
                            </div>
                           
                            <Form noValidate onSubmit={handleSubmit}>
                                <Row className="g-2">
                                    <Col md>
                                        <Form.Group controlId="professor_id">
                                            <Form.Label>Professor ID</Form.Label>
                                            <Form.Control 
                                                type="professor_id" 
                                                name="professor_id" 
                                                value={values.professor_id} 
                                                onChange={handleChange, setData}
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
                                                            <Field
                                                                name = "gender"
                                                                type="radio" 
                                                                label="Male" 
                                                                value={"Male"} 
                                                                onChange={handleChange}
                                                                isValid={touched.gender && !errors.gender} 
                                                                isInvalid={touched.gender && !!errors.gender} 
                                                            />
                                                            <span> Male</span>
                                                        </Col>
                                                        <Col md>
                                                            <Field
                                                                name = "gender"
                                                                type="radio" 
                                                                label="Female" 
                                                                value={"Female"} 
                                                                onChange={handleChange}
                                                                isValid={touched.gender && !errors.gender} 
                                                                isInvalid={touched.gender && !!errors.gender} 
                                                            />
                                                            <span> Female</span>
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
                                        <Form.Group controlId="department_id">
                                            <Form.Label>Department ID</Form.Label>
                                            <Form.Control 
                                                type="department_id" 
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
                                <br />
                                <Button 
                                    variant="primary btn-block" 
                                    type="submit" 
                                    className="submit-btn"
                                >
                                    Save changes
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

export default ModifyEmployee