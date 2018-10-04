const passportLocalMongoose = require("passport-local-mongoose");
const mongoose              = require("mongoose");


var ProductSchema = new mongoose.Schema({
    productName: String,
    duration: String,
    type:String, 
    price: String,
    productCode: String,
    description: String
});

ProductSchema.index({
    pkey: 1
}, {
    unique: true
});

ProductSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model("Product", ProductSchema);