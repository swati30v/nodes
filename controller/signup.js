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

  

    var obj={};
    obj.Username=req.body.Username;
    obj.contactno=req.body.contactno;
    obj.email=req.body.email;
    obj.password=req.body.password;

    user.insert(obj,function(err,result){
        if(err)
        {
            console.log("err",err);
            res.render("layout",req.body)
        }
            if(result){
                console.log(result,"jhbdfvjhbdfjbdhjfbhvj")
                res.redirect('/login');
            }
            
        
    })

});

 module.exports=router;
 

 

