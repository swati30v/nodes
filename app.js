var express =require("express");
var app=express();
var bodyparser=require("body-parser");
var session=require("express-session");
var cookie=require("cookie-parser");



app.set("view engine","ejs");
app.use(bodyparser());
app.use(express.static(__dirname+"/public/"));

app.use(cookie())
app.use(session({
    secret: 'ziasy',
    saveUninitialized: true,
}));

app.use(function(req,res,next){
    res.locals,session=req.session
    next();
})

app.use(require("./controller/default"));

app.get("/",function(req,res){
    console.log("swati ")
    res.render("layout",{name:"hello",pagename:"login" });
});

app.listen(process.env.PORT || 2500,function(){
    var obj={};
    obj.name="swati"
    console.log(obj)
    console.log("server started!!!!!!!!!!!!!!!!!!!");
});