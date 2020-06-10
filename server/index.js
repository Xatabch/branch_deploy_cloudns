const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.post('/githook', (req, res) => {
    console.log(req.body);
    res.status(200).send();
});

app.listen(port, () => {
    console.log(`Application is listening on port: ${port}`);
})