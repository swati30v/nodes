var MongoClient = require('mongodb').MongoClient;
var url="mongodb+srv://projectproject:123@swati@cluster0-aw1hp.mongodb.net/test?retryWrites=true&w=majority";
module.exports.init=function(cb){
    MongoClient.connect(url,cb)
}