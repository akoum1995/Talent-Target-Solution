let express = require('express');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
require('./bin/database');
let composer = require("./routes/composer");
let job = require("./routes/job");
let profileLink = require("./routes/profile-link");
let profile = require("./routes/profile");
let bookmark = require("./routes/bookMark_profils");
let reporting = require("./routes/reporting");
let stat = require("./routes/stats");

let app = express();

app.use(logger('dev'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/composer', composer);
app.use('/api/v1/composer/job', job);
app.use('/api/v1/composer/profile-link', profileLink);
app.use('/api/v1/composer/profile', profile);
app.use('/bookMarkP', bookmark);
app.use('/reporting', reporting);
app.use('/stats', stat);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    var error={
        "error":err.message,
        code:err.status
    };
    res.json(error);
});

module.exports = app;
