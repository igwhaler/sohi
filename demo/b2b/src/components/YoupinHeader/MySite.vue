<template>
  <div class="my-site">
    <div v-if="isLogin" class="is-login">
      <a href="/user/cart" target="_blank">
        <img class="pic" src="https://s1.mi-img.com/mfsv2/avatar/fdsc3/p01Z34G5Ku8w/RnSAuSf6pssWy6.jpg" alt="头像">
        <div class="item name">大鱼你你个锅锅</div>
      </a>
      <i class="icon el-icon-arrow-down"></i>
      <div class="drop-menu">
        <ul class="list">
          <li>
            <a href="/user/cart" target="_blank">我的购物车</a>
          </li>
          <li>
            <a href="/user/orders" target="_blank">我的订单</a>
          </li>
          <li>
            <a href="#">退出登录</a>
          </li>
        </ul>
      </div>
    </div>
    <div v-else class="not-login" style="float:left;">
      <div class="item">
        <a class="login" href="javascript:;">登录</a>
        <a class="register" href="javascript:;">注册</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MySite',
    data () {
      return {
        isLogin: true
      }
    }
  }
</script>

<style lang="less">
  @itemHeight: 40px;
  @itemLength: 3;

  .my-site {
    .is-login {
      float: left;
      position: relative;
      .icon {
        margin-left: -8px;
        margin-right: 10px;
        line-height: 30px;
        font-weight: bold;
        color: #e7e7e7;
      }
      .pic {
        float: left;
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
      .name {
        float: left;
        width: 70px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      &:hover {
        .drop-menu {
          display: block;
          height: @itemHeight*@itemLength;
          opacity: 1;
        }
      }
      .drop-menu {
        z-index: 2000;
        position: absolute;
        top: 26px;
        right: 10px;
        padding-top: 14px;
        height: 0;
        opacity: 0;
        overflow: hidden;
        box-shadow: 0 3px 28px rgba(0,0,0,.1);
        transition: height 0.1s ease-in;
        li {
          a {
            display: block;
            width: 100px;
            text-align: center;
            line-height: @itemHeight;
            font-weight: 400;
            font-size: 14px;
            color: #666;
            background-color: #fff;
            &:hover {
              background: #845f3f;
              color: #fff;
            }
          }
        }
      }
    }
    .not-login {
      .login {
        margin-right: 10px;
      }
      .register {

      }
    }
  }
</style>
