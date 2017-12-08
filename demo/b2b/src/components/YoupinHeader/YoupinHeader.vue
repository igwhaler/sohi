<template>
  <div class="youpin-header">

    <div class="wrap-header">
      <div class="container">
        <header class="clearfix">
          <div class="wrap-site-item">
            <MySite class="site-item" />

            <span class="line"></span>

            <div class="site-item">
              <div class="item">开通企业账户</div>
            </div>
          </div>
        </header>
      </div>
    </div>
  </div>
</template>

<script>
  import MySite from './MySite'

  export default {
    name: 'YoupinHeader',
    components: {
      MySite
    },
    data () {
      return {}
    }
  }
</script>

<style lang="less">
  .wrap-header {
    background-color: #333333;
  }
  .wrap-site-item {
    float: right;
    padding: 10px 0;
    .site-item {
      float: left;
      .item {
        display: inline-block;
        padding: 0 10px;
        font-size: 14px;
        line-height: 30px;
        color: #e7e7e7;
        a {
          color: #e7e7e7;
        }
      }
    }
    .line {
      float: left;
      margin: 8px 14px 0 14px;
      height: 12px;
      border: 1px solid #666;
    }
  }
</style>
