const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/hey', (req, res, next) => {
    res.status(200).send('Hello from node JS');
});

app.listen(3001);