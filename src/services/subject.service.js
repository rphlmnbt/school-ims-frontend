import axios from 'axios'

const API_URL =  'http://localhost:8080/subjects/';

const addNewSubject = (
    subjectName,
    subjectCode, 
    units, 
    lectureHours,
    labHours,
    departmentID
    ) => {
return axios.post(API_URL, {
    subjectName,
    subjectCode, 
    units, 
    lectureHours,
    labHours,
    departmentID
}).then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
};


const getSubjects = () => {
    return axios.get(API_URL)
  };

const getOneSubject = (subjectID) => {
    return axios.get(API_URL + `${subjectID}`)
  };

const updateSubject = (
    subjectName,
    subjectCode, 
    units, 
    lectureHours,
    labHours,
    departmentID,
    subjectID
    ) => {
  return axios.put(API_URL + `${subjectID}
  ?subjectName=${subjectName}
  &subjectCode=${subjectCode}
  &units=${units}
  &lectureHours=${lectureHours}
  &labHours=${labHours}
  &departmentID=${departmentID}`);
  };



export default {
    addNewSubject,
    getSubjects,
    updateSubject,
    getOneSubject
  };