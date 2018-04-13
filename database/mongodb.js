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

var adminSchema = new Schema({
  user_name: String,
  password: String,
  id: Number,
  create_time: String,
  admin: { type: String, default: '管理员' },
  status: Number,  //1:普通管理、 2:超级管理员
  avatar: { type: String, default: 'default.jpg' },
  city: String,
})

adminSchema.index({ id: 1 });

var mongodbList = {
  list: mongoose.model('lists', listSchema),
  poety: mongoose.model("poetys", poetySchema),
  admin: mongoose.model("admins", adminSchema)
}



//exports.student=student;
module.exports = mongodbList;