import axios from 'axios'

const API_URL =  'http://localhost:8080/courses/';

const addNewCourse = (
    courseName, 
    courseCode, 
    chairperson,
    departmentID
    ) => {
return axios.post(API_URL + `?departmentID=${departmentID}`, {
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

const getOneCourse = (courseID) => {
    return axios.get(API_URL + `${courseID}`)
  };

const updateCourse = (
  courseName, 
  courseCode, 
  chairperson,
  departmentID,
  courseID
    ) => {
  return axios.put(API_URL + `${courseID}` +
  `?courseName=${courseName}` +
 ` &courseCode=${courseCode}` +
 ` &departmentID=${chairperson}` +
  `&chairperson=${departmentID}`);
  };



export default {
    addNewCourse,
    getCourses,
    getOneCourse,
    updateCourse
  };