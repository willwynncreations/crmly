const passportLocalMongoose      = require("passport-local-mongoose");
const mongoose                   = require("mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    first_name: String,
    last_name: String,
    posid: String,
    email: String,
});

UserSchema.index({
    pkey: 1
}, {
    unique: true
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",UserSchema);