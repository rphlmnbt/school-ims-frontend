import axios from 'axios'

const API_URL =  'http://localhost:8080/admin/';


const getAdmins = () => {
    return axios.get(API_URL)
  };

const getOneAdmin = (adminID) => {
    return axios.get(API_URL + `${adminID}`)
  };


export default {
    getAdmins,
    getOneAdmin
  };