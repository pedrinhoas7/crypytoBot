const axios = require('axios');

const api = axios.create({
  baseURL: "http://localhost:80",
});

export default api;