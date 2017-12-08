<template>
  <div class="pay-page">
    <div class="container">
      <div class="address form-item clearfix">
        <span class="label">收货地址</span>
        <div class="content">123123</div>
      </div>

      <div class="delivery-time form-item clearfix">
        <span class="label">发货时间</span>
        <div class="content">
          <el-date-picker
            v-model="value8"
            type="date"
            placeholder="选择发货日期日期"
          >
          </el-date-picker>
        </div>
      </div>

      <div class="invoice-type form-item clearfix">
        <span class="label">发票类型</span>
        <div class="content" @click="changeInvoiceType($event)">
          <div class="type" :class="{active: invoiceType == 1}" data-type="1">不开发票</div>
          <div class="type" :class="{active: invoiceType == 2}" data-type="2">个人发票</div>
          <div class="type" :class="{active: invoiceType == 3}" data-type="3">公司发票</div>
        </div>
      </div>

      <div class="user-message form-item clearfix">
        <span class="label">买家留言</span>
        <div class="content">
          <textarea rows="5"></textarea>
        </div>
      </div>

      <div class="wrap-good-list">
        <h2 class="title">商品信息</h2>
        <div v-for="i in 5" class="wrap-item">
          <div class="item info">
            <img src="https://shop.io.mi-img.com/app/shop/img?id=shop_ea431ff24420c53cb3694cfbf02625d5.jpeg&t=webp">
            <span>菌菇礼盒44cmx11.5cmx31cm</span>
          </div>
          <div class="item price">123.00</div>
          <div class="item num">100</div>
          <div class="item totol-price">￥239.00</div>
        </div>
      </div>

      <div class="wrap-submit-order">
        <div class="submit-order">
          <div class="total">合计：<span class="price">￥2252.00</span></div>
          <div class="wrap-btn-submit">
            <a class="btn-submit" href="javascript:;">提交订单审核</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PayPage',
    data () {
      return {
        value8: '',
        invoiceType: 1
      }
    },
    mounted () {
      //
    },
    methods: {
      changeInvoiceType (e) {
        let _target = e.target
        let _data = _target.dataset
        if (!_data) {
          return false
        }

        this.invoiceType = _data['type']
      }
    }
  }
</script>

<style lang="less">
  .pay-page {
    padding: 40px 0;
    .form-item {
      .label {
        float: left;
        margin-right: 50px;
        width: 100px;
        line-height: 90px;
        font-size: 20px;
        color: #333;
      }
      .content {
        float: left;
      }
    }

    .address {}

    .delivery-time {
      .content {
        padding-top: 22px;
      }
    }

    .invoice-type {
      .content {
        padding: 22px 0;
      }
      .type {
        float: left;
        margin-right: 10px;
        width: 250px;
        text-align: center;
        line-height: 44px;
        color: #333;
        border: 1px solid #e7e7e7;
        cursor: pointer;
        transition: 0.2s ease-out;
      }
      .type.active {
        color: #845f3f;
        border-color: #845f3f;
      }
    }

    .user-message {
      .content {
        padding: 22px 0;
        textarea {
          padding: 6px 10px;
          width: 760px;
          font-size: 14px;
          line-height: 1.5em;
          border-radius: 2px;
          border: 1px solid #e7e7e7;
          outline: none;
          transition: 0.3s ease-out;
          &:focus {
            border-color: #845f3f;
          }
        }
      }
    }

    .wrap-good-list {
      .title {
        padding: 30px 0 20px;
        font-size: 20px;
        color: #333;
        border-bottom: 1px solid #e7e7e7;
      }
      .wrap-item {
        overflow: hidden;
        border-bottom: 1px solid #e7e7e7;
      }
      .item {
        float: left;
        line-height: 120px;
        text-align: center;
        font-size: 14px;
      }
      .info {
        width: 400px;
        img {
          float: left;
          width: 120px;
          height: 120px;
        }
        span {
          float: left;
          line-height: 120px;
          margin-left: 10px;
        }
      }
      .price {
        width: 100px;
        color: #c00000;
      }
      .num {
        width: 400px;
      }
      .totol-price {
        padding-right: 20px;
        width: 160px;
        text-align: right;
      }
    }

    .wrap-submit-order {
      overflow: hidden;
      .submit-order {
        float: right;
      }
      .total {
        padding: 40px 0 20px;
        font-size: 18px;
        text-align: right;
        .price {
          color: #c00000;
        }
      }
      .wrap-btn-submit {
        float: right;
        .btn-submit {
          display: inline-block;
          width: 180px;
          text-align: center;
          line-height: 50px;
          font-size: 20px;
          color: #fff;
          background-color: #845f3f;
          border-color: #845f3f;
          border-radius: 2px;
          transition: 0.2s;
          &:hover {
            color: #fff;
            background-color: #d1bfa6;
            border-color: #d1bfa6;
          }
        }
      }
    }
  }

  .el-input.is-active .el-input__inner,
  .el-input__inner:focus {
    border-color: #845f3f;
  }
  .el-date-table td.current:not(.disabled) span {
    color: #fff;
    background-color: #845f3f;
  }
  .el-date-picker__header-label.active,
  .el-date-picker__header-label:hover,
  .el-year-table td .cell:hover,
  .el-year-table td.current:not(.disabled) .cell,
  .el-month-table td .cell:hover,
  .el-month-table td.current:not(.disabled) .cell,
  .el-date-table td.available:hover,
  .el-date-table td.today span {
    color: #845f3f;
  }
</style>