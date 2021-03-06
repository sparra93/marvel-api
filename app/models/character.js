const axios = require('axios');

const getAll = async (query = { offset: 0, limit:20 }) => {
    return await axios
        .get(`characters`, { params: query })
        .then(rs => {
            const { code, status } = rs.data;
            const { offset, limit, total, count, results: data } = rs.data.data

            return {
                results: {
                    offset,
                    limit,
                    total,
                    count
                },
                data,
                response: {
                    code,
                    status
                }
            }
        })
        .catch((error) => {
            return error;
        })
};

module.exports = {
    getAll
}