var express=require("express");
var router=express.Router();


router.use("/signup",require("./signup"));
router.use("/login",require("./login"));
//router.use("/showuser",require("./showuser"));

module.exports=router;