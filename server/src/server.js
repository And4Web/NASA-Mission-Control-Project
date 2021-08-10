
const http = require('http');
const app = require('./app');
const {loadPlanetsData} = require('./models/planets.model');
const mongoose = require('mongoose');

const PORT = process.env.PORT ||8000;

const MONGO_URL = 'mongodb+srv://nasa-api:e2dKPwdkUl5gHYHt@nasacluster.it8mq.mongodb.net/nasa?retryWrites=true&w=majority';

const server = http.createServer(app);

mongoose.connection.once('open', ()=> {
  console.log('MongoDB connection Ready.');
});

mongoose.connection.on('Error', (err)=> {
  console.error(err);
});

async function startServer(){

  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  
  await loadPlanetsData();
  
  server.listen(PORT, () => {
    console.log(`Listening at Port: ${PORT}.`);
  });
}

startServer();