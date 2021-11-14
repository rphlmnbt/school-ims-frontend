import axios from 'axios'

const API_URL =   + '/api/auth/'

const addNewSubject = (
    subjectName,
    subjectCode, 
    units, 
    lecHours,
    labHours
    ) => {
return axios.post('http://localhost:8080/subjects/', {
    subjectName,
    subjectCode, 
    units, 
    lecHours,
    labHours
}).then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
};

export default {
    addNewSubject
  };