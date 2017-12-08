<template>
  <div class="search-item clearfix">
    <div class="wrap-log">
      <a href="/" target="_blank">
        <img src="../../assets/logo.png" alt="LOGO">
      </a>
    </div>

    <div class="wrap-search">
      <div class="search">
        <el-autocomplete
          class="auto-complete"
          popper-class="search-popper"
          v-model="searchValue"
          :fetch-suggestions="querySearchAsync"
          placeholder="请输入搜索内容"
          @select="handleSelect"
        >
          <i
            class="el-icon-search el-input__icon"
            slot="prefix"
            @click="handleSearchClick">
          </i>
          <template slot-scope="props">
            <div class="name">{{props.item.value}}</div>
          </template>
        </el-autocomplete>
      </div>
      <div class="cart">
        <a href="#">
          <i class="el-icon-sold-out"></i>
          <span class="num">12</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchItem',
    data () {
      return {
        restaurants: [
          {
            value: '123123哈哈法法师'
          },
          {
            value: '112123123哈哈法法师2'
          },
          {
            value: '1113123123哈哈法法师'
          },
          {
            value: '11114123123哈哈法法师'
          }
        ],
        searchValue: ''
      }
    },
    methods: {
      querySearchAsync (queryString, cb) {
        var restaurants = this.restaurants
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants

        cb(results)
      },
      createStateFilter (queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
        }
      },
      handleSelect (item) {
        console.log(item)
      },
      handleSearchClick () {
        console.log(123)
      }
    }
  }
</script>

<style lang="less">
  @searchColor: #845f3f;

  .search-item {
    padding: 34px 0 38px 0;
  }
  .wrap-log {
    float: left;
    img {
      height: 45px;
    }
  }
  .wrap-search {
    float: right;
    padding-top: 8px;
    .search {
      float: left;
      .auto-complete {
        .el-input__inner {
          padding-left: 40px;
          width: 240px;
          border-width: 0 0 1px 0;
          border-radius: 0;
          &:focus {
            border-color: @searchColor;
          }
        }
      }
      .el-icon-search {
        margin-left: -4px;
        font-size: 20px;
        font-weight: bold;
        color: #333;
        cursor: pointer;
        &:hover {
          color: @searchColor;
        }
      }
    }
    .cart {
      float: right;
      margin-left: 10px;
      a {
        position: relative;
        display: inline-block;
        width: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 24px;
        color: #333;
        font-weight: bold;
        &:hover {
          color: @searchColor;
        }
        .num {
          position: absolute;
          top: 0;
          right: 0;
          min-width: 21px;
          line-height: 17px;
          font-size: 12px;
          color: #fff;
          background-color: #c00000;
          border-radius: 8px;
        }
      }
    }
  }
  .el-popper.search-popper {
    margin-top: -2px;
    .el-autocomplete-suggestion__wrap {
      border-color: #e7e7e7;
      border-radius: 0;
    }
    .popper__arrow {
      display: none;
    }
    .el-autocomplete-suggestion__list {
      li.highlighted, li:hover {
        background: #845f3f;
        color: #fff;
      }
    }
  }
</style>

