var express = require('express'),
	mongoose = require('mongoose'),
	nconf = require('nconf');

// Grab JSON config files in this order:
//   1. Arguments passed to node
//   2. production.js
//   3. development.js
nconf.argv().file('prod','./config/production.json' ).file('dev','./config/development.json' );

mongoose.connect("mongodb://" + nconf.get('db') 
	+ ":" + nconf.get('port') 
	+ "/" + nconf.get('table'));

var db = mongoose.connection;

db.on('error', function () {
	console.warn('---- tried connecting to db at '+ nconf.get('db') 
	+ ":" + nconf.get('port') 
	+ "/" + nconf.get('table'));
  throw new Error('unable to connect to database at ' + conf.get('db'));
});

// var db = mongoose.connection;
// var collection = db.collection('documents');
// collection.insert ({John : 10}, function (err, result) {
//     console.log ('db.js: insert into db' );
// });
console.log('----- Load DB at ' + nconf.get('db') 
	+ ":" + nconf.get('port') 
	+ "/" + nconf.get('table') + ': done');

module.exports = db;
