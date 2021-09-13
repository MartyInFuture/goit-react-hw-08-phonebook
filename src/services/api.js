import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export default {
  add(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  remove() {
    axios.defaults.headers.common.Authorization = '';
  },
};
