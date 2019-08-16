
const path = '/api';

module.exports = (app) => {
    app.use(path, require('./character'));
    app.use(path, require('./comic'));
    app.use('*', function (req, res) {
        res.status(404).json({ err: "Path " + req.originalUrl + " does not exist" });
    });
};