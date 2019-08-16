const Comics = require('../models/comic');

const getAll = async (req, res) => {
    res.set('Content-Type', 'application/json')
    let comics = await Comics.getAll(req.query);
    if (comics.data && comics.data.length > 0) {
        return res.status(200).send(comics);
    }
    return res.status(comics.response.status).send({
        status: 'error',
        message: 'Error de servicio, intentelo mas tarde',
        code: comics.response.status
    });
};

module.exports = {
    getAll
};
