const express = require('express');
const bodyParser = require('body-parser');
const shell = require('shelljs');

const app = express();
const port = 8000;

app.use(bodyParser.json());

console.log('HI lolkek');
app.post('/payload', (req, res) => {
    const body = req.body;
    // const branch = body.ref;
    console.log('Hello world');

    // if (branch) {
    //     const branchNames = branch.match(/frnt-\d+/g);
    //     const branchName = branchNames && branchNames[0];

    //     console.log(branchName);

    //     shell.exec('./deploy.sh');

    // }
    res.status(200).send({});
});

app.listen(port, () => {
    console.log(`Application is listening on port: ${port}`);
})
