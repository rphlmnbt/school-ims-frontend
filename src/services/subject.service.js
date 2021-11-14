import axios from 'axios'

const API_URL =   + '/api/auth/';

const addNewSubject = (
    subjectName,
    subjectCode, 
    units, 
    lectureHours,
    labHours
    ) => {
return axios.post('http://localhost:8080/subjects/', {
    subjectName,
    subjectCode, 
    units, 
    lectureHours,
    labHours
}).then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
};


const getSubjects = () => {
    return axios.get('http://localhost:8080/subjects/')
  };

export default {
    addNewSubject,
    getSubjects
  };