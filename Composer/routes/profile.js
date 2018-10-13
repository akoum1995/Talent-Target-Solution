let express = require('express');
let mongoose = require('mongoose');
let profile = mongoose.model('profile');
let router = express.Router();
let ObjectId = (require('mongoose').Types.ObjectId);



router.post('/', function(req, res, next) {


        let p = new profile(req.body);
            console.log(req.body);
            profile.findOneAndUpdate(
            {url: req.body.url,jobId:req.body.jobId},
                p,
            {upsert: true, new: true, runValidators: true},
            function (err, pro) {
                if (err){
                    console.error(err);
                    let error = new Error('Internal Server Error');
                    error.status = 500;
                    next(error);
                }else {
                    res.status(201);
                    res.json(pro);
                }

            });



});

router.get('/', function(req, res, next) {
    profile.find(function (err, pls) {
        if (err){
            console.error(err);
            let error = new Error('Internal Server Error');
            error.status = 500;
            next(error);
        }
        res.status(200);
        res.json(pls);
    });

});

router.get('/:id', function(req, res, next) {
    profile.find({'jobId':req.params.id},function (err, pls) {
        if (err){
            console.error(err);
            let error = new Error('Internal Server Error');
            error.status = 500;
            next(error);
        }else {
            res.status(200);
            res.json(pls);
        }

    });
});

router.delete('/:id', function(req, res, next) {
    profile.findOneAndRemove({_id:new ObjectId(req.params.id)},function (err,pls) {
        if (err){
            console.error(err);
            let error1 = new Error('Internal Server Error');
            error1.status = 500;
            next(error1);
        }
        else if (!pls) {
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
