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
      console.log("0"+birthDate+"o")
        
return axios.post(API_URL+`?courseID=${courseID}`, {
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

const getOneStudent = (studentID) => {
    return axios.get(API_URL + `${studentID}`)
  };

const updateStudent = (
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
    section,
    studentID
    ) => {
  return axios.put(API_URL + `${studentID}`+
  `?email=${email}`+
  `&password=${password}`+
  `&userRole=${userRole}`+
  `&firstName=${firstName}`+
  `&lastName=${lastName}`+
  `&gender=${gender}`+
  `&birthDate=${birthDate}`+
  `&homeAddress=${homeAddress}`+
  `&contactNumber=${contactNumber}`+
  `&civilStatus=${civilStatus}`+
  `&yearLevel=${yearLevel}`+
  `&courseID=${courseID}`+
  `&section=${section}`)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
  };



export default {
    addNewStudent,
    getStudents,
    getOneStudent,
    updateStudent
  };