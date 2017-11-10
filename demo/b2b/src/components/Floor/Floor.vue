<template>
  <div class="wrap-floor">

    <div v-for="item in floorData" class="floor">
      <div class="floor-header clearfix">
        <h2 :style="{'background-color': item.bgColor}">
          <div class="title">{{item.title}}</div>
          <div class="more">
            <a :href="item.moreLink">更多></a>
          </div>
        </h2>
        <a class="floor-ad" :href="item.addLink">
          <img :src="item.adImg">
        </a>
      </div>
      <div class="wrap-floor-item clearfix">
        <FloorItem class="youpin-floor-item item-translate" v-for="floorItem in item.list" :floor-item="floorItem" />
      </div>
    </div>

  </div>
</template>

<script>
  import FloorItem from './FloorItem'

  export default {
    name: 'Floor',
    components: {
      FloorItem
    },
    data () {
      return {
        floorData: [
          {
            title: '手机',
            moreLink: '#',
            addLink: '#',
            bgColor: 'tan',
            adImg: 'https://shop.io.mi-img.com/app/shop/img?id=shop_11b8e34fa9d70e171369cebacb7a8c52.jpeg&w=1080&h=501',
            list: [
              {
                name: '飞行员夹克羽绒服 男款',
                des: '飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款',
                price: 123,
                link: '#',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_3ef6fcbc5cbe556a4c0afe6ba6089a2d.jpeg&t=webp'
              },
              {
                name: '飞行员夹克羽绒服 男款',
                des: '飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款',
                price: 123,
                link: '#',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_3ef6fcbc5cbe556a4c0afe6ba6089a2d.jpeg&t=webp'
              },
              {
                name: '飞行员夹克羽绒服 男款',
                des: '飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款',
                price: 123,
                link: '#',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_3ef6fcbc5cbe556a4c0afe6ba6089a2d.jpeg&t=webp'
              },
              {
                name: '飞行员夹克羽绒服 男款',
                des: '飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款',
                price: 123,
                link: '#',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_3ef6fcbc5cbe556a4c0afe6ba6089a2d.jpeg&t=webp'
              },
              {
                name: '飞行员夹克羽绒服 男款',
                des: '飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款',
                price: 123,
                link: '#',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_3ef6fcbc5cbe556a4c0afe6ba6089a2d.jpeg&t=webp'
              },
              {
                name: '飞行员夹克羽绒服 男款',
                des: '飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款',
                price: 123,
                link: '#',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_3ef6fcbc5cbe556a4c0afe6ba6089a2d.jpeg&t=webp'
              },
              {
                name: '飞行员夹克羽绒服 男款',
                des: '飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款',
                price: 123,
                link: '#',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_3ef6fcbc5cbe556a4c0afe6ba6089a2d.jpeg&t=webp'
              },
              {
                name: '飞行员夹克羽绒服 男款',
                des: '飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款',
                price: 123,
                link: '#',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_3ef6fcbc5cbe556a4c0afe6ba6089a2d.jpeg&t=webp'
              }
            ]
          },
          {
            title: '居家',
            moreLink: '#',
            addLink: '#',
            bgColor: 'darkred',
            adImg: 'https://shop.io.mi-img.com/app/shop/img?id=shop_11b8e34fa9d70e171369cebacb7a8c52.jpeg&w=1080&h=501',
            list: [
              {
                name: '飞行员夹克羽绒服 男款',
                des: '飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款',
                price: 123,
                link: '#',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_3ef6fcbc5cbe556a4c0afe6ba6089a2d.jpeg&t=webp'
              },
              {
                name: '飞行员夹克羽绒服 男款',
                des: '飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款',
                price: 123,
                link: '#',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_3ef6fcbc5cbe556a4c0afe6ba6089a2d.jpeg&t=webp'
              },
              {
                name: '飞行员夹克羽绒服 男款',
                des: '飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款',
                price: 123,
                link: '#',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_3ef6fcbc5cbe556a4c0afe6ba6089a2d.jpeg&t=webp'
              },
              {
                name: '飞行员夹克羽绒服 男款',
                des: '飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款',
                price: 123,
                link: '#',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_3ef6fcbc5cbe556a4c0afe6ba6089a2d.jpeg&t=webp'
              },
              {
                name: '飞行员夹克羽绒服 男款',
                des: '飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款',
                price: 123,
                link: '#',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_3ef6fcbc5cbe556a4c0afe6ba6089a2d.jpeg&t=webp'
              },
              {
                name: '飞行员夹克羽绒服 男款',
                des: '飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款',
                price: 123,
                link: '#',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_3ef6fcbc5cbe556a4c0afe6ba6089a2d.jpeg&t=webp'
              },
              {
                name: '飞行员夹克羽绒服 男款',
                des: '飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款',
                price: 123,
                link: '#',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_3ef6fcbc5cbe556a4c0afe6ba6089a2d.jpeg&t=webp'
              },
              {
                name: '飞行员夹克羽绒服 男款',
                des: '飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款',
                price: 123,
                link: '#',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_3ef6fcbc5cbe556a4c0afe6ba6089a2d.jpeg&t=webp'
              }
            ]
          },
          {
            title: '服饰',
            moreLink: '#',
            addLink: '#',
            bgColor: 'tan',
            adImg: 'https://shop.io.mi-img.com/app/shop/img?id=shop_11b8e34fa9d70e171369cebacb7a8c52.jpeg&w=1080&h=501',
            list: [
              {
                name: '飞行员夹克羽绒服 男款',
                des: '飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款',
                price: 123,
                link: '#',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_3ef6fcbc5cbe556a4c0afe6ba6089a2d.jpeg&t=webp'
              },
              {
                name: '飞行员夹克羽绒服 男款',
                des: '飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款',
                price: 123,
                link: '#',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_3ef6fcbc5cbe556a4c0afe6ba6089a2d.jpeg&t=webp'
              },
              {
                name: '飞行员夹克羽绒服 男款',
                des: '飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款',
                price: 123,
                link: '#',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_3ef6fcbc5cbe556a4c0afe6ba6089a2d.jpeg&t=webp'
              },
              {
                name: '飞行员夹克羽绒服 男款',
                des: '飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款',
                price: 123,
                link: '#',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_3ef6fcbc5cbe556a4c0afe6ba6089a2d.jpeg&t=webp'
              },
              {
                name: '飞行员夹克羽绒服 男款',
                des: '飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款',
                price: 123,
                link: '#',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_3ef6fcbc5cbe556a4c0afe6ba6089a2d.jpeg&t=webp'
              },
              {
                name: '飞行员夹克羽绒服 男款',
                des: '飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款',
                price: 123,
                link: '#',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_3ef6fcbc5cbe556a4c0afe6ba6089a2d.jpeg&t=webp'
              },
              {
                name: '飞行员夹克羽绒服 男款',
                des: '飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款',
                price: 123,
                link: '#',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_3ef6fcbc5cbe556a4c0afe6ba6089a2d.jpeg&t=webp'
              },
              {
                name: '飞行员夹克羽绒服 男款',
                des: '飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款飞行员夹克羽绒服 男款',
                price: 123,
                link: '#',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_3ef6fcbc5cbe556a4c0afe6ba6089a2d.jpeg&t=webp'
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="less">
  .floor {
    margin-top: 70px;
  }

  .floor-header {
    h2 {
      float: left;
      position: relative;
      margin-right: 5px;
      .title {
        width: 267px;
        text-align: center;
        line-height: 370px;
        font-size: 36px;
        color: #fff;
      }
      .more {
        position: absolute;
        left: 0;
        bottom: 40px;
        width: 100%;
        text-align: center;
        a {
          font-size: 18px;
          color: #fff;
        }
      }
    }
    .floor-ad {
      float: left;
      width: 808px;
      height: 370px;
      overflow: hidden;
      img {
        display: block;
        width: 100%;
      }
    }
  }

  .wrap-floor-item {
    .youpin-floor-item {
      float: left;
      margin: 4px 4px 0 0;
      &:nth-child(4n) {
        margin-right: 0;
      }
    }
  }
</style>
