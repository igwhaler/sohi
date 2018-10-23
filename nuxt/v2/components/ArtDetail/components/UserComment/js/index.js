import Axios from 'axios'
import DateFormat from 'dateformat'
// let { DateFormat } = window

export default {
  name: 'UserComment',
  props: {
    commentList: {
      required: true,
      type: Array,
      default: []
    },
    articleId: {
      required: true,
      type: Number
    }
  },

  data () {
    return {
      comment: {
        content: '',
        name: '',
        mail: ''
      },

      errorMsg: '',
      successMsg: ''
    }
  },

  filters: {
    getCommentTime (time) {
      return DateFormat(time, 'yyyy-mm-dd HH:MM:ss')
    }
  },

  created() {
    // console.log(this.commentList)
  },

  methods: {
    addComment () {
      let { articleId: article_id } = this
      let { content, name, mail } = this.comment

      Axios.post('/api/graphql', {
        query: `mutation AddComment($data: CommentItem!){
          addComment(data: $data) {
            code,
            message
          }
        }`,

        variables: {
          data: {
            article_id,
            content,
            name,
            mail
          }
        }
      }).then(res => {
        let { addComment } = res

        if (addComment && addComment.code === 0) {
          this.errorMsg = ''
          this.successMsg = '评论已提交，审核通过后展示！'
          this.comment = {
            content: '',
            name: '',
            mail: ''
          }
        } else {
          return Promise.reject(res.addComment || { message: '评论失败' })
        }
      }).catch(err => {
        this.errorMsg = err.message || '服务错误'
        this.successMsg = ''
      })
    },

    checkParams () {
      let { comment } = this
      this.errorMsg = ''
      this.successMsg = ''

      const commentRules = [
        {
          check() {
            return !comment.content.trim()
          },
          msg: '评论内容不能为空！'
        },
        {
          check() {
            return !comment.name.trim()
          },
          msg: '姓名不能为空！'
        },
        {
          check() {
            let { mail } = comment
            mail = mail.trim()

            if (!mail) {
              this.msg = '邮箱不能为空！'
              return true
            }

            if (!(/^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i.test(mail))) {
              this.msg = '邮箱格式不对！'
              return true
            }
          },
          msg: ''
        }
      ]

      let status = commentRules.some(rule => {
        if (rule.check()) {
          this.errorMsg = rule.msg
          return true
        }
      })

      if (!status) {
        this.errorMsg = ''
        this.successMsg = ''
      }

      return status
    },

    submitComment () {
      if (this.checkParams()) {
        return false
      }

      this.addComment()
    }
  }
}
