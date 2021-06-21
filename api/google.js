const axios = require('axios');

const api = axios.create({
    baseURL: 'hhttps://apis.google.com/js/platform.js'
})

module.exports = api;