var mongoose = require('mongoose');
var searchEngine = require('../models/search-engine');
var searchTag = require('../models/search-tag');



// database configuration
var mongodb_host="34.242.166.233";
var mongodb_username="helloworld";
var mongodb_password="helloworld!Arbigrine";
var mongodb_db_name="tts_db";
var mongodb_conn_string='mongodb://'+mongodb_username+':'+mongodb_password+'@'+mongodb_host+'/'+mongodb_db_name;


mongoose.set('debug', true);
mongoose.model('search-engine',searchEngine);
mongoose.model('search-tag',searchTag);


  let db = mongoose.connection;

  db.on('connecting', function() {
    console.log('connecting to MongoDB...');
  });

  db.on('error', function(error) {
    console.error('Error in MongoDb connection: ' + error);
    mongoose.disconnect();
  });
  db.on('connected', function() {
    console.log('MongoDB connected!');
  });
  db.once('open', function() {
    console.log('MongoDB connection opened!');
  });
  db.on('reconnected', function () {
    console.log('MongoDB reconnected!');
  });
  db.on('disconnected', function() {
    console.log('MongoDB disconnected!');
    mongoose.connect(mongodb_conn_string, {server:{auto_reconnect:true}});
  });
  mongoose.connect(mongodb_conn_string, {server:{auto_reconnect:true}});
  
process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        process.exit(0);
    });
});