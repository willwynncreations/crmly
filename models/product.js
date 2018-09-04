const passportLocalMongoose = require("passport-local-mongoose");
const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    productName: String,
    duration: String,
    type:String, 
    price: String,
    productCode: String,
    description: String
});

UserSchema.index({
    pkey: 1
}, {
    unique: true
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Product", UserSchema);