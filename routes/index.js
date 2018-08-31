const express           = require("express");
const router            = express.Router({mergeParams:true});
const middleware        = require("../middleware");
const passport          = require("passport");



//Base route for site.
router.get("/",middleware.isLoggedIn,(req,res,next)=>{
    res.render("landing");
});

router.get("/login",(req,res)=>{
    res.render("login");
});

router.post("/login",passport.authenticate("local",{
    successRedirect: "/login",
    failureRedirect: "/"
},(req,res)=>{
    
}));

module.exports = router;