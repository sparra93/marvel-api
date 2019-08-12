const Characters = require('../models/character');

const getAll = async (req, res) => {
    res.set('Content-Type', 'application/json')
    let character = await Characters.getAll(req.query);
    if (character && character.data.length > 0) {
        return res.status(200).send(character);
    }
    return res.status(404).send({
        status: 'error',
        message: 'no characters found',
        code: 404,
    });
};

module.exports = {
    getAll
};
