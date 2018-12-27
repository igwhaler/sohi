import Axios from 'axios'
import ArtItem from '../components/ArtItem'

export default {
  name: 'HomePage',

  components: {
    ArtItem
  },

  data () {
    return {
      showState: false,
      articleList: []
    }
  },

  created () {
    this.init()
  },

  methods: {
    init () {
      this.graphqlArticleList()
    },
    // restful获取文章列表
    /* getArticleList () {
      Axios.get('/api/article/list').then(res => {
        if (res) {
          this.articleList = res.list || []
        }
      }).catch(err => {
        console.log(err)
      })
    }, */

    // graphql获取文章列表
    graphqlArticleList () {
      Axios({
        params: {
          query: '{articles{list{id,title,summary,cover,created}}}'
        }
      }).then(res => {
        // console.log(res)
        this.articleList = res.articles.list
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
