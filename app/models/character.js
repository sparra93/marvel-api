const axios = require('axios');

const getAll = async () => {
    return await axios
        .get(`characters`)
        .then(response => response.data.data.results)
        .catch((error) => {
            console.log(error);
        })
};

module.exports = {
    getAll
}