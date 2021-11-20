import axios from 'axios'

const API_URL =  'http://localhost:8080/activities/';

const addNewActivity = (
     activityName,  
     activityType,  
     studentScore,  
     totalScore,
     studentID,
     professorID,
     subjectID
    ) => {
return axios.post(API_URL 
  + `?studentID=${studentID}`
  + `&professorID=${professorID}`
  + `&subjectID=${subjectID}`, {
    activityName,  
     activityType,  
     studentScore,  
     totalScore
}).then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
};


const getActivities = () => {
    return axios.get(API_URL)
  };

const getOneActivity = (activityID) => {
    return axios.get(API_URL + `${activityID}`)
  };

const updateActivity = (
  activityType,
    activityName,  
    studentScore,  
    totalScore,
    activityID,
     studentID,     
     subjectID,
     professorID
    ) => {
  return axios.put(API_URL + `${activityID}` +
  `?activityName=${activityName}` +
  `&activityType=${activityType}` +
  `&studentScore=${studentScore}` +
  `&totalScore=${totalScore}` +
  `&studentID=${studentID}` +
  `&professorID=${professorID}` +
  `&subjectID=${subjectID}`)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
  };



export default {
    addNewActivity,
    getActivities,
    getOneActivity,
    updateActivity
  };