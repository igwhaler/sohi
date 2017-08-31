var mongoose = require('mongoose')
var db = mongoose.connect('mongodb://igwhaler:fs1122@ds149800.mlab.com:49800/igwdb')

db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error)
})
db.connection.on("open", function () {
    console.log("------ 数据库连接成功！------")
    createCat()
})

function createCat () {
    var Cat = mongoose.model('Cat', {
        name: String,
        friends: [String],
        age: Number
    })

    var kitty = new Cat({
        name: 'kitty',
        freinds: ['tom', 'jerry'],
        age: 3 
    })

    kitty.save(function (err, result) {
        console.log(1)
    })
    /* Cat.remove({name: 'kitty'}, function (err, result) {
        console.log(2)
    }) */
}
