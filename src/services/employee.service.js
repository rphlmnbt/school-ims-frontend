import axios from 'axios'

const API_URL =  'http://localhost:8080/professor/';


const addNewProf = (
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
    departmentID
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
    departmentID
}).then(response => {
    console.log(response);
    console.log("this is " + departmentID);
  })
  .catch(error => {
    console.log(error);
  });
};


const getProfs = () => {
    return axios.get(API_URL)
  };

const getOneProf = (profID) => {
    return axios.get(API_URL + `${profID}`)
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
    departmentID,
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
  `&departmentID=${departmentID}`)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
  };



export default {
    addNewProf,
    getProfs,
    getOneProf,
    updateStudent
  };