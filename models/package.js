const passportLocalMongoose = require("passport-local-mongoose");
const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PackageSchema = new mongoose.Schema({
    packageName: String,
    duration: String,
    type: String,
    price: String,
    packageCode: String,
    description: String,
    products:[{
        id:{
            type:Schema.Types.ObjectId,
            ref:"Product"
        }
    }]
});

PackageSchema.index({
    pkey: 1
}, {
    unique: true
});

PackageSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Package", PackageSchema);