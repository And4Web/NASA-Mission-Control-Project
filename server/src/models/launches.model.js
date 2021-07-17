const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration 2021',
  rocket: 'GSLV-2021',
  launchDate: new Date('July 28, 2021'),
  destination: 'Kepler-442 b',
  customer: ['ISRO', 'IIT-D', 'IIT-B', 'TIFR', 'IISC-Banglore'],
  upcoming: true,
  success: true,

};

launches.set(launch.flightNumber, launch);

//launches.get(100);

module.exports = {
  launches,
};