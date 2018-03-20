import mysql from 'mysql';
import blogDB from '../db/blogDB.js';
import * as blogSQL from '../sql/blog.js'

const connection = mysql.createConnection(blogDB);

connection.connect();

// 查
/*connection.query(blogSQL.selectAll, (error, results, fields) => {
  if (error) throw error;

  console.log(results);
});*/

// 增
/*connection.query(blogSQL.insertItem, ['菜鸟工具', 'https://c.runoob.com','23453', 'CN'], (error, results, fields) => {
  if (error) throw error;

  console.log(results);
});*/

// 更新
/*connection.query(blogSQL.updateItem, ['123', '456', 6], (err, results) => {
  if (err) throw err;

  console.log(results)
});*/

connection.query(blogSQL.deleteItem, [7], (err, results) => {
  if (err) throw err;

  console.log(results);
});
