var express=require("express")
var router=express.Router();
var mongodb=require('mongodb');
var user=require("../model/user");

router.get("/",function(req,res){
    console.log("start login page")
    var pagedata={"pagename":"login","title":"login page start"}
    res.render("layout",pagedata);

});



router.post("/",function(req,res){
    console.log("kuch bhi!!!!!!!!");
    var obj={};
    obj.email=req.body.email;
    obj.password=req.body.password;
    console.log(obj)

    user.findwhere(obj,function(err,result){
      if(err)
      {
          console.log("err");
      }
      else{
          console.log(result,"nahhhhhh");
          if(result.length>0)
          {
              req.session.userId=result[0].id;
              req.session.name=result[0].name;
              req.session.user_loged_in=true;
              res.redirect("/showdata");
              
          }
      }
    })
});


module.exports=router;
