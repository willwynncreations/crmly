const express           = require("express");
const router            = express.Router({mergeParams:true});
const middleware        = require("../middleware");
const passport          = require("passport");
const Customer          = require("../models/customer");


router.get("/:id",middleware.isLoggedIn,(req,res,next)=>{
    res.locals.customers = req.body.id;
});


router.get("/search/results", middleware.isLoggedIn, (req, res, next) => {
    res.render("landing");
});

router.post("/search", middleware.isLoggedIn,(req, res, next) => {
    Customer.find({
                btn: {
                    $regex: ".*" + req.body.searchTerm
                }
            }, (err, customers) => {
                if (customers == "[]") {                 
                    res.render("search");
                }
                //console.log(customers);
                res.render("results",{customers:customers});
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