<template>
  <div class="good-item">
    <h2 :id="good.title">{{good.title}}</h2>
    <ul class="list">
      <li v-for="item in good.list" class="item item-translate" @click="handleBuyGood(item.gid)">
        <a href="javascript:;">
          <img v-lazy="item.pic_url || basePic">
          <p class="name">{{item.attr_ext.custom_name}}</p>
          <p class="des over-ellipsis">{{item.attr_ext.custom_summary}}</p>
          <p class="price">¥{{(item.market_price || 0) / 100}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'GoodItem',
    data () {
      return {
        buyGoodState: false,
        basePic: 'https://shop.io.mi-img.com/app/shop/img?id=shop_6b102908ba37c6919113dc19a00df157.jpeg'
      }
    },
    props: {
      good: {
        type: Object,
        required: true
      }
    },
    methods: {
      handleBuyGood (gid) {
        // console.log(gid)
        // this.buyGoodState = true
        this.$emit('showBuyModal', gid)
      }
    }
  }
</script>

<style lang="less" scoped>
  .good-item {
    h2 {
      padding: 4px 0 14px;
      font-size: 24px;
      color: rgb(51, 51, 51);
    }
    .list {
      overflow: hidden;
    }
    .item {
      float: left;
      margin: 10px 6px 0 0;
      width: 265px;
      text-align: center;
      background-color: #fff;
      &:nth-child(4n) {
        margin-right: 0;
      }
      img {
        display: block;
        margin: 0 auto;
        width: 195px;
      }
      .name {
        margin-top: 10px;
        line-height: 26px;
        font-size: 16px;
        color: #333;
      }
      .des {
        padding: 0 20px;
        font-size: 14px;
        color: #999;
      }
      .price {
        line-height: 26px;
        color: #c00000;
      }
    }
  }
</style>