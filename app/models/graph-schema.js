var mongoose = require('mongoose');
var db = require('./config.js')
// mongoURI = 'mongodb://localhost:27017/test';

//
// //creates a schema for all data to be put in the database
var graphSchema = mongoose.Schema({
  //location will be a state -- optional
  location: String,
  //income will need to be part of every query
  income: { type:Number, required: true },
  //gender optional
  gender: String,
  //occupation optional
  occupation: String,
  //race optional
  race: String
});

var Graph = mongoose.model('Graph', graphSchema);
// mongoose.connect(mongoURI)

module.exports = Graph;
