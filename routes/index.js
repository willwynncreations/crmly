const express           = require("express");
const router            = express.Router();

//Base route for site.
router.get("/",(req,res)=>{
    res.render("landing");
});



module.exports = router;