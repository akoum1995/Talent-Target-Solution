var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var searchTag= new Schema(
    {
    tag: {
        type: String,
        required: true,
        minlength:1,
        trim:true
    },
        date: { type: Date, required: true, default: Date.now }

    },
    {
        _id: false,
        versionKey: false
    });


module.exports=searchTag;