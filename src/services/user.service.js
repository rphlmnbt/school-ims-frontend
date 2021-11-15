import axios from 'axios'

const API_URL =  'http://localhost:8080/users/'


const login = (email, password) => {
    return axios
      .post(API_URL, {
        email,
        password,
      })
      .then((response) => {
        if (response.data.userID) {
          localStorage.setItem('userID', JSON.stringify(response.data.userID));
          localStorage.setItem('userRole', JSON.stringify(response.data.userRole));
        } 
        return response.data;
      });
  };


const getCurrentUserID = () => {
  return JSON.parse(localStorage.getItem('userID'));
};

const getCurrentUserRole = () => {
    return JSON.parse(localStorage.getItem('userRole'));
  };

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
  getCurrentUserID,
  getCurrentUserRole
};