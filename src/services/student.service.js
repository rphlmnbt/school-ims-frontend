import axios from 'axios'

const API_URL =  'http://localhost:8080/students/';


const addNewStudent = (
    email,
    password,
    userRole,  
    firstName,
    lastName,
    gender,
    birthDate,
    homeAddress,
    contactNumber,
    civilStatus,
    yearLevel,
    courseID,
    section
    ) => {
        
return axios.post(API_URL, {
    email,
    password,
    userRole,  
    firstName,
    lastName,
    gender,
    birthDate,
    homeAddress,
    contactNumber,
    civilStatus,
    yearLevel,
    courseID,
    section
}).then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
};


const getStudents = () => {
    return axios.get(API_URL)
  };

const getOneStudent = (courseID) => {
    return axios.get(API_URL + `${courseID}`)
  };

const updateStudent = (
  courseName, 
  courseCode, 
  chairperson,
  departmentID,
  courseID
    ) => {
  return axios.put(API_URL + `${courseID}
  ?courseName=${courseName}
  &courseCode=${courseCode}
  &departmentID=${chairperson}
  &chairperson=${departmentID}`);
  };



export default {
    addNewStudent,
    getStudents,
    getOneStudent,
    updateStudent
  };