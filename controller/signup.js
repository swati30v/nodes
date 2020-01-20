var express=require("express");
var router=express.Router();
var mongodb=require("mongodb");
var user=require("../model/user")

router.get("/",function(req,res){
    var pagedata={"pagename":"signup","title":"signup page"};
    res.render("layout",pagedata);
    console.log('ssssss');
});

router.post("/",function(req,res){

    console.log(req.body,"ssssss")
    req.body.pagename="login";
    req.body.title="show data"
    res.render("layout",req.body);

    var obj={};
    obj.Username=req.body.Username;
    obj.contactno=req.body.contactno;
    obj.email=req.body.email;
    obj.password=req.body.password;

    user.insert(obj,function(err,result){
        if(err){
            console.log("err",err);
            req.body.pagename="login";
            req.body.title="show";
            res.render("layout",req.body)
            if(result){
                res.render('/login');
            }
        }
    });
});
 module.exports=router;