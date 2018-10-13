var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var searchEngine= new Schema(
    {
    name: {type : String, unique : true, required : true},
    accounts: [
        {
            username: String,
            password: String,
            api_key: String
        }
            ],
    api_url: String,
    method: String,
    params:[String],
    formats:[String],
    trust_ratio: Number
    },
    {
        _id: false ,
        versionKey: false
    });

module.exports = searchEngine;