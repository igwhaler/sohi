var express = require('express')
var path = require('path')
var app = express()
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var UserDataModel = require('./mongo/model')
var mongoose = require('mongoose')
var session = require('express-session')
var MongoStore = require('connect-mongo')(session)

// 密码加盐
var bcrypt = require('bcrypt')
var SALT_WORK_FACTOR = 10

// 连接远程数据库
var dbUrl = 'mongodb://localhost:27017/test'
// var dbUrl = 'mongodb://mertens:test123@ds037205.mlab.com:37205/mertens-qn'
var db = mongoose.connect(dbUrl)
db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error)
})
db.connection.on("open", function () {
    console.log("------ 数据库连接成功！------")
})

app.use(bodyParser.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(session({
  secret: 'mertens', // secret 的值建议使用随机字符串
  cookie: {
    maxAge: 60 * 1000 * 30, // 过期时间（毫秒）
    httpOnly: false
  },
  store: new MongoStore({
    url: dbUrl,
    touchAfter: 30 * 60
  })
}))

// 查询用户名
app.get('/getUserName', function (req, res) {
  if (req.session.isLogin) {
    res.send({
      code: 0,
      userName: req.session.userInfo.userName
    })
  } else {
    res.send({
      code: -1,
      msg: '请登录！'
    })
  }
})
// 查询用户问卷数据
app.get('/getUserQnData', function (req, res) {
  if (req.session.isLogin) {
    UserDataModel.findOne(
      { email: req.session.userInfo.userEmail },
      { qnData: 1, _id: 0 },
      function (err, userData) {
        if (err) {
          console.log(err)
          res.send(err)
        }
        if (userData === null) {
          res.send({
            code: -1,
            msg: 'No documents found!'
          })
        }
        else {
          if (!!req.query.qnId) {
            for (var i = 0; i < userData.qnData.length; i++) {
              if (userData.qnData[i].qnId === req.query.qnId) {
                res.send({
                  code: 1,
                  msg: `userData'qnId is ${req.query.qnId}`,
                  data: userData.qnData[i]
                })
                break
              }
            }
          }
          else {
            res.send({
              code: 0,
              msg: 'OK',
              data: userData.qnData
            })
          }
        }
      })
  }
  else {
    res.send({
      code: -2,
      msg: 'Please Login!'
    })
  }
})
// 批量删除问卷
app.post('/deleteUserQn', function (req, res) {
  if (req.session.isLogin) {
    if (req.body.qnList) {
      var qnList = JSON.parse(req.body.qnList)
      var len = qnList.length
      var qnDeleted = 0
      qnList.forEach(function (qnId) {
        UserDataModel.update(
          { email: req.session.userInfo.userEmail },
          { $pull : { "qnData": { "qnId": qnId } } },
          function (err) {
            if (err) {
              res.send({
                code: -1,
                msg: '问卷 ' + qnId + ' 删除失败！'
              })
              return console.log(qnId + '删除问卷失败')
            }
            qnDeleted++
            if (qnDeleted === len) {
              res.send({
                code: 0,
                msg: '删除成功！'
              })
            }
          })
      })
    }
    if (req.body.qnId) {
      var qnId = req.body.qnId
      UserDataModel.update(
        { email: req.session.userInfo.userEmail },
        { $pull : { "qnData": { "qnId": qnId } } },
        function (err) {
          if (err) {
            res.send({
              code: -1,
              msg: '问卷 ' + qnId + ' 删除失败！'
            })
            return console.log(qnId + '删除问卷失败')
          }
          res.send({
            code: 1,
            msg: '删除成功！'
          })
        })
    }
  }
})
// 更新用户问卷数据
app.post('/updateUserQnData', function (req, res) {
  if (req.session.isLogin) {
    var crtQnData = JSON.parse(req.body.qnData)
    var editMode = req.body.editMode
    if (editMode === 'modify') {
      // 先删除旧的问卷
      UserDataModel.update(
        { email: req.session.userInfo.userEmail },
        { $pull : { "qnData": { "qnId": crtQnData.qnId } } },
        function (err) {
          if (err) return console.log('问卷 ' + qnId + ' 删除失败')
        })
      // 再插入编辑好的问卷
      UserDataModel.update(
        { email: req.session.userInfo.userEmail },
        { $push: { qnData: crtQnData } },
        function (err) {
          if (err) {
            res.send({
              code: -3,
              msg: '编辑问卷失败'
            })
            return console.log('编辑问卷失败：', err)
          }
          res.send({
            code: 1,
            msg: '编辑问卷成功'
          })
          console.log('编辑问卷成功')
        })
    } else {
      // 插入新建的问卷
      UserDataModel.update(
        { email: req.session.userInfo.userEmail },
        { $push: { qnData: crtQnData } },
        function (err) {
          if (err) {
            res.send({
              code: -2,
              msg: '新增问卷失败'
            })
            return console.log('新增问卷失败：', err)
          }
          res.send({
            code: 0,
            msg: '新增问卷成功'
          })
          console.log('新增问卷成功')
        })
    }
  } else {
    res.send({
      code: -1,
      msg: '用户未登陆'
    })
  }
})
// 通过邮箱查询数据
app.get('/getdatabyemail', function (req, res) {
  var email = req.query.email || ''
  UserDataModel.findOne({ email: email }, { email: 1, _id: 0 }, function (err, doc) {
    if (err) {
      console.log(err)
      res.send(err)
    }
    if (doc === null) {
      res.send({
        code: -1,
        msg: 'No documents found!'
      })
    } else {
      res.send({
        code: 0,
        msg: 'The email already exists!'
      })
    }
  })
})
// 用户注册
app.post('/signup', function (req, res) {
  var _userData = new UserDataModel({
    name: req.body.signupName,
    email: req.body.signupEmail,
    password: req.body.signupPassword
  })
  // 生成 salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) {
      return console.log(err)
    }
    // 给密码加 salt
    bcrypt.hash(_userData.password, salt, function (err, hash) {
      if (err) {
        return console.log(err)
      }
      _userData.password = hash
      // 保存密码
      _userData.save(function (err, results) {
        if (err) {
          console.log(err)
          res.send({
            code: -1,
            msg: 'Something error!'
          })
        }
        req.session.isLogin = true
        req.session.userInfo = {
          userName: req.body.signupName,
          userEmail: req.body.signupEmail
        }
        res.send({
          code: 0,
          msg: 'The registration is successful!'
        })
      })
    })
  })
})
// 用户登录
app.post('/login', function (req, res) {
  var loginEmail = req.body.loginEmail
  var loginPsd = req.body.loginPsd
  UserDataModel.findOne({ email: loginEmail }, {
    name: 1,
    password: 1,
    email: 1
  }, function (err, userInfo) {
    if (err) {
      console.log(err)
    }
    if (!userInfo) {
      res.send({
        code: -1,
        msg: '用户不存在'
      })
      return console.log('用户不存在！')
    }
    userInfo.comparePassword(loginPsd, function (err, isMatch) {
      if (err) {
        console.log(err)
      }
      if (isMatch) {
        req.session.isLogin = true
        req.session.userInfo = {
          userName: userInfo.name,
          userEmail: userInfo.email
        }
        console.log(req.session)
        res.send({
          code: 0,
          msg: '登录成功！'
        })
      } else {
        res.send({
          code: -2,
          msg: '密码错误'
        })
      }
    })
  })
})
// 用户登出
app.post('/signout', function (req, res) {
  req.session.isLogin = false
  res.send({
    code: 0,
    msg: '登出成功！'
  })
})
module.exports = app
