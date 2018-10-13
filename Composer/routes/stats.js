var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');

let Profils = mongoose.model('profile');
let Statistics = mongoose.model('statistics');
var MultiGeocoder = require('multi-geocoder'),
    geocoder = new MultiGeocoder({ provider: 'yandex-cache', coordorder: 'latlong' });

router.get('/getAllProfiles', function(req, res, next) {
    Profils.find(function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);

        }
        else
        {
            res.json(profils);
        }

    });
});
router.get('/', function(req, res, next) {
    Profils.find().count(function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            console.log('profils not found')
            res.status(404).send();

        }
        else
        {
            res.json(profils);
        }
    });
});
router.get('/StatTun',function (req, res, next) {
    Profils.find({ nationalty: { $regex: /Tunisie/ } }).count(function (err, profils) {
        if(err) {
            res.send(err);
            console.log('err')
        }
        if(!profils) {
            console.log('profils not found');
            res.status(404).send();

        }
        else
        {
            res.json(profils);
        }
    });
});
router.get('/StatInt',function (req, res, next) {
    Profils.find({ nationalty: { $not: /Tunisie/ } }).count(function (err, profils) {
        if(err) {
            res.send(err);
            console.log('err')
        }
        if(!profils) {
            console.log('profils not found');
            res.status(404).send();

        }
        else
        {
            res.json(profils);
        }
    });
});
router.get('/StatViadeo',function (req, res, next) {
    Profils.find({ url: { $regex: /viadeo/ } }).count(function (err, profils) {
        if(err) {
            res.send(err);
            console.log('err')
        }
        if(!profils) {
            console.log('profils not found');
            res.status(404).send();

        }
        else
        {
            res.json(profils);
        }
    });
});
router.get('/StatLinkedin',function (req, res, next) {
    Profils.find({ url: { $regex: /linkedin/ } }).count(function (err, profils) {
        if(err) {
            res.send(err);
            console.log('err')
        }
        if(!profils) {
            res.json(0);

        }
        else
        {
            res.json(profils);
        }
    });
});
router.get('/StatDoyoubuzz',function (req, res, next) {
    Profils.find({ url: { $regex: /doyoubuzz/ } }).count(function (err, profils) {
        if(err) {
            res.send(err);
            console.log('err')
        }
        if(!profils) {
            res.json(0);

        }
        else
        {
            res.json(profils);
        }
    });
});
router.get('/StatByFunctionBIandIntegraterTunisian', function(req, res, next) {
    Profils.find({'$and':[{"$or": [
                { Domain: { $regex: /intégrateur/ } },
                { Domain: { $regex: /Intégrateur/ } },
                { Domain: { $regex: /Integrateur/ } },
                { Domain: { $regex: /integrateur/ } },
                { Domain: { $regex: /BI/ } },
                { Domain: { $regex: /bi/ } },
                { Domain: { $regex: /ingénieur/ } },
                { Domain: { $regex: /Ingénieur/ } },
                { Domain: { $regex: /ingenieur/ } },
                { Domain: { $regex: /Ingenieur/ } }]},
            { nationalty: { $regex: /Tunisie/ }}
        ]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            res.json(profils.length);
        }

    });
});
router.get('/StatByFunctionBIandIntegraterInternational', function(req, res, next) {
    Profils.find({'$and':[{"$or": [
                { Domain: { $regex: /intégrateur/ } },
                { Domain: { $regex: /Intégrateur/ } },
                { Domain: { $regex: /Integrateur/ } },
                { Domain: { $regex: /integrateur/ } },
                { Domain: { $regex: /BI/ } },
                { Domain: { $regex: /bi/ } },
                { Domain: { $regex: /ingénieur/ } },
                { Domain: { $regex: /Ingénieur/ } },
                { Domain: { $regex: /ingenieur/ } },
                { Domain: { $regex: /Ingenieur/ } }]},
            { nationalty: { $not: /Tunisie/ }}
        ]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            res.json(profils.length);
        }

    });
});
router.get('/StatByFunctionDevelopperInternational', function(req, res, next) {
    Profils.find({'$and':[{"$or": [
                { Domain: { $regex: /Développeur/ } },
                { Domain: { $regex: /développeur/ } },
                { Domain: { $regex: /developpeur/ } },
                { Domain: { $regex: /Developpeur/ } },
                { Domain: { $regex: /Webmaster/ } },
                { Domain: { $regex: /webmaster/ } },
                { Domain: { $regex: /web/ } },
                { Domain: { $regex: /Web/ } }]},
            { nationalty: { $not: /Tunisie/ }}
        ]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            res.json(profils.length);
        }

    });
});
router.get('/StatByFunctionDevelopperTunisian', function(req, res, next) {
    Profils.find({'$and':[{"$or": [
                { Domain: { $regex: /Développeur/ } },
                { Domain: { $regex: /développeur/ } },
                { Domain: { $regex: /developpeur/ } },
                { Domain: { $regex: /Developpeur/ } },
                { Domain: { $regex: /Webmaster/ } },
                { Domain: { $regex: /webmaster/ } },
                { Domain: { $regex: /web/ } },
                { Domain: { $regex: /Web/ } }]},
            { nationalty: { $regex: /Tunisie/ }}
        ]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            res.json(profils.length);
        }

    });
});
router.get('/StatByFunctionConsultantInternational', function(req, res, next) {
    Profils.find({'$and':[{"$or": [
                { Domain: { $regex: /Consultant/ } },
                { Domain: { $regex: /consultant/ } }]},
            { nationalty: { $not: /Tunisie/ }}
        ]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            res.json(profils.length);
        }
    });
});
router.get('/StatByFunctionConsultantTunisian', function(req, res, next) {
    Profils.find({'$and':[{"$or": [
                { Domain: { $regex: /Consultant/ } },
                { Domain: { $regex: /consultant/ } }]},
            { nationalty: { $regex: /Tunisie/ }}
        ]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            res.json(profils.length);
        }

    });
});
router.get('/nbrIngBi', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /BI/ } },
            { Domain: { $regex: /bi/ } },
            { Domain: { $regex: /ingénieur/ } },
            { Domain: { $regex: /Ingénieur/ } },
            { Domain: { $regex: /ingenieur/ } },
            { Domain: { $regex: /Ingenieur/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            res.json(profils.length);
        }

    });
});
router.get('/nbrIntWeb', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /intégrateur/ } },
            { Domain: { $regex: /Intégrateur/ } },
            { Domain: { $regex: /Integrateur/ } },
            { Domain: { $regex: /integrateur/ } },
            { Domain: { $regex: /Webmaster/ } },
            { Domain: { $regex: /webmaster/ } },
            { Domain: { $regex: /web/ } },
            { Domain: { $regex: /Web/ } },
            { Domain: { $regex: /WEB/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            res.json(profils.length);
        }

    });
});
router.get('/nbrDevWeb', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /intégrateur/ } },
            { Domain: { $regex: /Intégrateur/ } },
            { Domain: { $regex: /Integrateur/ } },
            { Domain: { $regex: /integrateur/ } },
            { Domain: { $regex: /Webmaster/ } },
            { Domain: { $regex: /webmaster/ } },
            { Domain: { $regex: /web/ } },
            { Domain: { $regex: /Web/ } },
            { Domain: { $regex: /WEB/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            res.json(profils.length);
        }

    });
});
router.get('/nbrDevMobile', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /Développeur/ } },
            { Domain: { $regex: /développeur/ } },
            { Domain: { $regex: /developpeur/ } },
            { Domain: { $regex: /Developpeur/ } },
            { Domain: { $regex: /mobile/ } },
            { Domain: { $regex: /Mobile/ } },
            { Domain: { $regex: /MOBILE/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            res.json(profils.length);
        }

    });
});
router.get('/nbrIntDonnees', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /intégrateur/ } },
            { Domain: { $regex: /Intégrateur/ } },
            { Domain: { $regex: /Integrateur/ } },
            { Domain: { $regex: /integrateur/ } },
            { Domain: { $regex: /données/ } },
            { Domain: { $regex: /Données/ } },
            { Domain: { $regex: /donnees/ } },
            { Domain: { $regex: /Donnees/ } },
            { Domain: { $regex: /Donnée/ } },
            { Domain: { $regex: /donnée/ } },
            { Domain: { $regex: /donnee/ } },
            { Domain: { $regex: /Donnee/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            res.json(profils.length);
        }

    });
});
router.get('/nbrConsItDigital', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /Consultant/ } },
            { Domain: { $regex: /consultant/ } },
            { Domain: { $regex: /It/ } },
            { Domain: { $regex: /IT/ } },
            { Domain: { $regex: /it/ } },
            { Domain: { $regex: /Digital/ } },
            { Domain: { $regex: /digital/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            res.json(profils.length);
        }

    });
});
router.get('/nbrConsManagement', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /Consultant/ } },
            { Domain: { $regex: /consultant/ } },
            { Domain: { $regex: /Management/ } },
            { Domain: { $regex: /management/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            res.json(profils.length);
        }

    });
});
router.get('/ExpDebutant', function(req, res, next) {
    Profils.find(function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(profile.years_of_exp === '')
                {
                    i = i + 1;
                }
                if(parseInt(profile.years_of_exp) < 3 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/ExpMedium', function(req, res, next)  {
    Profils.find(function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 3 && parseInt(profile.years_of_exp) < 5 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/ExpMedium1', function(req, res, next) {
    Profils.find(function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 5 && parseInt(profile.years_of_exp) < 7 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/ExpMedium2', function(req, res, next) {
    Profils.find(function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 7 && parseInt(profile.years_of_exp) < 10 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/ExpPro', function(req, res, next) {
    Profils.find(function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 10 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/latlon', function(req, res, next) {

    Profils.find(function (err,profils) {

        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else {
            var adresses = [];
            var listeLocations = [];
            var i =0;
            profils.forEach(function(profile){
                adresses.push(profile.location);
                i = i +1;
            });
            geocoder.geocode(adresses)
                .then(function (pro) {
                    for(var j = 0;j < pro.result.features.length;j++)
                    {
                        listeLocations.push({lat: pro.result.features[j].geometry.coordinates[0], lng: pro.result.features[j].geometry.coordinates[1]});
                    }
                    res.json(listeLocations);
                });
        }
    });
});
router.get('/nbrIngBiUnder3', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /BI/ } },
            { Domain: { $regex: /bi/ } },
            { Domain: { $regex: /ingénieur/ } },
            { Domain: { $regex: /Ingénieur/ } },
            { Domain: { $regex: /ingenieur/ } },
            { Domain: { $regex: /Ingenieur/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) < 3 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrIntWebUnder3', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /intégrateur/ } },
            { Domain: { $regex: /Intégrateur/ } },
            { Domain: { $regex: /Integrateur/ } },
            { Domain: { $regex: /integrateur/ } },
            { Domain: { $regex: /Webmaster/ } },
            { Domain: { $regex: /webmaster/ } },
            { Domain: { $regex: /web/ } },
            { Domain: { $regex: /Web/ } },
            { Domain: { $regex: /WEB/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) < 3 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrDevWebUnder3', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /intégrateur/ } },
            { Domain: { $regex: /Intégrateur/ } },
            { Domain: { $regex: /Integrateur/ } },
            { Domain: { $regex: /integrateur/ } },
            { Domain: { $regex: /Webmaster/ } },
            { Domain: { $regex: /webmaster/ } },
            { Domain: { $regex: /web/ } },
            { Domain: { $regex: /Web/ } },
            { Domain: { $regex: /WEB/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) < 3 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrDevMobileUnder3', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /Développeur/ } },
            { Domain: { $regex: /développeur/ } },
            { Domain: { $regex: /developpeur/ } },
            { Domain: { $regex: /Developpeur/ } },
            { Domain: { $regex: /mobile/ } },
            { Domain: { $regex: /Mobile/ } },
            { Domain: { $regex: /MOBILE/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) < 3 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrIntDonneesUnder3', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /intégrateur/ } },
            { Domain: { $regex: /Intégrateur/ } },
            { Domain: { $regex: /Integrateur/ } },
            { Domain: { $regex: /integrateur/ } },
            { Domain: { $regex: /données/ } },
            { Domain: { $regex: /Données/ } },
            { Domain: { $regex: /donnees/ } },
            { Domain: { $regex: /Donnees/ } },
            { Domain: { $regex: /Donnée/ } },
            { Domain: { $regex: /donnée/ } },
            { Domain: { $regex: /donnee/ } },
            { Domain: { $regex: /Donnee/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) < 3 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrConsItDigitalUnder3', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /Consultant/ } },
            { Domain: { $regex: /consultant/ } },
            { Domain: { $regex: /It/ } },
            { Domain: { $regex: /IT/ } },
            { Domain: { $regex: /it/ } },
            { Domain: { $regex: /Digital/ } },
            { Domain: { $regex: /digital/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) < 3 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrConsManagementUnder3', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /Consultant/ } },
            { Domain: { $regex: /consultant/ } },
            { Domain: { $regex: /Management/ } },
            { Domain: { $regex: /management/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) < 3 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrIngBiUnder5', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /BI/ } },
            { Domain: { $regex: /bi/ } },
            { Domain: { $regex: /ingénieur/ } },
            { Domain: { $regex: /Ingénieur/ } },
            { Domain: { $regex: /ingenieur/ } },
            { Domain: { $regex: /Ingenieur/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 3 && parseInt(profile.years_of_exp) < 5 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrIntWebUnder5', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /intégrateur/ } },
            { Domain: { $regex: /Intégrateur/ } },
            { Domain: { $regex: /Integrateur/ } },
            { Domain: { $regex: /integrateur/ } },
            { Domain: { $regex: /Webmaster/ } },
            { Domain: { $regex: /webmaster/ } },
            { Domain: { $regex: /web/ } },
            { Domain: { $regex: /Web/ } },
            { Domain: { $regex: /WEB/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 3 && parseInt(profile.years_of_exp) < 5 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrDevWebUnder5', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /intégrateur/ } },
            { Domain: { $regex: /Intégrateur/ } },
            { Domain: { $regex: /Integrateur/ } },
            { Domain: { $regex: /integrateur/ } },
            { Domain: { $regex: /Webmaster/ } },
            { Domain: { $regex: /webmaster/ } },
            { Domain: { $regex: /web/ } },
            { Domain: { $regex: /Web/ } },
            { Domain: { $regex: /WEB/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 3 && parseInt(profile.years_of_exp) < 5 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrDevMobileUnder5', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /Développeur/ } },
            { Domain: { $regex: /développeur/ } },
            { Domain: { $regex: /developpeur/ } },
            { Domain: { $regex: /Developpeur/ } },
            { Domain: { $regex: /mobile/ } },
            { Domain: { $regex: /Mobile/ } },
            { Domain: { $regex: /MOBILE/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 3 && parseInt(profile.years_of_exp) < 5 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrIntDonneesUnder5', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /intégrateur/ } },
            { Domain: { $regex: /Intégrateur/ } },
            { Domain: { $regex: /Integrateur/ } },
            { Domain: { $regex: /integrateur/ } },
            { Domain: { $regex: /données/ } },
            { Domain: { $regex: /Données/ } },
            { Domain: { $regex: /donnees/ } },
            { Domain: { $regex: /Donnees/ } },
            { Domain: { $regex: /Donnée/ } },
            { Domain: { $regex: /donnée/ } },
            { Domain: { $regex: /donnee/ } },
            { Domain: { $regex: /Donnee/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 3 && parseInt(profile.years_of_exp) < 5 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrConsItDigitalUnder5', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /Consultant/ } },
            { Domain: { $regex: /consultant/ } },
            { Domain: { $regex: /It/ } },
            { Domain: { $regex: /IT/ } },
            { Domain: { $regex: /it/ } },
            { Domain: { $regex: /Digital/ } },
            { Domain: { $regex: /digital/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 3 && parseInt(profile.years_of_exp) < 5 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrConsManagementUnder5', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /Consultant/ } },
            { Domain: { $regex: /consultant/ } },
            { Domain: { $regex: /Management/ } },
            { Domain: { $regex: /management/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 3 && parseInt(profile.years_of_exp) < 5 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrIngBiUnder7', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /BI/ } },
            { Domain: { $regex: /bi/ } },
            { Domain: { $regex: /ingénieur/ } },
            { Domain: { $regex: /Ingénieur/ } },
            { Domain: { $regex: /ingenieur/ } },
            { Domain: { $regex: /Ingenieur/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 5 && parseInt(profile.years_of_exp) < 7 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrIntWebUnder7', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /intégrateur/ } },
            { Domain: { $regex: /Intégrateur/ } },
            { Domain: { $regex: /Integrateur/ } },
            { Domain: { $regex: /integrateur/ } },
            { Domain: { $regex: /Webmaster/ } },
            { Domain: { $regex: /webmaster/ } },
            { Domain: { $regex: /web/ } },
            { Domain: { $regex: /Web/ } },
            { Domain: { $regex: /WEB/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 5 && parseInt(profile.years_of_exp) < 7 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrDevWebUnder7', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /intégrateur/ } },
            { Domain: { $regex: /Intégrateur/ } },
            { Domain: { $regex: /Integrateur/ } },
            { Domain: { $regex: /integrateur/ } },
            { Domain: { $regex: /Webmaster/ } },
            { Domain: { $regex: /webmaster/ } },
            { Domain: { $regex: /web/ } },
            { Domain: { $regex: /Web/ } },
            { Domain: { $regex: /WEB/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 5 && parseInt(profile.years_of_exp) < 7 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrDevMobileUnder7', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /Développeur/ } },
            { Domain: { $regex: /développeur/ } },
            { Domain: { $regex: /developpeur/ } },
            { Domain: { $regex: /Developpeur/ } },
            { Domain: { $regex: /mobile/ } },
            { Domain: { $regex: /Mobile/ } },
            { Domain: { $regex: /MOBILE/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 5 && parseInt(profile.years_of_exp) < 7 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrIntDonneesUnder7', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /intégrateur/ } },
            { Domain: { $regex: /Intégrateur/ } },
            { Domain: { $regex: /Integrateur/ } },
            { Domain: { $regex: /integrateur/ } },
            { Domain: { $regex: /données/ } },
            { Domain: { $regex: /Données/ } },
            { Domain: { $regex: /donnees/ } },
            { Domain: { $regex: /Donnees/ } },
            { Domain: { $regex: /Donnée/ } },
            { Domain: { $regex: /donnée/ } },
            { Domain: { $regex: /donnee/ } },
            { Domain: { $regex: /Donnee/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 5 && parseInt(profile.years_of_exp) < 7 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrConsItDigitalUnder7', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /Consultant/ } },
            { Domain: { $regex: /consultant/ } },
            { Domain: { $regex: /It/ } },
            { Domain: { $regex: /IT/ } },
            { Domain: { $regex: /it/ } },
            { Domain: { $regex: /Digital/ } },
            { Domain: { $regex: /digital/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 5 && parseInt(profile.years_of_exp) < 7 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrConsManagementUnder7', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /Consultant/ } },
            { Domain: { $regex: /consultant/ } },
            { Domain: { $regex: /Management/ } },
            { Domain: { $regex: /management/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 5 && parseInt(profile.years_of_exp) < 7 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrIngBiUnder10', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /BI/ } },
            { Domain: { $regex: /bi/ } },
            { Domain: { $regex: /ingénieur/ } },
            { Domain: { $regex: /Ingénieur/ } },
            { Domain: { $regex: /ingenieur/ } },
            { Domain: { $regex: /Ingenieur/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 7 && parseInt(profile.years_of_exp) < 10 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrIntWebUnder10', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /intégrateur/ } },
            { Domain: { $regex: /Intégrateur/ } },
            { Domain: { $regex: /Integrateur/ } },
            { Domain: { $regex: /integrateur/ } },
            { Domain: { $regex: /Webmaster/ } },
            { Domain: { $regex: /webmaster/ } },
            { Domain: { $regex: /web/ } },
            { Domain: { $regex: /Web/ } },
            { Domain: { $regex: /WEB/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 7 && parseInt(profile.years_of_exp) < 10 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrDevWebUnder10', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /intégrateur/ } },
            { Domain: { $regex: /Intégrateur/ } },
            { Domain: { $regex: /Integrateur/ } },
            { Domain: { $regex: /integrateur/ } },
            { Domain: { $regex: /Webmaster/ } },
            { Domain: { $regex: /webmaster/ } },
            { Domain: { $regex: /web/ } },
            { Domain: { $regex: /Web/ } },
            { Domain: { $regex: /WEB/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 7 && parseInt(profile.years_of_exp) < 10 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrDevMobileUnder10', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /Développeur/ } },
            { Domain: { $regex: /développeur/ } },
            { Domain: { $regex: /developpeur/ } },
            { Domain: { $regex: /Developpeur/ } },
            { Domain: { $regex: /mobile/ } },
            { Domain: { $regex: /Mobile/ } },
            { Domain: { $regex: /MOBILE/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 7 && parseInt(profile.years_of_exp) < 10 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrIntDonneesUnder10', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /intégrateur/ } },
            { Domain: { $regex: /Intégrateur/ } },
            { Domain: { $regex: /Integrateur/ } },
            { Domain: { $regex: /integrateur/ } },
            { Domain: { $regex: /données/ } },
            { Domain: { $regex: /Données/ } },
            { Domain: { $regex: /donnees/ } },
            { Domain: { $regex: /Donnees/ } },
            { Domain: { $regex: /Donnée/ } },
            { Domain: { $regex: /donnée/ } },
            { Domain: { $regex: /donnee/ } },
            { Domain: { $regex: /Donnee/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 7 && parseInt(profile.years_of_exp) < 10 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrConsItDigitalUnder10', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /Consultant/ } },
            { Domain: { $regex: /consultant/ } },
            { Domain: { $regex: /It/ } },
            { Domain: { $regex: /IT/ } },
            { Domain: { $regex: /it/ } },
            { Domain: { $regex: /Digital/ } },
            { Domain: { $regex: /digital/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 7 && parseInt(profile.years_of_exp) < 10 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrConsManagementUnder10', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /Consultant/ } },
            { Domain: { $regex: /consultant/ } },
            { Domain: { $regex: /Management/ } },
            { Domain: { $regex: /management/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 7 && parseInt(profile.years_of_exp) < 10 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrIngBiSup10', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /BI/ } },
            { Domain: { $regex: /bi/ } },
            { Domain: { $regex: /ingénieur/ } },
            { Domain: { $regex: /Ingénieur/ } },
            { Domain: { $regex: /ingenieur/ } },
            { Domain: { $regex: /Ingenieur/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 10 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrIntWebSup10', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /intégrateur/ } },
            { Domain: { $regex: /Intégrateur/ } },
            { Domain: { $regex: /Integrateur/ } },
            { Domain: { $regex: /integrateur/ } },
            { Domain: { $regex: /Webmaster/ } },
            { Domain: { $regex: /webmaster/ } },
            { Domain: { $regex: /web/ } },
            { Domain: { $regex: /Web/ } },
            { Domain: { $regex: /WEB/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 10 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrDevWebSup10', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /intégrateur/ } },
            { Domain: { $regex: /Intégrateur/ } },
            { Domain: { $regex: /Integrateur/ } },
            { Domain: { $regex: /integrateur/ } },
            { Domain: { $regex: /Webmaster/ } },
            { Domain: { $regex: /webmaster/ } },
            { Domain: { $regex: /web/ } },
            { Domain: { $regex: /Web/ } },
            { Domain: { $regex: /WEB/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 10 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrDevMobileSup10', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /Développeur/ } },
            { Domain: { $regex: /développeur/ } },
            { Domain: { $regex: /developpeur/ } },
            { Domain: { $regex: /Developpeur/ } },
            { Domain: { $regex: /mobile/ } },
            { Domain: { $regex: /Mobile/ } },
            { Domain: { $regex: /MOBILE/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 10 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrIntDonneesSup10', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /intégrateur/ } },
            { Domain: { $regex: /Intégrateur/ } },
            { Domain: { $regex: /Integrateur/ } },
            { Domain: { $regex: /integrateur/ } },
            { Domain: { $regex: /données/ } },
            { Domain: { $regex: /Données/ } },
            { Domain: { $regex: /donnees/ } },
            { Domain: { $regex: /Donnees/ } },
            { Domain: { $regex: /Donnée/ } },
            { Domain: { $regex: /donnée/ } },
            { Domain: { $regex: /donnee/ } },
            { Domain: { $regex: /Donnee/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 10 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrConsItDigitalSup10', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /Consultant/ } },
            { Domain: { $regex: /consultant/ } },
            { Domain: { $regex: /It/ } },
            { Domain: { $regex: /IT/ } },
            { Domain: { $regex: /it/ } },
            { Domain: { $regex: /Digital/ } },
            { Domain: { $regex: /digital/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 10 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/nbrConsManagementSup10', function(req, res, next) {
    Profils.find({"$or": [
            { Domain: { $regex: /Consultant/ } },
            { Domain: { $regex: /consultant/ } },
            { Domain: { $regex: /Management/ } },
            { Domain: { $regex: /management/ } }]},function (err,profils) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!profils) {
            res.json(profils);
        }
        else
        {
            var i = 0;
            profils.forEach(function (profile) {
                if(parseInt(profile.years_of_exp) >= 10 )
                {
                    i = i +1 ;
                }
            });
            res.json(i);
        }

    });
});
router.get('/test', function(req, res, next) {
    Profils.find(function (err,profils) {
        if(err) {
            console.log(err)
            console.log('err')
        }
        if(!profils) {
            console.log(profils);
        }
        else
        {
            res.json(profils.length);
        }
    });
});
router.get('/LocationTun',function (req, res, next) {
    Profils.find({ location: { $regex: /Tunisie/ } }).count(function (err, profils) {
        if(err) {
            res.send(err);
            console.log('err')
        }
        if(!profils) {
            console.log('profils not found');
            res.status(404).send();
        }
        else
        {
            res.json(profils);
        }
    });
});
router.get('/LocationInt',function (req, res, next) {
    Profils.find({ location: { $not: /Tunisie/ } }).count(function (err, profils) {
        if(err) {
            res.send(err);
            console.log('err')
        }
        if(!profils) {
            console.log('profils not found');
            res.status(404).send();

        }
        else
        {
            res.json(profils);
        }
    });
});

module.exports = router;