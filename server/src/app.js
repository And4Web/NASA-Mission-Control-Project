//In this app.js file, we are separating the "server functionality" of code from Express code from server.js, to make our code more organised.

//In this file we'll have all our Express codes.


const express = require('express');
const cors = require('cors');
const planetsRouter = require('./routes/planets/planets.router');

const app = express();

//chain of middlewares:
app.use(cors({
  origin: 'http://localhost:3000',
}));//CORS middleware to make cross-origin requests.
app.use(express.json());
app.use(planetsRouter);

module.exports = app;