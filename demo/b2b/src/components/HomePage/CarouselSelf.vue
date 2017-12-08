<template>
  <div class="carousel-self">
    <el-carousel class="yp-carousel" trigger="click" height="450px" arrow="always">
      <el-carousel-item v-for="(item, index) in carouselList" :key="index">
        <div class="item">
          <a href="#">
            <img :src="item.img">
          </a>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: 'CarouselSelf',
    data () {
      return {
        carouselList: [
          {
            link: '#',
            img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_1d011fa59005ea1f837a27b8300e6cc1.jpeg&w=1080&h=450'
          },
          {
            link: '#',
            img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_d6089b93cd48421a1ed7a49a8adeb055.jpeg&w=1080&h=450'
          },
          {
            link: '#',
            img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_0482f124e79d969db8b0c237fdd82443.jpeg&w=1080&h=450'
          }
        ]
      }
    }
  }
</script>

<style lang="less">
  @hoverColor: #845f40;
  .carousel-self {
    .item {
      a {}
      img {
        display: block;
        width: 100%;
      }
    }
  }
  .yp-carousel {
    .el-carousel__arrow {
      background-color: rgba(193, 193, 193, 0.4);
      font-size: 24px;
      &:hover {
        background-color: @hoverColor;
      }
    }
  }
</style>
