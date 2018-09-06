const passportLocalMongoose = require("passport-local-mongoose");
const mongoose              = require("mongoose");
const searchable            = require('mongoose-searchable');

var CustomerSchema = new mongoose.Schema({
    first_name: {
        type: String,
        //text: true
    },
    last_name: {
        type: String,
        text: true
    },
    email: {
        type:String,
        text: true,
        required: true
    },
    address1: {
        type: String,
        text: true
    },
    address2: {
        type: String,
        text: true
    },
    city: {
        type: String,
        text: true
    },
    state: {
        type: String,
        text: true
    },
    zip: {
        type: String,
        text: true
    },
    btn: {
        type: String,
        text: true
    },
    ctn: {
        type: String,
        text: true
    }
});

CustomerSchema.index(
    {
        "$**": "text"
    }
);
CustomerSchema.plugin(passportLocalMongoose);
CustomerSchema.plugin(searchable);

module.exports = mongoose.model("Customer", CustomerSchema);