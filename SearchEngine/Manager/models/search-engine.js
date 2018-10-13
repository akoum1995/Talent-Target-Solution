let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let searchEngine= new Schema(
    {
    name: {type : String, unique : true, required : true},
    accounts: [
        {
            key: String,
            cx: String,
            url:String
        }
            ],
    url: String,
    port: String,
    trust_ratio: Number
    },
    {
        _id: false ,
        versionKey: false
    });

module.exports = searchEngine;