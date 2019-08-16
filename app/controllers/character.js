const Characters = require('../models/character');

const getAll = async (req, res) => {
    res.set('Content-Type', 'application/json')
    let character = await Characters.getAll(req.query);

    if (character.data) {
        return res.status(character.response.code).send(character);
    }

    return res.status(character.response.status || 500).send({
        status: 'error',
        message: 'Error de servicio, intentelo mas tarde',
        code: character.response.status
    });
};

module.exports = {
    getAll
};
