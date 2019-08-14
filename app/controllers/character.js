const Characters = require('../models/character');

const getAll = async (req, res) => {
    res.set('Content-Type', 'application/json')
    let character = await Characters.getAll(req.query);
    if (character.data && character.data.length > 0) {
        return res.status(200).send(character);
    }
    return res.status(character.response.status).send({
        status: 'error',
        message: 'Error de servicio, intentelo mas tarde',
        code: character.response.status
    });
};

module.exports = {
    getAll
};
