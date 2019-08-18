const axios = require('axios');

const getAll = async (query = { offset: 0, limit:20 }) => {
    return await axios
        .get(`comics`, { params: query })
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
            return error;
        })
};

const get = async (params, query = { offset: 0, limit:20 }) => {
    return await axios
        .get(`characters/${params.id}/comics`, { params: query })
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
            return error;
        })
};

module.exports = {
    getAll,
    get
}