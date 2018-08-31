const express = require("express");
const router = express.Router({
    mergeParams: true
});
const middleware = require("../../middleware");
const passport = require("passport");
const User = require("../../models/user");

//base login get
router.get("/login", (req, res) => {
    res.render("login");
});

//login post route.
router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"
}, (req, res) => {
    // console.log("login");
}));

//logout get route
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

router.get("/register",(req,res)=>{
    res.render("register");
});

router.post("/register", (req, res) => {
    //console.log(req.body);
    var newUser = new User(req.body.user);
    newUser.email = req.body.user.email;
    newUser.posid = "5";
    User.findOne({
        username: req.body.user.username
    }, (err, foundUser) => {
        if(err){
            console.log("Error registering: "+req.body.user);
            res.redirect("/user/register");
        }
        if (foundUser) {
            req.flash("User already exists.");
            res.redirect("/user/login");
        }
        
        newUser.save();
        passport.authenticate("local", {
            successRedirect: "/",
            failureFlash: "Error registering user: " + req.body.user,
            failureRedirect: "/user/login"
        });
    });
});



module.exports = router;