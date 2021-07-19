const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration 2021',
  rocket: 'GSLV-2021',
  launchDate: new Date('July 28, 2021'),
  destination: 'Kepler-442 b',
  //customer: ['ISRO', 'IIT-D', 'IIT-B', 'TIFR', 'IISC-Banglore'],
  //upcoming: true,
  //success: true,

};

launches.set(launch.flightNumber, launch);

//launches.get(100);

function getAllLaunches(){
  return Array.from(launches.values());
}

function addNewLaunch(launch){
  latestFlightNumber++;
  launches.set(latestFlightNumber, Object.assign(launch, {
    flightNumber: latestFlightNumber,
    customer: ['ISRO', 'IIT-D', 'IIT-B', 'TIFR', 'IISC-Banglore'],
    upcoming: true,
    success: true,
  })
  );
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
};