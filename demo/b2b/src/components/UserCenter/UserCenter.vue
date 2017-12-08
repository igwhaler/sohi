<template>
  <div class="user-center">
    <div class="container clearfix">
      <div class="sider-bar">
        <div class="user-info">
          <img src="https://s1.mi-img.com/mfsv2/avatar/fdsc3/p01Z34G5Ku8w/RnSAuSf6pssWy6.jpg" alt="头像">
          <p class="over-ellipsis">大鱼你个锅锅</p>
        </div>
        <ul class="list">
          <li class="item">
            <router-link to="/user/cart">
              <span class="content">我的购物车</span>
            </router-link>
          </li>
          <li class="item">
            <router-link to="/user/orders">
              <span class="content">我的订单</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="main-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserCenter',
    data () {
      return {}
    },
    beforeRouteEnter (to, from, next) {
      console.log(to)
      next()
    }
  }
</script>

<style lang="less" scoped>
  .user-center {
    padding: 40px 0;
    background-color: #f2f2f2;
    .sider-bar {
      float: left;
      height: 600px;
      background-color: #fff;
      .user-info {
        text-align: center;
        padding: 36px 10px;
        border-bottom: 1px solid #f3f3f3;
        img {
          display: inline-block;
          width: 54px;
          height: 54px;
          border-radius: 50%;
        }
        p {
          padding-top: 6px;
        }
      }
      .list {
        padding: 16px 0;
      }
      .item {
        padding: 16px 20px;
        width: 134px;
        a {
          display: inline-block;
          margin-left: 32px;
          color: #333;
        }
        .router-link-active {
          position: relative;
          color: #845f3f;
          &::before {
            content: "";
            position: absolute;
            left: -16px;
            top: 50%;
            margin-top: -3px;
            width: 6px;
            height: 6px;
            background-color: #845f3f;
            border-radius: 50%;
          }
        }
      }
    }
    .main-content {
      float: left;
      margin-left: 6px;
      width: 900px;
      min-height: 600px;
      background-color: #fff;
    }
  }
</style>
