let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let job= new Schema(
    {
    name: {type : String, unique : true, required : true},
    modules: [String],
    tags: [String],
    countries: [String],
    start_date: Date,
    end_date: Date,
    state: String
    },
    {
        _id: false ,
        versionKey: false
    });

module.exports = job;