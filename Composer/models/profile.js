let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let profile= new Schema(
    {
    educations: [Schema.Types.Mixed],
    experiences: [Schema.Types.Mixed],
        skills:[],
        picture:String,
    job_title: String,
        jobId: String,
        url: {type : String, required : true},
        location: String,
        name: String,
        nationality:String,
        school: String,
        UPDATE_DATE: String,
        company: String,
        nationalty:String,
        Domain:String,
        years_of_exp:String
    },
    {
        _id: false ,
        versionKey: false
    });

module.exports = profile;