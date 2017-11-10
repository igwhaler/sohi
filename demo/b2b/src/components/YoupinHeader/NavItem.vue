<template>
  <div class="nav-item">

    <ul class="list clearfix">
      <li class="item" v-for="(item, index) in navList" @mouseover="handleOver(index)">
        <a href="#">{{item.name}}</a>
      </li>
    </ul>

    <div v-if="navContent.list" class="content clearfix">

      <ul class="content-list">
        <li v-for="item in navContent.list.slice(0, 9)">
          <a :href="item.link">
            <img :src="item.img">
            <div class="val">{{item.val}}</div>
          </a>
        </li>
      </ul>

      <div v-if="navContent && navContent.list.length > 9" class="more">
        <a :href="navContent.moreLink">更多>></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavItem',
    data () {
      return {
        navContent: [],

        navList: [
          {
            name: '手机',
            link: '#',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '#'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '居家',
            link: '#',
            content: {
              list: [
                {
                  img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_7d70b4739a00b28cbe76ce33a81a9e6d.jpeg&w=480&h=480',
                  val: '手机',
                  link: '#'
                },
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '#'
                },
                {
                  img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_7d70b4739a00b28cbe76ce33a81a9e6d.jpeg&w=480&h=480',
                  val: '手机',
                  link: '#'
                },
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '#'
                },
                {
                  img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_7d70b4739a00b28cbe76ce33a81a9e6d.jpeg&w=480&h=480',
                  val: '手机',
                  link: '#'
                },
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '#'
                },
                {
                  img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_7d70b4739a00b28cbe76ce33a81a9e6d.jpeg&w=480&h=480',
                  val: '手机',
                  link: '#'
                },
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '#'
                },
                {
                  img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_7d70b4739a00b28cbe76ce33a81a9e6d.jpeg&w=480&h=480',
                  val: '手机',
                  link: '#'
                },
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '#'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '服饰',
            link: '#',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '#'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '餐厨',
            link: '#',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '#'
                },
                {
                  img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_7d70b4739a00b28cbe76ce33a81a9e6d.jpeg&w=480&h=480',
                  val: '手机',
                  link: '#'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '影音',
            link: '#',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '#'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '家电',
            link: '#',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '#'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '饮食',
            link: '#',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '#'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '健康',
            link: '#',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '#'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '洗护',
            link: '#',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '#'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '日杂',
            link: '#',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '#'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '智能',
            link: '#',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '#'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '箱包',
            link: '#',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '#'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '配件',
            link: '#',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '#'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '婴童',
            link: '#',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '#'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '出行',
            link: '#',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '#'
                }
              ],
              moreLink: '#'
            }
          },
          {
            name: '品牌',
            link: '#',
            content: {
              list: [
                {
                  img: 'https://static.home.mi.com/app/shop/img?id=shop_5fa921d3ff04c40c54756518e7f429b3.jpeg&w=600&h=600',
                  val: '手机',
                  link: '#'
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
  .nav-item {
    position: relative;
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
