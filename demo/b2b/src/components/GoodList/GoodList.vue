<template>
  <div class="good-list">
    <div class="container">
      <GoodItem v-on:showBuyModal="showModal" v-for="(good, key) in goodList" :good="good" :key="key" />
    </div>
    <el-dialog title="商品详情" :visible.sync="dialogTableVisible" :close-on-press-escape="false" :close-on-click-modal="false">
      <div v-if="dialogTableVisible" class="detail">
        <h2 class="name">{{good.attr_ext.custom_name}}</h2>
        <p class="summary">{{good.attr_ext.custom_summary}}</p>

        <div class="price item">
          <span class="label">售价</span>
          <div class="content">¥{{(good.market_price || 0) / 100}}</div>
        </div>

        <div class="group">
          <div v-for="(ig, index) in group" class="wrap-tag item" @click="handleSelectTag($event, index)">
            <span class="label">{{ig.name}}</span>
            <div class="content">
              <a href="javascript:;" data-type="tag" class="tag" v-for="(tag, order) in ig.tags" :class="{'selected': tagsSelected[index] && tagsSelected[index].order == order}"  :data-tid="tag.tid" :data-order="order">{{tag.name}}</a>
            </div>
          </div>
        </div>


        <div class="num item">
          <span class="label">数量</span>
          <div class="content">
            <el-input-number v-model="num1" :min="1" :max="10" label="描述文字"></el-input-number>
          </div>
        </div>

        <div class="wrap-btn">
          <a class="btn btn-buy" href="javascript:;" @click="handleAddCart">立即购买</a>
          <a class="btn btn-addcart" href="javascript:;" @click="handleBuyNow">加入购物车</a>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import GoodItem from './GoodItem'
  import Youpin from '../../config/Youpin'

  export default {
    name: 'GoodList',
    components: {
      GoodItem
    },
    beforeRouteEnter (to, from, next) {
      let {gid} = to.query

      next(vm => {
        if (gid) {
          vm.goodList.splice(1)
        }
      })
    },
    mounted () {
      let {getGoodList, goodList} = this

      getGoodList().then(res => {
        if (res && !res.code) {
          goodList[0].list = res.data
        }
      })
    },
    data () {
      return {
        dialogTableVisible: false,
        goodList: [
          {
            // title: '推荐',
            list: []
          }
        ],

        num1: '',

        // tag选择相关的属性
        good: {},
        group: [],
        tagProp: [],
        goodProps: [],

        // 选中的tag组合
        tagsSelected: []
      }
    },

    computed: {
      pidSelected () {
        return 123
      }
    },

    methods: {
      getGoodList () {
        return this.$http({
          url: Youpin.goodListHost + '/app/shopv3/pipe',
          method: 'POST',
          emulateJSON: true,
          body: {
            data: JSON.stringify({
              'qiye': {
                'model': 'Homepage',
                'action': 'BuildHome',
                'parameters': {
                  'id': 153
                }
              }
            })
          },
          before: () => {
            //
          }
        }).then(json => {
          let res = json && json.body && json.body.result && json.body.result.qiye

          return res
        }, err => {
          console.log(err)
        })
      },

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
      },

      showModal (gid) {
        this.tagsSelected = []
        this.getGoodDetail(gid).then(res => {
          let data = null

          if (res) {
            data = res.data

            this.good = data.good
            this.group = data.group
            this.tagProp = data.tag_prop
            this.goodProps = data.props

            this.dialogTableVisible = true
          }
        })
      },

      handleSelectTag (e, index) {
        let _target = e.target
        let dataList = _target.dataset

        if (dataList.type != 'tag') {
          return
        }

        let {tid, order} = dataList
        this.$set(this.tagsSelected, index, {tid, order})

        console.log(this.tagsSelected, index)
      },

      handleAddCart () {},

      handleBuyNow () {}
    }
  }
</script>

<style lang="less">
  .good-list {
    background-color: #f2f2f2;
    .detail {
      padding: 0 40px;
      overflow: hidden;
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
        margin-top: 60px;
        text-align: center;
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
</style>
