import Axios from 'axios'
import ArtItem from '../ArtItem'

export default {
  name: 'HomePage',

  components: {
    ArtItem
  },

  data () {
    return {
      articleList: []
    }
  },

  mounted () {
    this.getArticleList()
  },

  methods: {
    // 获取文章列表
    getArticleList () {
      Axios.get('/api/article/list').then(res => {
        if (res) {
          this.articleList = res.list || []
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
