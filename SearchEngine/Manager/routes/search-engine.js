let express = require('express');
let mongoose = require('mongoose');
let ObjectId = (require('mongoose').Types.ObjectId);
let searchEngine = mongoose.model('search-engine');

let router = express.Router();


router.get('/', function(req, res, next) {
    searchEngine.find(function (err, engines) {
        if (err){
            console.error(err);
            let error = new Error('Internal Server Error');
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
            let error = new Error('Internal Server Error');
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
        let engine = new searchEngine(req.body);
        searchEngine.findOneAndUpdate(
            {name: req.body.name},
            engine,
            {upsert: true, new: true, runValidators: true},
            function (err, eng) {
                if (err){
                    console.error(err);
                    let error = new Error('Internal Server Error');
                    error.status = 500;
                    next(error);
                }else {
                    res.status(201);
                    res.json(eng);
                }

            });
    }catch(exp) {
        console.log(exp);
        let err = new Error('Bad Request');
        err.status = 400;
        next(err);
    }


});

router.delete('/:id', function(req, res, next) {
    searchEngine.findOneAndRemove({_id:new ObjectId(req.params.id)},function (err,engine) {
        if (err){
            console.error(err);
            let error1 = new Error('Internal Server Error');
            error1.status = 500;
            next(error1);
        }
        else if (!engine) {
            let error = new Error('Bad Request');
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
