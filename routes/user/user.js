const express = require("express");
const router = express.Router({
    mergeParams: true
});
const passport = require("passport");
const User = require("../../models/user");

//base login get
router.get("/login", (req, res) => {
    res.render("login");
});

//login post route.
router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/user/login",
    failureFlash: true
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
    var newUser = new User({
        username:req.body.user.username,
        first_name: req.body.user.first_name,
        last_name: req.body.user.last_name,
        email: req.body.user.email,
        posid: "5"
    });
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
        User.register(newUser,req.body.user.password,(err,user)=>{

        });
        passport.authenticate("local", {
            successRedirect: "/",
            //failureFlash: "Error registering user: " + req.body.user,
            failureRedirect: "/user/login"
        });
    });
});



module.exports = router;