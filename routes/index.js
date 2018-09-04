const express           = require("express");
const router            = express.Router({mergeParams:true});
const middleware        = require("../middleware");
const passport          = require("passport");
const Customer          = require("../models/customer");
const Searchable        = requre("mongoose-searchable");


router.post("/search",(req,res,next)=>{
    //we need to search the DB for the term sent over by the search field and return a customer if found.
    Customer.find();
    //Return flash error if we don't find a customer.
});

//Base route for site.
router.get("/",middleware.isLoggedIn,(req,res,next)=>{
    res.render("landing");
});




module.exports = router;