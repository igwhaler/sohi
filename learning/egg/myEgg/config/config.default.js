exports.keys = 'c8Jy5wOvhbS7DKA4IHq9czuJ'

exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
}

exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0'
}

/*config.mysql = {
  // 单数据库信息配置
  clients: {
    myDB: {
      host: '127.0.0.1', // host
      port: '3306', // 端口号
      user: 'root', // 用户名
      password: 'fs1122..', // 密码
      database: 'myDB', // 数据库名
    }
  },
  app: true, // 是否加载到 app 上，默认开启
  agent: false, // 是否加载到 agent 上，默认关闭
}*/
