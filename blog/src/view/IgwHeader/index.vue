<template>
  <div class="igw-header">
    <div class="header-main">
      <div class="self-info">
        <div class="logo">
          <img src="../../assets/images/logo.png" alt="大鱼你个锅锅LOGO" title="大鱼你个锅锅">
        </div>
        <h1 class="desc">
          <div>大鱼你个锅锅</div>
          <p>锅锅太懒, 啥都没留下~</p>
        </h1>
        <div class="menu">
          <ul class="clearfix">
            <li>
              <router-link to="/">首页</router-link>
            </li>
            <li>
              <router-link to="/html">HTML</router-link>
            </li>
            <li>
              <router-link to="/css">CSS</router-link>
            </li>
            <li>
              <router-link to="/js">Javascript</router-link>
            </li>
            <li>
              <router-link to="/others">杂项</router-link>
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

<style lang="less" scoped>
.igw-header {
  padding: 50px 0 40px 0;
  .header-main {
    padding: 25px 30px;
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
          font-size: 26px;
          color: #4c4c4c;
        }
        p {
          margin-top: 4px;
          font-size: 12px;
          color: #9d9d9d;
          line-height: 1.5em;
        }
      }
      .menu {
        margin: 4px 0 0 105px;
        padding-top: 10px;
        ul {
          li {
            float: left;
            margin-right: 14px;
            a {
              display: inline-block;
              padding: 0 10px;
              font-size: 16px;
              color: #fff;
              line-height: 1.5em;
              background-color: #828d95;
              transition: 0.4s;
              white-space: nowrap;
              border-radius: .75em;
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
</style>
