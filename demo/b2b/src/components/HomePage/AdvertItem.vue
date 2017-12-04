<template>
  <div class="advert-item">
    <div class="wrap-title clearfix">
      <h2 class="title">热卖<span class="des">超厉害的热卖</span></h2>
      <a class="more" href="#">更多></a>
    </div>
    <div v-if="adList.length" class="advert-main clearfix">
      <div v-for="item in adList" class="item">
        <a href="#">
          <img class="pic" :src="item.link">
          <img class="bg-pic" v-if="item.bgLink" :src="item.bgLink">
          <div class="detail">
            <div class="name over-ellipsis">{{item.name}}</div>
            <div class="des over-ellipsis">{{item.des}}</div>
            <div class="price"><strong class="tip">¥</strong>{{item.price}}</div>
          </div>
        </a>
      </div>
      <div class="item">
        <a href="#">更多推荐></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AdvertItem',
    data () {
      return {
        adList: [
          {
            link: 'https://shop.io.mi-img.com/app/shop/img?id=shop_b6a737a3df84e0a0c7bb7ac9fd682f44.jpeg&w=540&h=846',
            name: '云米智能即热饮水吧',
            des: '预售，12.5起陆续发货',
            price: '599'
          },
          {
            link: 'https://shop.io.mi-img.com/app/shop/img?id=shop_da726d59c27705dedc637fcc169aebdf.png&w=540&h=420',
            name: '云米智能即热饮水吧',
            des: '预售，12.5起陆续发货',
            price: '599'
          },
          {
            link: 'https://shop.io.mi-img.com/app/shop/img?id=shop_4fbdcedea001208d9a506eab79058790.png&w=1080&h=546',
            bgLink: 'https://shop.io.mi-img.com/app/shop/img?id=shop_a72ff778de29ffc7f2cd00056732d33a.jpeg&w=1080&h=420',
            name: '云米智能即热饮水吧',
            des: '预售，12.5起陆续发货',
            price: '599'
          },
          {
            link: 'https://shop.io.mi-img.com/app/shop/img?id=shop_e4992274c36f9f133e0e234b38d10df9.png&w=540&h=420',
            name: '云米智能即热饮水吧',
            des: '预售，12.5起陆续发货',
            price: '599'
          },

          {
            link: 'https://shop.io.mi-img.com/app/shop/img?id=shop_8f56137d0367e6ba890c868ccdd9ea34.png&w=537&h=426',
            name: '云米智能即热饮水吧',
            des: '预售，12.5起陆续发货',
            price: '599'
          }
        ]
      }
    },
    mounted () {
      console.log(123)
    }
  }
</script>

<style lang="less" scoped>
  @hoverColor: #845f40;

  .advert-item {
    margin-top: 70px;
    .wrap-title {
      position: relative;
      z-index: 100;
      .title {
        float: left;
        font-size: 28px;
        font-weight: normal;
        color: #333333;
      }
      .des, .more {
        font-size: 14px;
        color: #999999;
      }
      .des {
        margin-left: 12px;
      }
      .more {
        float: right;
        margin-top: 16px;
        &:hover {
          color: @hoverColor;
        }
      }
    }
    .advert-main {
      margin-top: 20px;
      position: relative;
      .item {
        position: absolute;
        width: 266px;
        height: 206px;
        img {
          display: block;
          height: 100%;
          width: 100%;
        }
        .detail {
          position: absolute;
          top: 20px;
          left: 20px;
        }
        .name {
          width: 180px;
          font-size: 16px;
          color: #4f5152;
        }
        .des {
          margin-top: 2px;
          font-size: 14px;
          color: #999;
        }
        .price {
          margin-top: 8px;
          line-height: 16px;
          font-size: 20px;
          color: #c04343;
          .tip {
            margin-right: 4px;
            font-weight: normal;
          }
        }
      }
      .item:nth-child(1) {
        position: relative;
        margin-right: 5px;
        height: 418px;
      }
      .item:nth-child(2) {
        top: 0;
        left: 271px;
        background-color: rgb(237, 243, 230);
      }
      .item:nth-child(3) {
        width: 538px;
        height: 206px;
        top: 0;
        right: 0;
        .pic {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: auto;
        }
        .bg-pic {}
      }
      .item:nth-child(4) {
        left: 271px;
        bottom: 0;
        background-color: rgb(217, 232, 243);
      }
      .item:nth-child(5) {
        left: 542px;
        bottom: 0;
        background-color: rgb(238, 230, 228);
      }
      .item:nth-child(6) {
        right: 0;
        bottom: 0;
        text-align: center;
        line-height: 206px;
        background-color: #f7f5eb;
        a {
          display: block;
          color: #845f3f;
        }
      }
    }
  }
</style>
