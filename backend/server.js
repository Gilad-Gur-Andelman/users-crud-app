const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3001 || process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const retJson = { "usersArr": [] };

app.post('/mypost', (req, res, next) => {
    const user = {
        "userName": req.body.post,
        "email": null,
        "password": null
    }
    retJson.usersArr.push(user);
    console.log(retJson.usersArr);

    res.status(200).send(retJson);
});

app.listen(port, console.log(`Listening on port ${port}`));