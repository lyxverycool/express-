var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/db1'); //连接db1数据库

var Schema = mongoose.Schema; //创建模型
var listSchema = new Schema({
  text: String, href: String
});

var poetySchema = new Schema({
  id: String,
  title: String,
  content: String
})

var mongodbList = {
  list: mongoose.model('lists', listSchema),
  poety: mongoose.model("poetys", poetySchema)
}

//exports.student=student;
module.exports = mongodbList;