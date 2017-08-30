var MongoClient = require('mongodb').MongoClient
var DB_CONN_STR = 'mongodb://localhost:27017/mydb'

MongoClient.connect(DB_CONN_STR, function(err, db) {
    db.collection('hello').find({a: 1}).toArray(function (error, result) {
        console.log(result)
    })
    db.close()
})