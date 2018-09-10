const express           = require("express");
const router            = express.Router({
    mergeParams: true
});
const passport          = require("passport");
const Customer          = require("../../models/customer");
const middleware        = require("../../middleware");

router.get("/:id",middleware.isLoggedIn,(req,res,next)=>{
    //console.log(req.params.id);
    Customer.findById({_id:req.params.id},(err,user)=>{
        
    });
});



module.exports = router;
