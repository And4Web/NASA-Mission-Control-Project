const parse = require('csv-parse');
const fs = require('fs');

const habitablePlanets = [];

function isHabitable(planet){
  return planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6;
}

fs.createReadStream('kepler_data.csv')
.pipe(parse({
  comment: '#',
  columns: true,
}))
.on('data', (data) => {
  if(isHabitable(data)){
    habitablePlanets.push(data);
  }
})
.on('error', (err) => {
  console.log(err);
})
.on('end', () => {
  console.log(habitablePlanets.map((planet) => {
    return planet['kepler_name'];
  }));
  console.log(`${habitablePlanets.length} Planets with required properties.`);
});


module.exports = {
  planets: habitablePlanets,
};


 //Here our planet data is loaded and parsed with streams. All of this happens asynchronously. We tell Node to process it but we don't wait around it. our module exports the planets before they are loaded. so here we'll see error.
 //We can create a JS promise for our data to load and we can wait for that promise to resolve before any incoming request in our controller.
 
 /*
 const promise = new promise();
 promise.then((resolve, reject) => {
   resolve(42);
 });
 const result = await promise;
 console.log(result);
 */