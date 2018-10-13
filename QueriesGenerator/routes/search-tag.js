var express = require('express');
var mongoose = require('mongoose');

var searchTag = mongoose.model('search-tag');

var router = express.Router();


router.get('/', function(req, res, next) {
    searchTag.find(function (err, tags) {
            if (err){
                console.error(err);
                var error = new Error('Internal Server Error');
                error.status = 500;
                next(error);
            }
            res.status(200);
            res.json(tags);
        });

});

router.get('/:tag', function(req, res, next) {
    searchTag.find({tag: new RegExp(escapeRegExp(req.params.tag),'gi')},function (err, tag) {
        if (err){
            console.error(err);
            var error = new Error('Internal Server Error');
            error.status = 500;
            next(error);
        }else {
            res.status(200);
            res.json(tag);
        }

    });
});

router.post('/', function(req, res, next) {

    if (req.body.tag)
    {
        var tag = new searchTag({ tag:req.body.tag });
        searchTag.findOneAndUpdate(
            {tag: req.body.tag},
            tag,
            {upsert: true, new: true, runValidators: true},
            function (err, tag) {
                if (err){
                    console.error(err);
                    var error = new Error('Internal Server Error');
                    error.status = 500;
                    next(error);
                }else {
                    res.status(201);
                    res.json(tag);
                }

            });
    }else{
        var err = new Error('Bad Request');
        err.status = 400;
        next(err);
    }


});

router.delete('/:tag', function(req, res, next) {
    searchTag.findOneAndRemove({tag:req.params.tag},function (err,tag) {
            if (err){
                console.error(err);
                var error1 = new Error('Internal Server Error');
                error1.status = 500;
                next(error1);
            }
            else if (!tag) {
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

function escapeRegExp(string){
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

module.exports = router;
