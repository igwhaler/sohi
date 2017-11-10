<template>
  <div class="floor-item">
    <a class="content" href="#">
      <img :src="floorItem.img" alt="">
      <p class="des over-ellipsis">{{floorItem.des}}</p>
      <div class="wrap-detail">
        <p class="name">{{floorItem.name}}</p>
        <div class="price">¥{{floorItem.price}}</div>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'FloorItem',
    props: {
      floorItem: {
        type: Object,
        require: true
      }
    }
  }
</script>

<style lang="less" scoped>
  .floor-item {
    width: 265px;
    border: 1px solid #ececec;
    .content {
      img {
        margin: 0 auto;
        display: block;
        width: 195px;
      }
      .des {
        margin-bottom: 16px;
        padding: 0 50px;
        width: 165px;
        font-size: 16px;
        color: #845f3f;
      }
      .wrap-detail {
        text-align: center;
        background-color: #ececec;
        .name {
          padding-top: 12px;
          font-size: 16px;
          color: #333;
        }
        .price {
          padding: 8px 0;
          font-size: 14px;
          color: #c00000;
        }
      }
    }
  }
</style>
