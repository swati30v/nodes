var MongoClient = require('mongodb').MongoClient;
var url="mongodb+srv://swati30v:<123>@cluster0-8pcle.mongodb.net/test?retryWrites=true&w=majority";
module.exports.init=function(cb){
    MongoClient.connect(url,cb)
}