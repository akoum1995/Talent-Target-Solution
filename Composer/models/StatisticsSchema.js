var mongoose = require('mongoose');
var statisticsSchema=mongoose.Schema({

    statAll:{type:Number,required:true},
    statAllTun:{type:Number,required:true},
    statAllInt:{type:Number,required:true},
    statViadeo:{type:Number,required:true},
    statDoyoubuzz:{type:Number,required:true},
    statLinkedin:{type:Number,required:true},
    nbrMale:{type:Number,required:true},
    nbrFemale:{type:Number,required:true},
    IntegraterAndBiTunisian:{type:Number,required:true},
    IntegraterAndBiInternational:{type:Number,required:true},
    DevelopperTunisian:{type:Number,required:true},
    DevelopperInternational:{type:Number,required:true},
    ConsultantInternational:{type:Number,required:true},
    ConsultantTunisian:{type:Number,required:true},
    ExpDebutant:{type:Number,required:true},
    ExpMedium:{type:Number,required:true},
    ExpMedium1:{type:Number,required:true},
    ExpMedium2:{type:Number,required:true},
    ExpPro:{type:Number,required:true},
    locationTun:{type:Number,required:true},
    locationInt:{type:Number,required:true},
    DatePush:{type:Date, required:true}
});
module.exports =statisticsSchema
