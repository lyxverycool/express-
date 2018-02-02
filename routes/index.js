var express = require('express');
var router = express.Router();
var cheerio = require('cheerio');
var superagent = require('superagent');
var mongodbList = require('../database/mongodb');
var dealFn = require("../database/dealfn");

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Index' });
});

//查询数据库
router.get('/index/list', function (req, res) {
  var lists = mongodbList.list.find(function (err, result) {
    if (err) {
      res.send(err)
    } else {
      res.json(result)
    }
  })
});

//利用爬虫抓取html结构
router.get('/index/getCnblogs', function (req, res, next) {
  //res.header("Access-Control-Allow-Origin", "*");
  superagent.get('https://news.cnblogs.com/').end(function (err, sres) {
    if (err) {
      return next(err)
    }
    var $ = cheerio.load(sres.text);
    var items = [];
    $(".news_entry a").each(function (index, ele) {
      var element = $(ele);
      items.push({
        text: element.text(),
        href: element.attr('href')
      })
    });
    //将抓取到的数据存到数据库中
    mongodbList.list.insertMany(items, function (rs) {
      res.json({ success: true })
    })
  })
});


//增加一条数据到mongoose
router.post('/index/addList', function (req, res, next) {
  var item = req.body;
  mongodbList.list.create(item, function (re) {
    res.json({ success: true })
  })
});

//读取json数据储到mongodb
router.get('/index/addPoetyList', function (req, res, next) {
  dealFn.readFileData("poety.json").then((data) => {
    mongodbList.poety.insertMany(data, function (rs) {
      res.json({ success: true })
    })
    //res.send(JSON.stringify(data));
  })
});

//读取诗文列表
router.get('/index/poetyList', function (req, res) {
  mongodbList.poety.find({}, { content: 0 }, function (err, result) {
    if (err) {
      res.send(err)
    } else {
      res.json(result)
    }
  })
})
//根据id查详情
router.get('/index/poetyContent', function (req, res) {
  var id = req.query.id;
  if (id) {
    mongodbList.poety.findOne({ "_id": id }, { content: 1 }, function (err, result) {
      if (err) {
        res.send(err)
      } else {
        res.send(result)
      }
    })
  } else {
    res.send("参数请求错误！")
  }
})

module.exports = router;

