let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let modules= new Schema(
    {
    name: {type : String, unique : true, required : true},
    url: String,
    urlScrap: String,
    port: String,
    trust_ratio: Number
    },
    {
        _id: false ,
        versionKey: false
    });

module.exports = modules;