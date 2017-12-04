var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')

var mongoose = require('mongoose')
var {dataSchema} = require('./mongo/schema')
// var dataModel = require('./mongo/model')

// 连接远程数据库
var db = mongoose.createConnection('localhost', 'vue')
db.on("error", function (error) {
    console.log("数据库连接失败：" + error)
})
db.on("open", function () {
    console.log("------ 数据库连接成功！------")
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.post('/addData', function (req, res) {
  if (req.body) {
    var dataModel = db.model('dataModel', dataSchema)
    var data = req.body

    dataModel.create(data, function (err) {
      if (err) {
        res.send({
          code: -3,
          msg: '添加数据失败'
        })
        return console.log('添加数据失败', err)
      }
      res.send({
        code: 0,
        msg: '添加数据成功'
      })
      console.log('添加数据成功')
    })
  } else {
    res.send({
      code: -1,
      msg: '参数错误'
    })
    console.log('参数错误')
  }
})

app.get('/htmlData', function (req, res) {
  if (req.body) {
    var dataModel = db.model('dataModel', dataSchema)
    var data = req.body

    dataModel.create(data, function (err) {
      if (err) {
        res.send({
          code: -3,
          msg: '添加数据失败'
        })
        return console.log('添加数据失败', err)
      }
      res.send({
        code: 0,
        msg: '添加数据成功'
      })
      console.log('添加数据成功')
    })
  } else {
    res.send({
      code: -1,
      msg: '参数错误'
    })
    console.log('参数错误')
  }
})



module.exports = app
