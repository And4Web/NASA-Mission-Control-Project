const launchesDatabase = require('./launch.mongo');

const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration 2021',
  rocket: 'GSLV-2021',
  launchDate: new Date('July 28, 2021'),
  target: 'Kepler-442 b',
  //customers: ['ISRO', 'IIT-D', 'IIT-B', 'TIFR', 'IISC-Banglore'],
  //upcoming: true,
  //success: true,

};

saveLaunch(launch);

//launches.set(launch.flightNumber, launch);

//launches.get(100);

function existsLaunchById(launchId){
  return launches.has(launchId);
}

/*function getAllLaunches(){
  return Array.from(launches.values());
}*/

async function getAllLaunches(){
  return await launchesDatabase.find({}, {
    '_id': 0, '__v': 0,
  });
}

async function saveLaunch(launch){
  await launchesDatabase.updateOne({flightNumber: launch.flightNumber,
  }, launch, {
    upsert: true,
  });
}

function addNewLaunch(launch){
  latestFlightNumber++;
  launches.set(latestFlightNumber, Object.assign(launch, {
    flightNumber: latestFlightNumber,
    customers: ['ISRO', 'IIT-D', 'IIT-B', 'TIFR', 'IISC-Banglore'],
    upcoming: true,
    success: true,
  })
  );
}

function abortLaunchById(launchId){
  //launches.delete(launchId);
  //Common way with internet Application in the era of Big Data, We won't remove Launch data completely, instead we will mark the data as aborted:
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
  existsLaunchById,
  abortLaunchById,
};