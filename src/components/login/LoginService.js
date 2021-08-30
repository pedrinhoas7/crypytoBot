const axios = require('axios');

const api = axios.create({
    baseURL: "https://api.cobli.co",
});


export default function loginService(data) {
    api.get(`/robots`)
      .then(res => {
        return res
      })
}