require('./app/middleware/axios-interceptor')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./app/routes');

const app = express();
app.use(cors({
    origin: 'https://angular-marvel-app.herokuapp.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));
app.use(bodyParser.json());
routes(app);

app.listen(process.env.PORT || 9000, () => {
    console.log('Started on port ', process.env.PORT || 9000);
});

module.exports = app;
