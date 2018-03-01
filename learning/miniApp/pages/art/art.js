const app = getApp()

Page({
  data: {
    artList: [
      {
        id: 1,
        title: '题都城南庄',
        content: '去年今日此门中，人面桃花相映红。人面不知何处去，桃花依旧笑春风。',
        image: '../../assets/homePage/1.jpg',
        time: '2016-09-23'
      },
      {
        id: 2,
        title: 'Nginx的玩法(一)',
        content: '厉害了我的nginx，你咋这么牛批了？',
        image: '../../assets/homePage/2.jpg',
        time: '2018-01-23'
      }
    ],
    activeArt: {}
  },
  onLoad () {
    let {id} = this.options
    let {artList} = this.data

    let _artItem = artList.filter(item => item.id == id)[0]

    this.setData({
      activeArt: _artItem
    })

    wx.setNavigationBarTitle({
      title: _artItem.title
    })
  }
})