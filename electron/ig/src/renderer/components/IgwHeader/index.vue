<template>
  <div class="igw-header">
    <div class="header-main">
      <div class="self-info">
        <div class="logo">
          <img
            src="../../assets/images/logo.png"
            alt="大鱼你个锅锅LOGO"
            title="大鱼你个锅锅">
        </div>
        <h1 class="desc">
          <div>大鱼你个锅锅</div>
          <p>锅锅太懒, 啥都没留下~</p>
        </h1>
        <div class="menu is-mobile">
          <ul class="clearfix">
            <li>
              <router-link to="/">首页</router-link>
            </li>
            <li>
              <router-link to="/">前端</router-link>
            </li>
            <li>
              <router-link to="/">杂项</router-link>
            </li>
          </ul>
        </div>

        <div class="menu is-pc">
          <ul class="clearfix">
            <li>
              <router-link to="/">首页</router-link>
            </li>
            <li>
              <router-link to="/">HTML</router-link>
            </li>
            <li>
              <router-link to="/">CSS</router-link>
            </li>
            <li>
              <router-link to="/">Javascript</router-link>
            </li>
            <li>
              <router-link to="/">杂项</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IgwHeader'
}
</script>

<style lang="less">
.igw-header {
  padding: 0px 0 20px 0;
  .header-main {
    padding: 16px;
    background-color: #fff;
    .self-info {
      overflow: hidden;
      .logo {
        float: left;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        img {
          width: 100%;
        }
      }
      .desc {
        margin-left: 105px;
        font-weight: normal;
        div {
          font-size: 18px;
          color: #4c4c4c;
        }
        p {
          font-size: 12px;
          color: #9d9d9d;
          line-height: 1.5em;
        }
      }
      .menu {
        margin-left: 105px;
        padding-top: 10px;
        &.is-mobile {
          display: block;
        }
        &.is-pc {
          display: none;
        }
        ul {
          li {
            float: left;
            margin-right: 14px;
            a {
              display: inline-block;
              padding: 0 10px;
              font-size: 14px;
              color: #fff;
              line-height: 1.75em;
              background-color: #828d95;
              transition: 0.4s;
              white-space: nowrap;
              border-radius: 0.75em;
              &:hover {
                background-color: #4d4d4d;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width: 800px) {
  .igw-header {
    padding: 30px 0 30px 0;
    .header-main {
      padding: 25px 30px;
      .self-info {
        .desc {
          div {
            font-size: 22px;
          }
        }
        .menu {
          &.is-mobile {
            display: none;
          }
          &.is-pc {
            display: block;
          }
        }
      }
    }
  }
}
</style>
