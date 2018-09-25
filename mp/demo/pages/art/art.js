const GetTowxml = require('../../towxml/main')
const { API_URL } = require('./../../config/api.js')
const App = getApp()
const Towxml = new GetTowxml()

Page({
  data: {
    isLoading: false,
    artDetail: ''
  },
  onLoad () {
    let {id} = this.options

    this.getArtDetail(id)
  },

  getArtDetail (id) {
    wx.request({
      url: API_URL,
      method: 'GET',
      data: {
        query: `{artDetail(id: ${id}){detail,md}}`
      },
      success: (res) => {
        let { artDetail } = res.data.data
        this.setArtDetail(id, artDetail)
      }
    })
  },

  setArtDetail(id, artDetail) {
    let { artList } = App.globalData
    let selfArt = artList.find(item => item.id == id)

    wx.setNavigationBarTitle({
      title: selfArt.title
    })

    let data = Towxml.toJson(artDetail.md, 'markdown')
    data.theme = 'light';

    this.setData({
      artDetail: data
    })
  }
})