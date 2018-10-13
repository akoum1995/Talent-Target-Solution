var express = require('express');
let mongoose = require('mongoose');
var router = express.Router();
let Profile_bookMark = mongoose.model('profileBkSchema');

//add new bookMark
/* post */
router.post('/',function (req,res) {
    var PBM=new Profile_bookMark(req.body);
    PBM.save(function (err,pbm) {
        if(err)
            res.send(err);
        else
            res.send(pbm);
    });
});

router.get('/', function(req, res, next) {

    Profile_bookMark.find(function (err,PBMS) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!PBMS) {
            res.status(404).send();
            console.log('users')
        }
        else {
            res.json(PBMS);
            console.log('json')
        }

    });
});

/*delete*/
router.delete('/:id',function (req,res) {

    var id=req.params.id;
    Profile_bookMark.findByIdAndRemove(id,function (err,PBMS) {
        if(err)
            res.send(err);
        else
            res.send();
    });

});

module.exports = router;