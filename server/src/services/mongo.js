const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://nasa-api:e2dKPwdkUl5gHYHt@nasacluster.it8mq.mongodb.net/nasa?retryWrites=true&w=majority';

mongoose.connection.once('open', ()=> {
  console.log('MongoDB connection Ready.');
});

mongoose.connection.on('Error', (err)=> {
  console.error(err);
});

async function mongoConnect(){
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
}

async function mongoDisconnect(){
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
}