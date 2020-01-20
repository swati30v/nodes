var connect=require("../config/connect");

module.exports.insert=function(obj,cb){
    connect.init(function(err,client){
        var db=client.db("swati30v");
        db.collection('user').insert(obj,cb)
    });
}

