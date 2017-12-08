<template>
  <div class="my-orders">
    <ul class="order-menu" @click="changeOrderTab($event)">
      <li :class="{active: orderTabState == 1}" data-state="1">待审核(123)</li>
      <li :class="{active: orderTabState == 2}" data-state="2">待收货(0)</li>
      <li :class="{active: orderTabState == 3}" data-state="3">待付款(1)</li>
      <li :class="{active: orderTabState == 4}" data-state="4">已收货</li>
      <li :class="{active: orderTabState == 5}" data-state="5">全部订单</li>
    </ul>

    <div class="order-content">
      <OrderItem v-for="(cart, key) in orders" :key="key" :cart="cart"/>

      <div v-if="orders && !orders.length" class="loading">
        <img src="../../assets/loading.gif">
      </div>
      <div v-if="orders && !orders.length" class="none">
        <img src="../../assets/no-order.png">
        <p>没有订单相关的数据</p>
      </div>
    </div>
  </div>
</template>

<script>
  import OrderItem from './OrderItem'

  export default {
    name: 'MyOrders',
    components: {
      OrderItem
    },
    data () {
      return {
        orderTabState: 1,

        orders: [
          {
            totalPrice: 1234,
            orderList: [
              {
                date: '2017/11/13 13:40:58',
                state1: '订单即将关闭',
                state2: '待付款',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_e7e2f2985eb21aac08c164cfc33e2ed9.jpeg',
                des: '小米6 全网通版 4GB内存 亮蓝色 64GB',
                price: 12312,
                num: 123
              }
            ]
          },
          {
            totalPrice: 1234,
            orderList: [
              {
                date: '2017/11/13 13:40:58',
                state1: '订单即将关闭',
                state2: '待付款',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_e7e2f2985eb21aac08c164cfc33e2ed9.jpeg',
                des: '小米6 全网通版 4GB内存 亮蓝色 64GB',
                price: 12312,
                num: 123
              }
            ]
          },
          {
            totalPrice: 1234,
            orderList: [
              {
                date: '2017/11/13 13:40:58',
                state1: '订单即将关闭',
                state2: '待付款',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_e7e2f2985eb21aac08c164cfc33e2ed9.jpeg',
                des: '小米6 全网通版 4GB内存 亮蓝色 64GB',
                price: 12312,
                num: 123
              }
            ]
          },
          {
            totalPrice: 1234,
            orderList: [
              {
                date: '2017/11/13 13:40:58',
                state1: '订单即将关闭',
                state2: '待付款',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_e7e2f2985eb21aac08c164cfc33e2ed9.jpeg',
                des: '小米6 全网通版 4GB内存 亮蓝色 64GB',
                price: 12312,
                num: 123
              }
            ]
          },
          {
            totalPrice: 1234,
            orderList: [
              {
                date: '2017/11/13 13:40:58',
                state1: '订单即将关闭',
                state2: '待付款',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_e7e2f2985eb21aac08c164cfc33e2ed9.jpeg',
                des: '小米6 全网通版 4GB内存 亮蓝色 64GB',
                price: 12312,
                num: 123
              }
            ]
          },
          {
            totalPrice: 1234,
            orderList: [
              {
                date: '2017/11/13 13:40:58',
                state1: '订单即将关闭',
                state2: '待付款',
                img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_e7e2f2985eb21aac08c164cfc33e2ed9.jpeg',
                des: '小米6 全网通版 4GB内存 亮蓝色 64GB',
                price: 12312,
                num: 123
              }
            ]
          }
        ]
      }
    },
    methods: {
      changeOrderTab (e) {
        let _target = e.target
        if (_target.tagName !== 'LI') {
          return false
        }

        let {state} = _target.dataset
        if (state == this.orderTabState) {
          return false
        }

        this.orderTabState = state
      }
    }
  }
</script>

<style lang="less" scoped>
  .my-orders {
    padding: 10px 0 10px 60px;
  }
  .order-menu {
    overflow: hidden;
    border-bottom: 1px solid #e7e7e7;
    li {
      float: left;
      margin-right: 40px;
      padding: 6px 0;
      font-size: 16px;
      color: #333;
      border-bottom: 2px solid #fff;
      cursor: pointer;
    }
    li.active {
      color: #845f3f;
      border-color: #845f3f;
    }
  }
  .order-content {
    .loading {

    }
    .loading, .none {
      padding: 100px 40px 0 0;
      text-align: center;
    }
    .loading {
      img {
        width: 100px;
      }
    }
    .none {
      img {
        width: 152px;
      }
      p {
        line-height: 4em;
      }
    }
  }
</style>
