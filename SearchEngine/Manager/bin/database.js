let mongoose = require('mongoose');
let searchEngine = require('../models/search-engine');



// database configuration
let mongodb_host="34.242.166.233";
let mongodb_username="helloworld";
let mongodb_password="helloworld!Arbigrine";
let mongodb_db_name="tts_db";
let mongodb_conn_string='mongodb://'+mongodb_username+':'+mongodb_password+'@'+mongodb_host+'/'+mongodb_db_name;


mongoose.set('debug', true);
mongoose.model('search-engine',searchEngine);


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