import axios from 'axios'
import studentService from './student.service';

const API_URL =  'http://localhost:8080/users/'


const login = (email, password) => {
    return axios
      .post(API_URL, {
        email,
        password,
      })
      .then((response) => {
        if (response.data.userID) {
          localStorage.setItem('user', JSON.stringify(response.data));
        } 
        return response.data;
      });
  };

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
  };

  const updateUser = (
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
    userID   ) => {
  return axios.put(API_URL + `${userID}`+
    `?email=${email}`+
    `&password=${password}`+
    `&userRole=${userRole}`+
    `&firstName=${firstName}`+
    `&lastName=${lastName}`+
    `&gender=${gender}`+
    `&birthDate=${birthDate}`+
    `&homeAddress=${homeAddress}`+
    `&contactNumber=${contactNumber}`+
    `&civilStatus=${civilStatus}`)
  };

const getCurrentUserID = () => {
  return JSON.parse(localStorage.getItem('user')).userID;
};

const getCurrentUserRole = () => {
    return JSON.parse(localStorage.getItem('user')).userRole;
  };

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
  updateUser,
  getCurrentUser,
  getCurrentUserID,
  getCurrentUserRole
};