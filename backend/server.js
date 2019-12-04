const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3001 || process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const usersArr = [];

app.post('/mypost', (req, res, next) => {
    usersArr.push(req.body.post);
    res.status(200).send('This is a Server response to request at /mypost');
});

app.listen(port, console.log(`Listening on port ${port}`));