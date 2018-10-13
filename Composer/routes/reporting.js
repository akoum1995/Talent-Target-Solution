var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');

let Profils = mongoose.model('profile');
let Statistics = mongoose.model('statistics');
var MultiGeocoder = require('multi-geocoder'),
    geocoder = new MultiGeocoder({ provider: 'yandex-cache', coordorder: 'latlong' });
var currentWeekNumber = require('current-week-number');
var predict = require('predict');

router.post('/AddStatisticsPerWeek', function(req,res, next){

    var stat = new Statistics(req.body);
    var date = new Date()
    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate()-1,
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }
    var date2 = formatDate(date);
    console.log(date2);
    stat.DatePush = date2;
    stat.save(function (err, stat) {
        if(err)
        {res.json(err)}
        else
        {res.json(stat);}
    })
});
router.get('/AllStat', function(req, res, next) {
    Statistics.find().sort({DatePush: 1}).exec(function (err,stat) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!stat) {
            res.json("vide");

        }
        else
        {
            res.json(stat);
        }

    });
});
router.get('/YesterdayStat', function(req,res,next){
    var d = new Date();
    var n = d.getDay();
    var date = new Date()
    date.setDate(d.getDate() - 1)
    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }
    var date2 = formatDate(date);
    Statistics.find({DatePush: { $gte: date2,$lte:date2}},function (err,stat) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!stat) {
            res.json("vide");

        }
        else
        {
            res.json(stat);
        }

    });
});
router.get('/WeekStat', function(req,res,next){
    Statistics.find(function (err,stat) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!stat) {
            res.json("vide");

        }
        else
        {
            var beforeWeek = {number:0,day:''};
            var listeWeek = [];
            for(var i =0; i < stat.length;++i)
            {
                if(currentWeekNumber()-1 === currentWeekNumber(stat[i].DatePush))
                {
                    var days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    var dayName = days[stat[i].DatePush.getDay()];
                    beforeWeek = {number: stat[i].statAll, day: dayName}
                }
                if(currentWeekNumber() === currentWeekNumber(stat[i].DatePush))
                {
                    var days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    var dayName = days[stat[i].DatePush.getDay()];
                    if(i === 0)
                    {
                    listeWeek.push({number: stat[i].statAll-beforeWeek.number,day: dayName})
                    }
                    else
                    {
                        listeWeek.push({number: stat[i].statAll-stat[i-1].statAll,day: dayName})
                    }
                }
            }
            res.json(listeWeek);
        }
    });
});
router.get('/MonthStat', function(req,res,next){
    Statistics.find(function (err,stat) {
        if(err) {
            res.send(err)
            console.log('err')
        }
        if(!stat) {
            res.json("vide");

        }
        else
        {
            var beforeMonth = {number:0};
            var listeMonth = [];
            var d = new Date();
            var month = [];
            month.push("January");
            month.push("February");
            month.push("March");
            month.push("April");
            month.push("May");
            month.push("June");
            month.push("July");
            month.push("August");
            month.push("September");
            month.push("October");
            month.push("November");
            month.push("December");
            var n = month[d.getMonth()];
            for(var i =0; i < stat.length;++i)
            {
                if(d.getMonth()-1 === stat[i].DatePush.getMonth())
                {
                    beforeMonth = {number: stat[i].statAll}
                }
                if(d.getMonth() === stat[i].DatePush.getMonth())
                {
                    if(i === 0)
                    {
                        listeMonth.push({number: stat[i].statAll-beforeMonth.number,date:stat[i].DatePush})
                    }
                    else
                    {
                        listeMonth.push({number: stat[i].statAll-stat[i-1].statAll,date:stat[i].DatePush})
                    }
                }
            }
            var result = { listes: listeMonth,month:n}

            res.json(result);
        }
    });
});
router.get('/predict', function(req,res,next) {
   Statistics.find(function(err, post) {
       var all = [];
       for(var i =1; i < post.length;++i)
       {
           all.push(post[i].statAll-post[i-1].statAll);
       }
       var ma = predict.movingAverage();
       ma.pushValues(all);
       var result = ma.predictNextValue();
       res.json( result );
   });
});
router.get('/predictBi', function(req,res,next) {
    Statistics.find(function(err, post) {
        var all = [];
        for(var i =1; i < post.length;++i)
        {
            all.push((post[i].IntegraterAndBiTunisian+post[i].IntegraterAndBiInternational)-(post[i-1].IntegraterAndBiTunisian+post[i-1].IntegraterAndBiInternational));
        }
        var ma = predict.movingAverage();
        ma.pushValues(all);
        var result = ma.predictNextValue();
        res.json( result );
    });
});
router.get('/predictConsultants', function(req,res,next) {
    Statistics.find(function(err, post) {
        var all = [];
        for(var i =1; i < post.length;++i)
        {
            all.push((post[i].ConsultantInternational+post[i].ConsultantTunisian)-(post[i-1].ConsultantInternational+post[i-1].ConsultantTunisian));
        }
        var ma = predict.movingAverage();
        ma.pushValues(all);
        var result = ma.predictNextValue();
        res.json( result );
    });
});
router.get('/predictDevelopper', function(req,res,next) {
    Statistics.find(function(err, post) {
        var all = [];
        for(var i =1; i < post.length;++i)
        {
            all.push((post[i].DevelopperTunisian+post[i].DevelopperInternational)-(post[i-1].DevelopperTunisian+post[i-1].DevelopperInternational));
        }
        var ma = predict.movingAverage();
        ma.pushValues(all);
        var result = ma.predictNextValue();
        res.json( result );
    });
});

module.exports = router;
