import axios from 'axios'

const API_URL =  'http://localhost:8080/activities/';

const addNewActivity = (
     activityName,  
     activityType,  
     studentScore,  
     totalScore
    ) => {
return axios.post(API_URL, {
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

const updatActivity = (
    activityName,  
    activityType,  
    studentScore,  
    totalScore,
    activityID
    ) => {
  return axios.put(API_URL + `${activityID}` +
  `?activityName=${activityName}` +
 ` &activityType=${activityType}` +
 ` &studentScore=${studentScore}` +
  `&totalScore=${totalScore}`);
  };



export default {
    addNewActivity,
    getActivities,
    getOneActivity,
    updatActivity
  };