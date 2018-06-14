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
    this.graphqlArticleList()
    // this.getArticleList()
  },

  methods: {
    // restful获取文章列表
    getArticleList () {
      Axios.get('/api/article/list').then(res => {
        if (res) {
          this.articleList = res.list || []
        }
      }).catch(err => {
        console.log(err)
      })
    },

    // graphql获取文章列表
    graphqlArticleList () {
      Axios.get('/api/graphql?query={articles{list{id,summary,cover,created}}}').then(res => {
        // console.log(res)
        this.articleList = res.articles.list
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
