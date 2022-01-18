import axios from 'axios'

const API_URL =  'http://localhost:8080/admin/';


const getAdmins = () => {
    return axios.get(API_URL)
  };

const getOneAdmin = (adminID) => {
    return axios.get(API_URL + `${adminID}`)
  };

const addStudentSubject = (studentID,subjectID) => {
  return axios.put(`http://localhost:8080/students/` + `${studentID}` + `/subject?subjectID=${subjectID}`)
}

const addProfSubject = (professorID,subjectID) => {
  return axios.put(`http://localhost:8080/professor/` + `${professorID}` + `/subject?subjectID=${subjectID}`)
}

export default {
    getAdmins,
    getOneAdmin,
    addStudentSubject,
    addProfSubject
  };