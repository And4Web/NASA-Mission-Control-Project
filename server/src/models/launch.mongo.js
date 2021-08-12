const mongoose = require('mongoose');
const launchesSchema = new mongoose.Schema({
  flightNumber: {
    type: Number,
    required: true,
  },
  launchDate: {
    type: Date,
    required: true,

  },
  mission: {
    type: String,
    required: true,
  },
  rocket: {
    type: String,
    required: true,

  },
  target: {
    /*type: mongoose.ObjectId,
    ref: 'Planet'*/
    type: String,
    required: true,
  },
  upcoming: {
    type: Boolean,
    required: true,
  },
  success: {
    type: Boolean,
    required: true,
    default: true,
  },
  customer: [String],

});

module.exports = mongoose.model('Launch', launchesSchema);