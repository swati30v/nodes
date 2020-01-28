var express=require("express")
var router=express.Router();
var user=require("../model/user");
var mongodb=require("mongodb")

router.get("/",function(req,res){
    user.find(function(err,result){
        if(err){
            console.log(err);
         
        }
        if(result){
            var pagedata={"pagename":"showdata","title":"showdata page","data":result}
            res.render("layout",pagedata)
        }

    })
});
router.get("/delete/:id",function(req,res){
    var id=req.params.id;
    user.delete({_id:mongodb.ObjectId(id)},function(err,result){
        if(err){
            console.log(err)
        }
        if(result){
            console.log("RRRRRRRRRRR",result,"RRRRRRRRRRRRRRRRRRR")
     res.redirect("/showdata")
    }
    })
});
module.exports=router;