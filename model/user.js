var connect=require("../config/connect");

module.exports.insert=function(obj,cb){
    connect.init(function(err,client){
        console.log('===================',err,"+++++++++++++++++++++++++++");
        var db=client.db("swati30v");
        db.collection('user').insert(obj,cb)
    });
}
module.exports.find=function(cb){
    connect.init(function(err,client){
        var db=client.db("swati30v")
        db.collection("user").find({ }).toArray(cb);
    });
}
module.exports.findwhere=function(obj,cb){
    connect.init(function(err,client){
      var db = client.db("swati30v")
          db.collection('user').find(obj).toArray(cb);
      }); 
  }
module.exports.update=function(where,obj,cb){
    connect.init(function(err,client){
        var db=client.db("swati30v")
        db.collection('user').updateone(where,{$set:obj},cb);
    });

}

module.exports.delete=function(where,cb){
    console.log(where,"WHERE CONDITION")
    connect.init(function(err,client){
     var db=client.db("swati30v")
     db.collection('user').deleteOne(where,cb);
    });
}