let express = require('express');
let mongoose = require('mongoose');
let axios = require('axios');
let ObjectId = (require('mongoose').Types.ObjectId);
let ws=require('socket.io-client');

let searchEngine = mongoose.model('search-engine');
let job = mongoose.model('job');
let profileLink = mongoose.model('profile-link');

let router = express.Router();
let profile = mongoose.model('profile');

router.post('/start',async function(req, res, next) {
    res.status(200);
    res.end();
    let idjob=req.body.idjob;
    await job.update({ _id: new ObjectId(idjob) },{ $set: { state: 'running' }});
    var socket =ws("http://127.0.0.1:8009",{autoConnect: true,reconnection:false,cookie: false,forceNew:false});
    socket.on('connect',  () => {
        socket.emit('start',
            {   "jobid":idjob,
                "getJob":"http://127.0.0.1:3003/api/v1/composer/job/"+idjob,
                "getUrls":"http://127.0.0.1:3003/api/v1/composer/profile-link/byjob/"+idjob+"/false",
                "updateUrl":"http://127.0.0.1:3003/api/v1/composer/profile-link/",
                "updateJob":"http://127.0.0.1:3003/api/v1/composer/job/uptade/state/"+idjob+"/",
                "addProfil":"http://127.0.0.1:3003/api/v1/composer/profile"

            });
    })

});
router.post('/',async function(req, res, next) {
    let countries =req.body.countries;
    let modules =req.body.modules;
    let name =req.body.name;
    let tags =req.body.tags;
    let startDate= null;
    let state="created";


    try {
        let jobToCreate = new job({
            name:name ,
            modules:modules,
            tags:tags ,
            countries:countries ,
            start_date:new Date() ,
            state: state
        });
        let createdjob = await job.findOneAndUpdate({name: name},jobToCreate,{upsert: true, new: true, runValidators: true});
        let createdjobId=createdjob.toObject()._id;
        let scrapModuleUrls=[];
        let modulesToScrap=[];
        for (let i = 0; i < modules.length; i++) {
            let mts=await axios.get("http://localhost:3000/api/v1/modules/manager/"+modules[i]);
            modulesToScrap.push(mts.data[0]);
            scrapModuleUrls.push(mts.data[0].urlScrap);
            let searchEngines = await searchEngine.find();
            for (let j = 0; j < searchEngines.length; j++) {
                let params={
                    "countries":countries,
                    "tags":tags,
                    "url":scrapModuleUrls[i],
                    "account":searchEngines[j].accounts
                };

                let URLS=await axios.post(searchEngines[j].url,params);
                let URLStoAdd=URLS.data[2]["URLs"];
                for (let x = 0; x < URLStoAdd.length; x++) {
                    addProfileLinks(URLStoAdd[x],createdjobId,searchEngines[j].toObject()['_id'],false);
                }
            }

        }
        res.status(200);
        res.end();
    }
    catch (err){
        console.error(err);
        let error = new Error('Bad Request');
        error.status = 400;
    }
});
function addProfileLinks(url,jobId,search_engine,treated) {
    let pl={
        "url":url,
        "jobId":jobId,
        "search_engine":search_engine,
        "treated":treated

    };
    profileLink.findOneAndUpdate(
        {url: url,jobId:jobId},
        pl,
        {upsert: true, new: true, runValidators: true},
        function (err, j) {
            if (err){
                console.error(err);
                let error = new Error('Internal Server Error');
                error.status = 500;
                return error}
        }

    )
}
module.exports = router;


