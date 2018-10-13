let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let profileLink= new Schema(
    {
    url: String,
    jobId: String,
    search_engine: String,
    treated: Boolean
    },
    {
        _id: false ,
        versionKey: false
    });

module.exports = profileLink;