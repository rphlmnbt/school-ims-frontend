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
        
return axios.post(API_URL+`?departmentID=${departmentID}`, {
    email,
    password,
    userRole,  
    firstName,
    lastName,
    gender,
    birthDate,
    homeAddress,
    contactNumber,
    civilStatus
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

const getOneProf = (professorID) => {
    return axios.get(API_URL + `${professorID}`)
  };

const updateProfessor = (
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
    professorID
    ) => {
  return axios.put(API_URL + `${professorID}`+
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

  const getProfessorSubjectByID = (professorID) => {
    return axios.get(API_URL + `${professorID}/subject`)
  }

  const addNewSubject = (professorID, subjectID) => {
    return axios.put(API_URL + `${professorID}/subject?subjectID=${subjectID}`)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }


export default {
    addNewProf,
    getProfs,
    getOneProf,
    updateProfessor,
    getProfessorSubjectByID,
    addNewSubject
  };