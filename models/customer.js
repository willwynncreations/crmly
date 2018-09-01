const passportLocalMongoose = require("passport-local-mongoose");
const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    zip: String,
    btn: String,
    ctn: String
});

UserSchema.index({
    pkey: 1
}, {
    unique: true
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Customer", UserSchema);