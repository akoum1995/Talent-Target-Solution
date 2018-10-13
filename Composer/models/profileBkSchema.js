var mongoose = require('mongoose');
var profil_linkSchema=mongoose.Schema({

    name:{type:String,required:true},
    current_job:{type:String},
    Domain:{type:String},
    company:{type:String},
    years_of_exp:{type:String},
    Competences:{type:String},
    location:{type:String},
    exprience:{type:String},
    nationalty:{type:String},
    url:{type:String,required:true,unique:true},
    image:{type:String},
    UPDATE_DATE:{type:String}


});
module.exports =profil_linkSchema;