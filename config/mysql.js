var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'lyx117',
  database: 'test'
})

connection.connect();

//查
var sql = 'SELECT * FROM tb1';
//增
var sql1 = 'INSERT INTO tb1 (id,name,age) VALUES (6,"TE",15)';
//删
var sql2 = 'DELETE FROM tb1 WHERE age=15'

connection.query(sql, function (err, result) {
  if (err) {
    console.log(err.message);
    return;
  }
  var res = JSON.parse(JSON.stringify(result))
  app.get('/', function (req, res) {
    res.send(res);
  });

})

connection.end;
