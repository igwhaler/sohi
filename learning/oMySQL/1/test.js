var mysql = require('mysql');
var blogDB = require('./server/db/blogDB.js');
// var blogSQL = require('./server/sql/blog.js');
import blogSQL from './server/sql/blog.js'

var connection = mysql.createConnection(blogDB);
connection.connect();

connection.query(blogSQL.selectAll, function (error, results, fields) {
  if (error) throw error;

  console.log(results);
});
