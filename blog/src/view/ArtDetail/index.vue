<template>
  <div class="art-detail">
    <template v-if="id && !isError">
      <div v-html="detail"></div>
    </template>
    <p v-if="isError" class="none-data">
      <img src="../../assets/images/error.jpg" alt="Error">
    </p>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'ArtDetail',

  data () {
    return {
      id: '',
      isError: false,

      detail: ''
    }
  },

  created () {
    this.getId()
  },

  methods: {
    getId () {
      let {id} = this.$route.query

      if (id) {
        this.id = id
        this.getArtDetai(id)
      } else {
        this.isError = true
      }
    },

    getArtDetai (id) {
      Axios.get(`/api/graphql?query={artDetail(id: ${id}){detail}}`).then(res => {
        let {artDetail} = res
        if (artDetail) {
          this.detail = artDetail.detail.replace(/[\r\n]/g, '')
        } else {
          this.isError = true
        }
      }).catch(err => {
        this.isError = true
        console.log(err)
      })
    }
  }
}
</script>

<style lang="less">
.art-detail {
  @import '../../assets/md/style/marxico.less';
  margin-bottom: 30px;
  padding: 10px 20px;
  background-color: #fff;
  .none-data {
    text-align: center;
    img {
      width: 100%;
    }
  }
}
</style>
