
const path = '/api';

module.exports = (app) => {
    app.use(path, require('../routes/character'));
    app.use('*', function (req, res) {
        res.status(404).json({ err: "Path " + req.originalUrl + " does not exist" });
    });
};