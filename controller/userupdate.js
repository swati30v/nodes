var express=require("express")
var router=express.Router();
var mongodb=require("mongodb")
var user=require("../model/user");

router.get("/userupdate",function(req,res){
    console.log("user update page is runnig ");
    var pagedata={"pagename":"userupdate","title":"userupdate page"};
    res.render("layout",pagedata)

});

router.post("/",function(req,res){
    console.log(req.body,"kjdkjfh")
    user.update({_id:mongodb.ObjectId(req.body._id)},req.body,function(err,result){
        console.log(result)
        if(err){
            res.send(err)
        }
        else{
            res.redirect("/showdata")
        }
    })
});
router.get("edit/:id",function(req,res){
    var id=req.params.id;
    user.findwhere=({_id:mongodb.ObjectId(id)},function(err,result){
        console.log(result)
        var pagedata={"title":"userupdate","pagename":"user page","data":result[0]};
        res.render("layout",pagedata)
    })
});
module.exports=router;