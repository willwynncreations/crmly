const express           = require("express");
const router            = express.Router({mergeParams:true});
const middleware        = require("../middleware");
const passport          = require("passport");
const Customer          = require("../models/customer");


router.get("/search/results", middleware.isLoggedIn, (req, res, next) => {
    res.render("landing");
});

router.post("/search", middleware.isLoggedIn,(req, res, next) => {
    Customer.find({
                btn: {
                    $regex: ".*" + req.body.searchTerm
                }
            }, (err, customers) => {
                //console.log(customers);
                res.render("landing");
    });
});

router.get("/search",middleware.isLoggedIn,(req,res,next)=>{
    res.render("landing");
});


//Base route for site.
router.get("/",middleware.isLoggedIn,(req,res,next)=>{
    res.render("landing");
});




module.exports = router;