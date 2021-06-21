const axios = require('axios');

const api = axios.create({
    baseURL: 'https://login.microsoftonline.com/common'
})

const config = {
    auth: {
        clientId: "12d77c73-d09d-406a-3asd-3d4e576f7d9b",
        authority: "https://login.microsoftonline.com/common",
        clientSecret: ""
    },
    system: {
        loggerOptions: {
            loggerCallback(loglevel, message, containsPii) {
                console.log(message);
            },
            piiLoggingEnabled: false,
            logLevel: msal.LogLevel.Verbose,
        }
    }
};

module.exports = api;