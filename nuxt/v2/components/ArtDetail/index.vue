<template>
  <div>
    <transition name="fade">
      <div v-if="!isLoading">
        <template v-if="id && !isError">
          <div class="art-detail">
            <div v-html="detail"></div>
          </div>

          <div class="g-user-comment">
            <UserComment :commentList="commentList" :articleId="id"/>
          </div>
        </template>

        <div v-if="isError" class="art-detail">
          <p class="none-data">
            <img src="../../assets/images/error.jpg" alt="Error">
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Axios from 'axios'
import UserComment from './components/UserComment'

export default {
  name: 'ArtDetail',

  components: {
    UserComment
  },

  data () {
    return {
      isLoading: true,
      id: 0,
      isError: false,

      detail: '',

      commentList: []
    }
  },

  created () {
    this.getId()
  },

  methods: {
    getId () {
      this.$nextTick(() => {
        let { id } = this.$route.query
        if (+id) {
          this.id = +id
          this.getArtDetai(+id)
        } else {
          this.isError = true
        }
      })
    },

    getArtDetai (id) {
      Axios.get(`/api/graphql`, {
        params: {
          query: `{
            artDetail(id: ${id}){detail},
            artComments(article_id: ${id}){list{id,content,name,created}}
          }`
        }
      }).then(res => {
        let { artDetail, artComments } = res

        this.commentList = artComments.list

        if (artDetail) {
          this.detail = artDetail.detail.replace(/[\r\n]/g, '')
        } else {
          this.isError = true
        }
      }).catch(err => {
        this.isError = true
        console.log(err)
      }).finally(res => {
        this.isLoading = false
      })
    }
  }
}
</script>

<style lang="less">
.art-detail {
  @import '~assets/md/style/marxico.less';
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

.g-user-comment {
  margin-bottom: 30px;
  padding: 10px 20px;
  background-color: #fff;
}
</style>
