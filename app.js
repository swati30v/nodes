var express =require("express");
var app=express();
var bodyparser=require("body-parser");


app.set("view engine","ejs");
app.use(bodyparser());
app.use(express.static('public'));

app.use(require("./controller/default"))

app.listen(process.env.PORT || 2500,function(){
    var obj={};
    obj.name="swati"
    console.log(obj)
    console.log("server");
});