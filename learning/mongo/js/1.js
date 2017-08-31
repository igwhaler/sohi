var MongoClient = require('mongodb').MongoClient
var DB_CONN_STR = 'mongodb://igwhaler:fs1122@ds149800.mlab.com:49800/igwdb'
// var DB_CONN_STR = 'mongodb://<igwhaler>:<fs1122>@ds149800.mlab.com:49800/igwdb'

MongoClient.connect(DB_CONN_STR, function(err, db) {
    /*  db.collection('hello').find({name: 'fs'}).toArray(function (error, result) {
        console.log(result)
    })  */
    if (err) {
        console.log(err)
    }
    // db.close()
})  
