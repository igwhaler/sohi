const App = getApp()
const { $Toast } = require('../../libs/iview/base/index')
Page({
  data: {
    img: ''
  },

  onLoad () {
    console.log(123)
  },

  handlClick (event) {
    console.log(event)

    $Toast({
      content: '报名成功',
      type: 'success'
    })

    wx.chooseImage({
      count: 1,
      success: (res) => {
        console.log(res)

        this.setData({
          img: res.tempFilePaths[0]
        })
      }
    })
  }
})