const passportLocalMongoose = require("passport-local-mongoose");
const mongoose              = require("mongoose");
const productModel          = require("./product");
var Schema = mongoose.Schema;

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
    },
    package:[{
        id:{
            type: Schema.Types.ObjectId,
            ref: "Package"
        }
    }]
});

CustomerSchema.index(
    {
        "$**": "text"
    }
);
CustomerSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model("Customer", CustomerSchema);