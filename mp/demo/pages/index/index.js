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
