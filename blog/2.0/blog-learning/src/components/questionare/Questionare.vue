<template lang="html">
  <!-- 问卷列表开始 -->
  <div class="wrap">
    <table class="table" v-if="qnData.length !== 0">
      <thead>
        <th></th>
        <th>问卷名</th>
        <th>结束时间</th>
        <th>状态</th>
        <th>操作</th>
      </thead>
      <tbody>
        <!-- 问卷列表 -->
        <tr v-for="qn in qnData">
          <td><span
            @click="toggleSelected(qn.qnId)"
            class="iconfont">{{{ inArray(this.qnSelected, qn.qnId) ? selectedHTML : unSelectedHTML }}}</span></td>
          <td>{{qn.title}}</td>
          <td><time class="time" :class="filterClass(qn)">{{qn.expires}}</time></td>
          <td><span class="status" :class="filterClass(qn)">{{ judgeStatus(qn) }}</span></td>
          <td>
            <div class="tools">
              <span
                @click="deleteBtnClickHandler(qn)"
                class="iconfont delete">&#xe60d;</span>
              <span class="btn" @click="editQn(qn)">编辑</span>
              <span class="btn" :class="{ disabled : !qn.publish }">{{ '查看数据' }}</span>
            </div>
          </td>
        </tr>
        <!-- 问卷列表 end -->
      </tbody>
    </table>
    <div class="btn-group" v-if="qnData.length !== 0">
      <button class="btn" @click="selectAll">{{ isSelectAll ? '全选' : '全不选' }}</button>
      <button class="btn" @click="deleteSelectedBtnHandler">删除</button>
    </div>
    <div
      class="tips"
      v-else>
        <div class="content">
          <p><span class="iconfont">&#xe608;</span></p>
          <p>你还没添加任何问卷</p>
        </div>
      </div>
    <!-- 删除一份问卷 -->
    <modal
      :show.sync="showDeleteModal"
      cancel-text="取消"
      ok-text="确定"
      :callback="deleteQnModalHandler"
      title="提示" >
      <div slot="modal-body">
        <p>你确定要删除 <span :style="{ color: '#999' }">{{qnTitleIfDelete}}</span> 这份问卷吗？</p>
      </div>
    </modal>
    <!-- 删除一份问卷 end -->
    <!-- 删除多份问卷 -->
    <modal
      :show.sync="showDeleteSelectedModal"
      cancel-text="取消"
      ok-text="确定"
      :callback="deleteSelectedHandler"
      title="提示" >
      <div slot="modal-body">
        <p>你确定要删除这 <span :style="{ color: '#999' }">{{qnSelected.length}}</span> 份问卷吗？</p>
      </div>
    </modal>
    <!-- 删除多份问卷 end -->
  </div>
  <!-- 问卷列表结束 -->
</template>

