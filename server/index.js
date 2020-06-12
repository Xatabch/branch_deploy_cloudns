const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

app.use(bodyParser.json());

console.log('test-frnt-25');

app.post('/payload', (req, res) => {
    console.log(req.body.ref.match(/frnt-\d+/g)[0]);
    res.status(200).send({});
});

app.listen(port, () => {
    console.log(`Application is listening on port: ${port}`);
})