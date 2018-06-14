const { query } = require('../db/blog.js')

const getArticleList = async function (params) {
  const result = await query('select * from article_list')

  return {
    code: 0,
    message: '请求成功',
    result: {
      list: result
    }
  }
}

module.exports = {
  getArticleList
}