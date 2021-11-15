import axios from 'axios'

const API_URL =  'http://localhost:8080/courses/';

const addNewCourse = (
    courseName, 
    courseCode, 
    chairperson
    ) => {
return axios.post(API_URL, {
    courseName, 
    courseCode, 
    chairperson
}).then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
};


const getCourses = () => {
    return axios.get(API_URL)
  };

const getOneCourse = (subjectID) => {
    return axios.get(API_URL + `${subjectID}`)
  };

const updateCourse = (
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
    addNewCourse,
    getCourses,
    updateCourse,
    updateCourse
  };