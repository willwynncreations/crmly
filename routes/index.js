const express           = require("express");
const router            = express.Router({mergeParams:true});
const middleware        = require("../middleware");
const passport          = require("passport");
const User              = require("../models/user");



//Base route for site.
router.get("/",middleware.isLoggedIn,(req,res,next)=>{
    res.render("landing");
});

//base login get
router.get("/login",(req,res)=>{
    res.render("login");
});

//login post route.
router.post("/login",passport.authenticate("local",{
    successRedirect: "/login",
    failureRedirect: "/"
},(req,res)=>{

}));

//logout get route
router.get("/logout",(req,res)=>{
    req.logout();
    res.redirect("/");
});

module.exports = router;