//This file has server functionality of code. Express codes are in the app.js file.

const app = require('./app');
const http = require('http');

const PORT = process.env.PORT ||8000;

const server = http.createServer(app);
 

server.listen(PORT, () => {
  console.log(`Listening at Port: ${PORT}.`);
})
