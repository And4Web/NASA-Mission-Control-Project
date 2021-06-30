const express = require('express');

const planetsController = require('./planets.controller');
/*we can write the above constant using destructuring too: 

const {
  getAllPlanets,
} = require('./planets.controller');

This is a better way because we can use multiple functions from the same module.*/

const planetsRouter = express.Router();
planetsRouter.get('/planets', getAllPlanets);

module.exports = planetsRouter;