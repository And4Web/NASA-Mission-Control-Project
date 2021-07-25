const {getAllLaunches, addNewLaunch} = require('../../models/launches.model');

function httpGetAllLaunches(req, res){
  return res.status(200).json(getAllLaunches());
};

function httpAddNewLaunch(req, res){
  const launch = req.body;

  if(!launch.mission || !launch.rocket || !launch.target || !launch.launchDate){
    return res.status(400).json({
      error: 'Missing one of the required property.'
    });
  }
  
  launch.launchDate = new Date(launch.launchDate);

  if(isNaN(launch.launchDate)){
    return res.status(400).json({
      error: 'Invalid Date.'
    });
  }
 
  /*Here another condition can be used like: 
  launch.launchDate.toString() === 'invalid date'
  */
  addNewLaunch(launch);
  return res.status(201).json(launch);
}

function httpAbortLaunch(req, res){


  //if Launch does not exist:
  return res.status(404).json({
    error: 'Launch not found.',
  });

  //if Launch exists:
  return res.status(200).json(aborted);
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
};