<script>
import Modal from '../common/Modal'
export default {
  data () {
    return {
      qnData: [],
      unSelectedHTML: '&#xe647;',
      selectedHTML: '&#xe649;',
      qnSelected: [],
      showDeleteModal: false,
      qnTitleIfDelete: '',
      qnIdIfDelete: -1,
      showDeleteSelectedModal: false
    }
  },
  computed: {
    isSelectAll () {
      return this.qnSelected.length !== this.qnData.length
    }
  },
  components: {
    Modal
  },
  created () {
    this.getQnData()
  },
  methods: {
    getQnData () {
      window.fetch('/getUserQnData', {
        method: 'GET',
        credentials: 'same-origin'
      })
      .then(response => {
        return response.json()
      })
      .then(result => {
        if (result.code === 0) {
          this.qnData = result.data
        }
        if (result.code === -2) {
          this.$route.router.go({ path: '/login' })
        }
      })
      .catch(err => {
        console.log(err)
      })
    },
    inArray (arr, val) {
      return arr.some(item => item === val)
    },
    // 选中某个问卷
    addSelected (qnId) {
      this.qnSelected.push(qnId)
    },
    // 取消选中某个问卷
    deleteSelected (qnId) {
      this.qnSelected.some((item, itemIndex) => {
        if (item === qnId) {
          this.qnSelected.splice(itemIndex, 1)
          return true
        }
      })
    },
    toggleSelected (qnId) {
      if (this.inArray(this.qnSelected, qnId)) {
        this.deleteSelected(qnId)
      } else {
        this.addSelected(qnId)
      }
    },
    // 点击删除某个问卷的按钮
    deleteBtnClickHandler (qn) {
      this.showDeleteModal = true
      this.qnTitleIfDelete = qn.title
      this.qnIdIfDelete = qn.qnId
    },
    // 确定删除某个问卷
    deleteQnModalHandler () {
      this.showDeleteModal = false
      this.deleteQn(this.qnIdIfDelete)
    },
    // 点击删除多个问卷按钮
    deleteSelectedBtnHandler () {
      if (this.qnSelected.length !== 0) {
        this.showDeleteSelectedModal = true
      }
    },
    // 确定删除多个问卷
    deleteSelectedHandler () {
      this.showDeleteSelectedModal = false
      this.deleteAll()
    },
    deleteQn (qnId) {
      window.fetch('/deleteUserQn', {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `qnId=${qnId}`,
        credentials: 'same-origin'
      })
      .then(res => {
        return res.json()
      })
      .then(result => {
        if (result.code === 1) {
          this.getQnData()
          this.qnSelected = []
        }
      })
    },
    selectAll () {
      if (this.qnSelected.length === this.qnData.length) {
        this.qnSelected = []
      } else {
        this.qnSelected = []
        let len = this.qnData.length
        let i = 0
        while (i < len) {
          this.qnSelected.push(this.qnData[i].qnId)
          i++
        }
      }
    },
    deleteAll () {
      window.fetch('/deleteUserQn', {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `qnList=${JSON.stringify(this.qnSelected)}`,
        credentials: 'same-origin'
      })
      .then(res => {
        return res.json()
      })
      .then(result => {
        if (result.code === 0) {
          this.getQnData()
          // 隐藏 Modal
          this.qnSelected = []
        }
      })
    },
    editQn (qn) {
      window.sessionStorage.setItem('edit-mode', 'modify')
      window.sessionStorage.setItem('current-qn-id', qn.qnId)
      this.$route.router.go({ path: '/platform/new/edit' })
    },
    judgeStatus (qn) {
      let qnExpires = new Date(qn.expires).getTime()
      if (qnExpires < new Date().getTime()) {
        return '已过期'
      } else if (qn.publish) {
        return '已发布'
      }
      return '未发布'
    },
    filterClass (qn) {
      return {
        'overdue': this.judgeStatus(qn) === '已过期',
        'published': this.judgeStatus(qn) === '已发布',
        'unpublished': this.judgeStatus(qn) === '未发布'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../scss/base";
@import "../../scss/helpers/mixins";
.wrap {
  height: 100%;
  overflow: hidden;
  padding: 0 6rem;
  @at-root .title {
    font-size: $font-size-lg;
    font-weight: normal;
    color: $black;
  }
  .table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 2rem;
    font-size: $font-size-default;
    thead,
    tbody {
      tr {
        th,
        td {
          font-weight: normal;
          font-size: $font-size-sm;
          line-height: 3;
          &:nth-child(2),
          &:nth-child(3),
          &:nth-child(4) {
            text-align: center;
            width: 20%;
            max-width: 20rem;
            padding: 0 1rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          &:nth-child(5) {
            text-align: right;
          }
        }
        th:last-child {
          text-align: right;
          padding-right: 13rem;
        }
      }
    }
    tbody {
      tr:last-child {
        border-bottom: 1px solid $line-color;
      }
      td {
        border-top: 1px solid $line-color;
        height: 6rem;
        font-size: $font-size-sm;
        & .overdue {
          color: #f15b29;
        },
        & .published {
          color: #99ba35;
        },
        & .unpublished {
          color: #b4b4b6;
        },
        &:nth-child(2) {
          color: $blue;
        }
        &:nth-child(3),
        &:nth-child(4) {
          color: $gray;
        }
        @at-root {
          .iconfont {
            cursor: pointer;
            color: $blue;
            font-size: $font-size-default;
          }
          .delete:hover {
            color: lighten($blue,20%);
          }
          .btn {
            @include button(1rem, .5rem, $blue);
            &:hover {
              background-color: lighten($blue, 20%);
            }
            &:active {
              background-color: $blue;
            }
            &.disabled {
              border-color: $gray;
              background-color: #fff;
              color: $gray;
              cursor: default;
            }
            &.publish {
              background-color: lighten($blue, 15%);
              color: #fff;
              &:hover {
                background-color: $blue;
              }
            }
          }
          .iconfont,
          .btn {
            margin-left: 1rem;
          }
        }
      }
    }
  }
  .btn-group {
    margin-top: 2rem;
    .btn {
      background-color: #fff;
      outline: none;
      border-radius: .4rem;
      border-color: $blue;
      padding: .2rem 1rem;
      color: $blue;
      &:hover {
        background-color: lighten($blue, 20%);
        color: #fff;
      }
      &:active {
        background-color: $blue;
      }
    }
  }
}
.tips {
  height: 100%;
  @include child-center;
  .content {
    text-align: center;
    margin-top: -10rem;
    font-size: $font-size-xxl;
    .iconfont {
      margin: 0;
      font-size: 10rem;
    }
  }
}
</style>
