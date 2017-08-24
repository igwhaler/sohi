<template>
  <div class="wrap-header">
      <div class="header-item" v-bind:style="{width: headerItemWidth}" v-for="val in headerList">{{val}}</div class="header-item">
  </div>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
        headerList: ['HTML', 'CSS', 'JavaScript', 'Others']
      }
    },
    computed: {
      headerItemWidth () {
        let _len = this.headerList.length
        return Math.floor(100 / _len) + '%'
      }
    },
    created () {
      console.log(this.headerItemWidth)
    }
  }
</script>

<style scoped lang="less">
  .wrap-header {
    overflow: hidden;
    box-shadow: 0 1px 9px 1px tan;
    .header-item {
      float: left;
      width: 33.33%;
      font-size: 16px;
      text-align: center;
      line-height: 60px;
    }
  }
</style>