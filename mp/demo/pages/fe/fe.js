//fe.js
//获取应用实例
const app = getApp()

Page({
  data: {
    message: 123123
  },
  onLoad () {
    console.log(this)
    console.log(app)
    console.log(wx)
  },

  onUnload () {
    console.log(123)
  },

  onShow () {
    // console.log(app)
  }
})
