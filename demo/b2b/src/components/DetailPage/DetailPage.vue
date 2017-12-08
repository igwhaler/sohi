<template>
  <div class="detail-page">
   <div class="container">
     <div v-if="detailState" class="wrap-detail clearfix">
      <div class="preview wrap-carousel">
        <el-carousel trigger="click" indicator-position="none" height="430px">
          <el-carousel-item v-for="(img, key) in good.album" :key="key">
            <img v-lazy="img">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="detail">
        <h2 class="name">{{good.attr_ext.custom_name}}</h2>
        <p class="summary">{{good.attr_ext.custom_summary}}</p>

        <div class="price item">
          <span class="label">售价</span>
          <div class="content">¥{{(good.market_price || 0) / 100}}</div>
        </div>

        <div v-for="ig in group" class="wrap-tag item">
          <span class="label">{{ig.name}}</span>
          <div class="content">
            <div class="tag selected" v-for="tag in ig.tags">{{tag.name}}</div>
          </div>
        </div>

        <div class="num item">
          <span class="label">数量</span>
          <div class="content">
            <el-input-number v-model="num1" :min="1" :max="10" label="描述文字"></el-input-number>
          </div>
        </div>

        <div class="wrap-btn">
          <a class="btn btn-buy" href="javascript:;">立即购买</a>
          <a class="btn btn-addcart" href="javascript:;">加入购物车</a>
        </div>
      </div>
     </div>
   </div>
  </div>
</template>

<script>
  import Youpin from '../../config/Youpin'

  export default {
    name: 'DetailPage',
    data () {
      return {
        num1: '',
        detailState: false,
        good: {},
        group: []
      }
    },
    beforeRouteEnter (to, from, next) {
      let {gid} = to.query

      next(vm => {
        vm.getGoodDetail(gid).then(res => {
          console.log(res)
          if (res) {
            vm.detailState = true
            vm.good = res.data.good
            vm.group = res.data.group
          }
        })
      })
    },
    mounted () {

    },
    methods: {
      getGoodDetail (gid) {
        return this.$http({
          url: Youpin.goodDEtailHost + '/app/shop/pipe',
          method: 'POST',
          emulateJSON: true,
          body: {
            data: JSON.stringify({
              'qiye': {
                'model': 'Shopv2',
                'action': 'getDetail',
                'parameters': {
                  gid
                }
              }
            })
          },
          before: () => {
            // console.log(123)
          }
        }).then(json => {
          let res = json && json.body && json.body.result && json.body.result.qiye

          return res
        }, err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style lang="less">
  .detail-page {
    padding-top: 40px;
    border-top: 1px solid #e7e7e7;
    .wrap-detail {
      .preview {
        float: left;
      }
      .wrap-carousel {
        margin-right: 42px;
        width: 366px;
        background-color: #f4f4f4;
        border: 1px solid #ececec;
        img {
          display: block;
          width: 366px;
          height: 430px;
        }
      }
      .detail {
        padding-right: 20px;
        width: 650px;
        float: left;
        .name {
          margin-bottom: 6px;
          line-height: 26px;
          font-size: 20px;
          color: #333;
        }
        .summary {
          margin-bottom: 20px;
          line-height: 18px;
          font-size: 12px;
          color: #999;
        }
        .item {
          overflow: hidden;
          margin-bottom: 16px;
          .label {
            float: left;
            margin-right: 10px;
            width: 48px;
            line-height: 36px;
            text-align: left;
            font-size: 12px;
          }
          .content {
            margin-left: 58px;
            line-height: 36px;
          }
        }
        .price {
          .content {
            font-size: 30px;
            color: #c00000;
          }
        }
        .wrap-tag {
          .content {
            .tag {
              float: left;
              margin-right: 14px;
              margin-bottom: 10px;
              padding: 0 20px;
              color: #333;
              border: 1px solid #333;
              cursor: pointer;
            }
            .tag.selected {
              color: #845f3f;
              border: 1px solid #845f3f;
            }
          }
        }
        .num {

        }
        .wrap-btn {
          .btn {
            display: inline-block;
            min-width: 166px;
            height: 52px;
            text-align: center;
            line-height: 50px;
            font-size: 20px;
            border: 1px solid #666;
            border-radius: 2px;
          }
          .btn-buy {
            margin-right: 15px;
            color: #845f3f;
            border-color: #845f3f;
          }
          .btn-addcart {
            color: #fff;
            background-color: #845f3f;
            border-color: #845f3f;
          }
        }
      }
    }
  }
</style>
