const axios = require('axios');

const api = axios.create({
    baseURL: 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js'
})

module.exports = api;