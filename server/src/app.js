const path = require('path');
const express = require('express');
const cors = require('cors');
const planetsRouter = require('./routes/planets/planets.router');

const app = express();

//chain of middlewares:
app.use(cors({
  origin: 'http://localhost:3000',
}));//CORS middleware to make cross-origin requests.
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(planetsRouter);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;