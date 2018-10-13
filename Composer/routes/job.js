let express = require('express');
let mongoose = require('mongoose');
let ObjectId = (require('mongoose').Types.ObjectId);
let job = mongoose.model('job');
let profileLink = mongoose.model('profile-link');

let router = express.Router();





router.get('/', async function(req, res, next) {

    try {
        let jobs = await job.find();
        let jobwn=[];
        for (let i = 0; i < jobs.length; i++) {

           let nbr= await profileLink.count({'jobId':jobs[i].toObject()._id});
           let j=jobs[i].toObject();
           j["profiles_number"]=nbr;
           jobwn.push(j);
        }
        res.json(jobwn);
        res.status(200);
    }
    catch(err) {
        console.error(err);
        let error = new Error('Internal Server Error');
        error.status = 500;
        next(error);
    }


});

router.put('/uptade/state/:id/:state', function(req, res, next) {
    try {
    console.log(req.params.id);
    console.log(req.params.state);
    let idJob=req.params.id;
    let stateJob="";
    switch (req.params.state) {
        case "0":
            stateJob = "created";
            break;
        case "1":
            stateJob = "running";
            break;
        case "2":
            stateJob = "blocked";
            break;
        case "3":
            stateJob = "terminated";
            break;
    }
    job.update({ _id: new ObjectId(idJob) },{ $set: { state: stateJob }},function (err, jobs) {

        if (err){
            console.error(err);
            let error = new Error('Internal Server Error');
            error.status = 500;
            next(error);
        }
        res.status(200);
        res.json(jobs);
    });
    }catch(err) {
        console.error(err);
        let error = new Error('Internal Server Error');
        error.status = 500;
        next(error);
    }
});



router.get('/:id', function(req, res, next) {

    try {
        job.find({'_id':new ObjectId(req.params.id)},function (err, jobs) {
            if (err){
                console.error(err);
                let error = new Error('Internal Server Error');
                error.status = 500;
                next(error);
            }else {
                res.status(200);
                res.json(jobs);
            }

        });
    }
    catch(err) {
        job.find({'name':req.params.id},function (err, jobs) {
            if (err){
                console.error(err);
                let error = new Error('Internal Server Error');
                error.status = 500;
                next(error);
            }else {
                res.status(200);
                res.json(jobs);
            }

        });
    }

});

router.delete('/:id', function(req, res, next) {
    job.findOneAndRemove({_id:new ObjectId(req.params.id)},function (err,jobs) {
        if (err){
            console.error(err);
            let error1 = new Error('Internal Server Error');
            error1.status = 500;
            next(error1);
        }
        else if (!jobs) {
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
