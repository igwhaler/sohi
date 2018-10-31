<template>
  <scroller :show-scrollbar="false">
    <div class="home-page">
      <text style="font-size: 50px;">首页</text>

      <text class="g-btn" @click="jumpArt">跳转文章详情</text>

      <div class="g-container-list">
        <div
          v-for="(art, index) in artList"
          class="g-img"
          :key="index">

          <image class="img" :src="art.cover" alt="封面" />
        </div>
      </div>

      <div class="g-container-list">
        <div class="g-img">
          <image class="img" src="https://ws1.sinaimg.cn/large/bbc609d5ly1ftcp05mzvoj23402c048c.jpg" alt="" />
        </div>

        <div class="g-img">
          <image class="img" src="https://ws1.sinaimg.cn/large/bbc609d5ly1ftcp05mzvoj23402c048c.jpg" alt="" />
        </div>
      </div>

    </div>
  </scroller>
</template>

<script>
let { fetch } = weex.requireModule('stream')
// let modal = weex.requireModule('modal')

export default {
  name: 'Home',

  data () {
    return {
      artList: []
    }
  },

  created () {
    this.getArtList()
  },

  methods: {
    jumpArt (e) {
      this.$router.push('art')
    },

    getArtList () {
      fetch({
        // url: 'http://weex.igwhaler.com/api/graphql?query={articles{list{id,title,summary,cover,created}}}',
        url: `https://igwhaler.com/api/graphql?query=${encodeURIComponent('{articles{list{id,title,summary,cover,created}}}')}`,
        method: 'GET',
        type: 'json'
      }, res => {
        this.artList = res.data.data.articles.list
      })
    }
  }
}
</script>

<style lang="less">
.home-page {}

.g-btn {
  text-align: center;
  font-size: 80px;
  color: tan;
  border-width: 10px;
  border-style: solid;
  border-color: black;
  border-radius: 20px;
}

.g-container-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px 10px 0;
}
.g-img {
  display: flex;
  padding: 10px 0;
}
.img {
  width: 355px;
  height: 200px;
  // box-shadow: 0 0 40px 0px gold;
}
</style>
