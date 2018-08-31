const express           = require("express");
const router            = express.Router();
const middleware        = require("../middleware");

//Base route for site.
router.get("/",middleware.isLoggedIn,(req,res)=>{
    res.render("landing");
});

module.exports = router;