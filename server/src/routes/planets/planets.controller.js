const planets = require('../../models/planets.model');

//This planet array is the Model here, the data which will be stored in the server. In the model folder we will create model for this i.e. planets.model.js.

function getAllPlanets(req, res){
  return res.status(200).json(planets);
}

//Use return here in the function. Many Exprexx codes don't use it though, but it prevents any locking of the function, watch lesson94 again at 6 minutes.

module.exports = {
  getAllPlanets,
}