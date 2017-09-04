<template>
  <div class="wrap-header">
      <div class="header-item" v-bind:style="{width: headerItemWidth}" v-for="item in headerList">
        <router-link class="link" :to="item.link">{{item.name}}</router-link>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
        headerList: [
          {
            name: 'HTML',
            link: '/html'
          },
          {
            name: 'CSS',
            link: '/css'
          },
          {
            name: 'JavaScript',
            link: '/js'
          },
          {
            name: 'Others',
            link: '/others'
          }
        ]
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
  .linkActive() {
    background-color: tan;
    color: #fff;
  }

  .wrap-header {
    overflow: hidden;
    box-shadow: 0 1px 9px 1px tan;
    .header-item {
      float: left;
      width: 33.33%;
      text-align: center;
      line-height: 60px;
      .link {
        display: block;
        font-size: 16px;
        color: tan;
        text-decoration: none;
        transition: background-color 0.3s;
        &:hover {
          .linkActive()
        }
      }
      .router-link-active {
        .linkActive()
      }
    }
  }
</style>