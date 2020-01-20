var express=require("express")
var router=express.Router();
 
router.get("/",function(req,res){
    console.log("start login page")
    var pagedata={"pagename":"login","title":"login page start"}
    res.render("layout",pagedata);
});

module.exports=router;
