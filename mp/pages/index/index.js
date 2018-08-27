//index.js
const { API_URL } = require('./../../config/api.js')
const DateFormat = require('dateformat')

//获取应用实例
const App = getApp()

Page({
  data: {
    isLoading: true,
    artList: []
  },

  onLoad () {
    this.getArtList()
  },

  onShow () {
    wx.redirectTo({
      url: '/pages/others/others'
    })

    let { artList } = App.globalData

    this.setData({ artList })
  },

  getArtList () {
    wx.request({
      url: API_URL,
      method: 'GET',
      data: {
        query: `{articles{list{id,title,summary,cover,created}}}`
      },
      success: (res) => {
        let { articles } = res.data.data || {}

        this.setArtList(articles.list)
        this.setData({isLoading: false})
      }
    })
  },

  setArtList (list) {
    let artList = list.map(item => {
      let { created } = item

      item.created = DateFormat(created, 'yyyy-mm-dd')

      return item
    })

    this.setData({ artList })
    App.globalData.artList = artList
  }
})


/* Page({
  data: {
    title: '大鱼你个锅锅',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    artList: [
      {
        id: 1,
        title: '题都城南庄',
        content: '去年今日此门...',
        image: '../../assets/homePage/1.jpg',
        time: '2016-09-23'
      },
      {
        id: 2,
        title: 'Nginx的玩法(一)',
        content: '厉害了我的nginx...',
        image: '../../assets/homePage/2.jpg',
        time: '2018-01-23'
      }
    ]
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  onShow () {
    // console.log(getCurrentPages());
  },

  onShareAppMessage: function () {
    let {route, data} = this
    let {title} = data

    return {
      title,
      path: route
    }
  },

  //事件处理函数
  handleShowLog: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  handleViewTap: function () {
    this.setData({
      motto: 123
    }, () => {
      console.log(this, 123)
    })

    wx.navigateTo({
      url: '../art/art'
    })
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  getLogin () {
    wx.login({
      success: function (res) {
        console.log(res)
      }
    })
  }
}) */
