// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae',
});

export default api;