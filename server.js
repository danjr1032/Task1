const express = require('express');
const cors = require ('cors');
const incomeRouter = require('../Account/routes/incomeRoute');
const Expendrouter = require('../Account/routes/expendRoute');
const {checkName, checkIncome} = require ('../Account/middleware/Auth');

const server = express();

//configuration of cors
const corsOptions = {
    "origin": "http://localhost:5500",
    "method": "POST, PATCH, PUT, DELETE",
    "preflightContinue": false,
    "optionSuccessStatus": 204
};


server.use(express.json());
server.use(checkName);
server.use(checkIncome);

server.use('/', incomeRouter);

server.use('/', Expendrouter);

const port = 5500;

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
