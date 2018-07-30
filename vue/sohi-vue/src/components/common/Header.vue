<template>
  <div class="wrap-header">
      <div class="header-item" :style="{width: headerItemWidth}" v-for="item in headerList">
        <router-link class="link" :to="item.link">{{item.name}}</router-link>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
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
      // console.log(this.headerItemWidth)
    }
  }
</script>

<style scoped lang="less">
  @baseColor: tan;

  .linkActive() {
    color: #fff;
    background-color: @baseColor;
  }

  .wrap-header {
    overflow: hidden;
    box-shadow: 0 1px 8px 2px #333333b5;
    background-color: #fff;
    .header-item {
      float: left;
      width: 33.33%;
      text-align: center;
      .link {
        display: block;
        line-height: 40px;
        font-size: 16px;
        color: @baseColor;
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