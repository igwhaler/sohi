<template>
  <div class="order-item">
    <div v-for="order in cart.orderList" class="order">
      <div class="header">
        <div class="date">订单日期：{{order.date}}</div>
        <div class="state-1">{{order.state1}}</div>
        <div class="state-2">{{order.state2}}</div>
      </div>
      <div class="content">
        <div class="wrap-detail">
          <img :src="order.img">
          <div class="detail">
            <p class="des">{{order.des}}</p>
            <p class="price">￥{{order.price}}</p>
          </div>
        </div>
        <div class="num">X<span>{{order.num}}</span></div>
      </div>
    </div>

    <div class="common">
      <div class="wrap-price">
        <div class="price">共一件商品, 订单总金额为: <span>{{cart.totalPrice}}元</span></div>
      </div>

      <div class="wrap-btn">
        <a class="btn" href="javascript:;">立即支付</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'OrderItem',
    data () {
      return {}
    },
    props: {
      cart: {
        require: true,
        type: Object
      }
    }
  }
</script>

<style lang="less" scoped>
  .order-item {
    padding: 30px 0px 15px;
    border-bottom: 1px solid #e7e7e7;
    .order {
      border-bottom: 1px dashed #e7e7e7;
      padding-right: ;
      padding: 10px 32px 10px 0;
      .header, .content {
        overflow: hidden;
      }
      .header {
        margin-bottom: 15px;
        .date {
          float: left;
          margin-right: 10px;
          color: #4a4a4a;
        }
        .state-1 {
          float: left;
          color: #666;
        }
        .state-2 {
          float: right;
          color: #845f3f;
        }
      }
      .content {
        .wrap-detail {
          float: left;
          img {
            float: left;
            margin-right: 25px;
            width: 120px;
            height: 120px;
          }
          .detail {
            float: left;
            padding-top: 36px;
          }
          .des {
            margin-bottom: 10px;
          }
          .price {
            color: #be2d2d;
          }
        }
        .num {
          float: right;
          line-height: 120px;
          color: #845f3f;
          span {
            margin-left: 10px;
          }
        }
      }
    }

    .common {
      padding-right: 32px;
      .wrap-price, .wrap-btn {
        overflow: hidden;
      }
      .wrap-price {
        .price {
          float: right;
          padding: 25px 0px 20px;
          span {
            color: #be2d2d;
          }
        }
      }
      .wrap-btn {
        .btn {
          float: right;
          min-width: 110px;
          text-align: center;
          line-height: 34px;
          font-size: 16px;
          color: #fff;
          background-color: #845f3f;
          border: 1px solid #845f3f;
          border-radius: 2px;
        }
      }
    }
  }

</style>
