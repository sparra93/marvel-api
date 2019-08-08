const axios = require('axios');
const PUBLIC_KEY = '2e9009d2b1325778eaec9c5c10d90fb1';
const TS = 1234;
const HASH = '93f7b92bfa1ac2817d7d1644f75c81ef';

axios.defaults.params = {};
axios.interceptors.request.use(config => {
    const endpoint = `https://gateway.marvel.com/v1/public/${config.url}?apikey=${PUBLIC_KEY}&ts=${TS}&hash=${HASH}`;
    config.url = endpoint;
    return config;
}, function (err) {
    return Promise.reject(err);
});