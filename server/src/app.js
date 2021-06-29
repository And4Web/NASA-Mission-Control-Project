//In this app.js file, we are separating the "server functionality" of code from Express code from server.js, to make our code more organised.

//In this file we'll have all our Express codes.


const express = require('express');
const planetsRouter = require('./routes/planets/planets.router');

const app = express();

app.use(express.json());
app.use(planetsRouter);

module.exports = app;