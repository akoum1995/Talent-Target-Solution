let express = require('express');
let mongoose = require('mongoose');
let ObjectId = (require('mongoose').Types.ObjectId);
let profileLink = mongoose.model('profile-link');
let router = express.Router();


router.get('/', function(req, res, next) {
    profileLink.find(function (err, pls) {
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
router.get('/byjob/:id/:treated', function(req, res, next) {
    let query;
    query={'jobId':req.params.id,"treated":req.params.treated};

    profileLink.find(query,function (err, pls) {
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
router.get('/nbr/:id', function(req, res, next) {
    let query;
    var choices = ["true", "false"];
    if(choices.indexOf(req.query.treated) > -1){
        query={'jobId':req.params.id,"treated":req.query.treated};
    }else{
        query={'jobId':req.params.id};
    }
    profileLink.count(query,function (err, pls) {
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
router.put('/:id/:treated', function(req, res, next) {
    query={'_id':new ObjectId(req.params.id)};
    profileLink.update(query, { $set: { treated: req.params.treated }},
        function (err) {
                    if (err){
                        console.error(err);
                        let error = new Error('Internal Server Error');
                        error.status = 500;
                        return error
                    }
            res.status(200);
            res.json("ok");
                });
});
router.get('/:id', function(req, res, next) {
    profileLink.find({'_id':new ObjectId(req.params.id)},function (err, pls) {
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
    profileLink.findOneAndRemove({_id:new ObjectId(req.params.id)},function (err,pls) {
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
