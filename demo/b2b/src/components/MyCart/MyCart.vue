<template>
  <div class="my-cart">

    <div class="cart-header">
      <div class="item select-all">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      </div>
      <div class="item info">商品信息</div>
      <div class="item price">单价</div>
      <div class="item num">数量</div>
      <div class="item totol-price">金额</div>
      <div class="item edit">操作</div>
    </div>

    <div class="cart-main">
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <div v-for="city in cities" class="wrap-item">
          <div class="item select">
            <el-checkbox  :label="city" :key="city"></el-checkbox>
          </div>
          <div class="item info">
            <img src="https://shop.io.mi-img.com/app/shop/img?id=shop_ea431ff24420c53cb3694cfbf02625d5.jpeg&t=webp">
            <span>菌菇礼盒44cmx11.5cmx31cm</span>
          </div>
          <div class="item price">123.00</div>
          <div class="item num">100</div>
          <div class="item totol-price">￥239.00</div>
          <div class="item edit">
            <span class="el-icon-close"></span>
          </div>
        </div>
      </el-checkbox-group>
    </div>

    <div class="cart-checkout">
      <div class="select-all">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      </div>
      <div class="num">已选0件</div>
      <div class="wrap-right">
        <div class="total">合计：￥0.00</div>
        <router-link class="btn btn-checkout" to="/pay">去结算</router-link>
      </div>
    </div>

  </div>
</template>

<script>
  import Youpin from '../../config/Youpin'

  const cityOptions = ['上海', '北京', '广州', '深圳']

  export default {
    name: 'MyCart',
    data () {
      return {
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true
      }
    },
    mounted () {
      this.$http({
        url: Youpin.host + '/app/shopv3/pipe',
        method: 'POST',
        body: {
          'uClassList': {
            'model': 'OeaCart',
            'action': 'List',
            'parameters': {
              'userId': 2200114924
            }
          }
        },
        before: () => {
          // console.log(123)
        }
      }).then(json => {
        console.log(json)
      }, err => {
        console.log(err)
      })
    },
    methods: {
      handleCheckAllChange (val) {
        this.checkedCities = val ? cityOptions : []
        this.isIndeterminate = false
      },
      handleCheckedCitiesChange (value) {
        let checkedCount = value.length
        this.checkAll = checkedCount === this.cities.length
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
      }
    }
  }
</script>

<style lang="less">
  .my-cart {
    padding: 20px 0 100px;
  }

  .cart-header {
    padding: 0 10px;
    overflow: hidden;
    color: #999;
    background-color: #fafafa;
    .item {
      float: left;
      line-height: 42px;
      text-align: center;
    }
    .select-all {
      width: 150px;
      text-align: left;
    }
    .info {
      width: 300px;
    }
    .price {
      width: 100px;
    }
    .num {
      width: 200px;
    }
    .totol-price {
      width: 100px;
    }
    .edit {}
  }

  .cart-main {
    padding-bottom: 100px;
    .wrap-item {
      padding: 0 10px;
      overflow: hidden;
      border-bottom: 1px solid #e7e7e7;
    }
    .item {
      float: left;
      line-height: 140px;
      text-align: center;
      font-size: 14px;
    }
    .info {
      padding-left: 34px;
      width: 400px;
      img {
        float: left;
        width: 120px;
        height: 120px;
      }
      span {
        float: left;
        line-height: 140px;
        margin-left: 10px;
      }
    }
    .price {
      width: 100px;
      color: #c00000;
    }
    .num {
      width: 200px;
    }
    .totol-price {
      width: 100px;
    }
    .edit {
      font-size: 24px;
      color: #999;
      transition: 0.3s;
      &:hover {
        color: #845f3f;
      }
    }

    .el-checkbox__label {
      display: none;
    }
  }

  .cart-checkout {
    padding: 0 10px;
    line-height: 80px;
    font-size: 18px;
    overflow: hidden;
    background-color: #fafafa;
    .select-all {
      float: left;
      .el-checkbox__inner {
        margin-top: -10px;
      }
      .el-checkbox__label {
        font-size: 18px;
      }
    }
    .num {
      float: left;
      margin-left: 30px;
    }
    .wrap-right {
      float: right;
      .total {
        float: left;
        color: #c00000;
      }
      .btn-checkout {
        float: left;
        margin-left: 80px;
        width: 200px;
        text-align: center;
        color: #fff;
        background-color: #a9010d;
      }
    }
  }

  .el-checkbox__input.is-checked .el-checkbox__inner,
  .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #c00000;
    border-color: #c00000;
  }

  .el-checkbox__input.is-focus .el-checkbox__inner, .el-checkbox__inner:hover {
    border-color: #845f3f;
  }

  .el-checkbox__input.is-checked+.el-checkbox__label, .el-checkbox {
    color: #999;
  }
</style>
