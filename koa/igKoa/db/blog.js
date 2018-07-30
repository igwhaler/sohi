const mysql = require('mysql')

const blog = mysql.createPool({ // 创建连接池
  host: '127.0.0.1',
  user: 'root',
  password: 'fs1122..',
  database: 'blog'
})

// 链接db查询
const query = function (sql, values) {
  return new Promise((resolve, reject) => {

    blog.getConnection(function (err, connection) { // 连接db

      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => { // 查询数据

          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }

          // 释放连接池
          connection.release()
        })
      }
    })
  })
}

module.exports = {
  query
}