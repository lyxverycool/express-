var mysql = require('mysql');
var express = require('express');
//连接数据库
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'lyx117',
  database: 'test'
})

connection.connect();