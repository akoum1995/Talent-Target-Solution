var express = require('express');
var mongoose = require('mongoose');
var ObjectId = (require('mongoose').Types.ObjectId);
var searchEngine = mongoose.model('search-engine');

var router = express.Router();


router.get('/', function(req, res, next) {
    searchEngine.find(function (err, engines) {
        if (err){
            console.error(err);
            var error = new Error('Internal Server Error');
            error.status = 500;
            next(error);
        }
        res.status(200);
        res.json(engines);
    });

});

router.get('/:id', function(req, res, next) {
    searchEngine.find({'_id':new ObjectId(req.params.id)},function (err, engines) {
        if (err){
            console.error(err);
            var error = new Error('Internal Server Error');
            error.status = 500;
            next(error);
        }else {
            res.status(200);
            res.json(engines);
        }

    });
});

router.post('/', function(req, res, next) {

    try {
        var engine = new searchEngine(req.body);
        searchEngine.findOneAndUpdate(
            {name: req.body.name},
            engine,
            {upsert: true, new: true, runValidators: true},
            function (err, eng) {
                if (err){
                    console.error(err);
                    var error = new Error('Internal Server Error');
                    error.status = 500;
                    next(error);
                }else {
                    res.status(201);
                    res.json(eng);
                }

            });
    }catch(exp) {
        console.log(exp);
        var err = new Error('Bad Request');
        err.status = 400;
        next(err);
    }


});

router.delete('/:id', function(req, res, next) {
    searchEngine.findOneAndRemove({_id:new ObjectId(req.params.id)},function (err,engine) {
        if (err){
            console.error(err);
            var error1 = new Error('Internal Server Error');
            error1.status = 500;
            next(error1);
        }
        else if (!engine) {
            var error = new Error('Bad Request');
            error.status = 400;
            next(error);
        }
        else {
            res.status(204);
            res.end();
        }

    });


});

module.exports = router;
