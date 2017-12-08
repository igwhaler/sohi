<template>
  <div class="nav-menu">
    <div class="container">
      <ul class="list clearfix">
        <li class="item" v-for="(item, index) in navList">
          <a :href="'#' + item.name">{{item.name}}</a>
        </li>
      </ul>

      <!-- 下拉框 -->
      <!-- <div v-if="navContent.list" class="content clearfix">

        <ul class="content-list">
          <li v-for="item in navContent.list.slice(0, 9)">
            <a :href="item.link + '#' + item.val" target="_blank">
              <img :src="item.img">
              <div class="val">{{item.val}}</div>
            </a>
          </li>
        </ul>

        <div v-if="navContent && navContent.list.length > 9" class="more">
          <a :href="navContent.moreLink">更多>></a>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavMenu',
    data () {
      return {
        navContent: [],

        navList: [
          {
            name: '首页',
            link: '/',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '居家',
                  link: '/goodlist'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '手机',
            link: '/goodlist?gid=123',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '居家',
                  link: '/goodlist'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '居家',
            link: '/goodlist',
            content: {
              list: [
                {
                  img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_7d70b4739a00b28cbe76ce33a81a9e6d.jpeg&w=480&h=480',
                  val: '手机',
                  link: '/goodlist'
                },
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '/goodlist'
                },
                {
                  img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_7d70b4739a00b28cbe76ce33a81a9e6d.jpeg&w=480&h=480',
                  val: '手机',
                  link: '/goodlist'
                },
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '/goodlist'
                },
                {
                  img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_7d70b4739a00b28cbe76ce33a81a9e6d.jpeg&w=480&h=480',
                  val: '手机',
                  link: '/goodlist'
                },
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '/goodlist'
                },
                {
                  img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_7d70b4739a00b28cbe76ce33a81a9e6d.jpeg&w=480&h=480',
                  val: '手机',
                  link: '/goodlist'
                },
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '/goodlist'
                },
                {
                  img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_7d70b4739a00b28cbe76ce33a81a9e6d.jpeg&w=480&h=480',
                  val: '手机',
                  link: '/goodlist'
                },
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '/goodlist'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '服饰',
            link: '/goodlist',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '/goodlist'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '餐厨',
            link: '/goodlist',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '/goodlist'
                },
                {
                  img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_7d70b4739a00b28cbe76ce33a81a9e6d.jpeg&w=480&h=480',
                  val: '手机',
                  link: '/goodlist'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '影音',
            link: '/goodlist',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '/goodlist'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '家电',
            link: '/goodlist',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '/goodlist'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '饮食',
            link: '/goodlist',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '/goodlist'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '健康',
            link: '/goodlist',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '/goodlist'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '洗护',
            link: '/goodlist',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '/goodlist'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '日杂',
            link: '/goodlist',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '/goodlist'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '智能',
            link: '/goodlist',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '/goodlist'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '箱包',
            link: '/goodlist',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '/goodlist'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '配件',
            link: '/goodlist',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '/goodlist'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '婴童',
            link: '/goodlist',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '/goodlist'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '出行',
            link: '/goodlist',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '/goodlist'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '品牌',
            link: '/goodlist',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '/goodlist'
                }
              ],
              moreLink: '#'
            }
          }
        ]
      }
    },
    methods: {
      handleOver (index) {
        let {navList} = this

        this.navContent = navList[index].content
      }
    }
  }
</script>

<style lang="less" scoped>
  .nav-menu {
    padding-top: 30px;
    background-color: #fff;
    .container {
      position: relative;
    }
    .list {}
    .item {
      float: left;
      a {
        display: inline-block;
        padding-right: 35px;
        padding-bottom: 20px;
        line-height: 1.5em;
        font-size: 14px;
        color: #333;
        &:hover {
          color: #845f3f;
        }
      }
    }
    &:hover {
      .content {
        opacity: 1;
        height: 144px;
      }
    }
    .content {
      z-index: 2000;
      opacity: 0;
      position: absolute;
      top: 40px;
      left: 0;
      width: 100%;
      height: 0;
      overflow: hidden;
      border: 1px solid #e7e7e7;
      transition: height 0.2s ease-in;
      background-color: #fff;
      .content-list {
        padding: 20px 0;
        float: left;
        li {
          float: left;
          margin: 0 14px;
        }
        a {
          font-size: 14px;
          color: #333;
          &:hover {
            color: #845f3f;
          }
        }
        img {
          width: 80px;
          height: 80px;
        }
        .val {
          margin-top: 5px;
          font-size: 14px;
          text-align: center;
        }
      }
      .more {
        float: left;
        width: 80px;
        text-align: center;
        line-height: 144px;
        a {
          font-size: 14px;
          color: #333;
          &:hover {
            color: #845f3f;
          }
        }
      }
    }
  }
</style>
