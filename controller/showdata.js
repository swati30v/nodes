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
    var id=req.param.id;
    user.delete({_id:mongodb.ObjectId(id)},function(err,result){
        console.log(result)
        var pagedata={"title":"showdata","pagename":"showdata","data":result[0]};
        res.render("/showdata")
    })
});
module.exports=router;