const axios = require('axios');

const getAll = async (query = { offset: 0, limit }) => {
    return await axios
        .get(`characters`, { params: query })
        .then(response => {
            const { offset, limit, total, count, results: data } = response.data.data
            return {
                results: {
                    offset,
                    limit,
                    total,
                    count
                },
                data
            }
        })
        .catch((error) => {
            console.log(error);
        })
};

module.exports = {
    getAll
}