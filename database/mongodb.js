var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/db1'); //连接db1数据库

var Schema = mongoose.Schema; //创建模型
var listSchema = new Schema({
  text: String, href: String
});

var list = mongoose.model('lists', listSchema);
//exports.student=student;
module.exports = list;