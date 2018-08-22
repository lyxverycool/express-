'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const poetySchema = new Schema({
  id: String,
  title: String,//标题
  content: String,//内容
  type: String,//分类 ['poety','chant','lyrics',article']
  toOther: Boolean,//是否写给他人(true,false)
  createTime: {
    type: Date,
    default: Date.now
  },//时间
})

const poety = mongoose.model("poetys", poetySchema)

export default poety