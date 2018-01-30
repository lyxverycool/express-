var express = require('express');
var router = express.Router();
var cheerio = require('cheerio');
var superagent = require('superagent');
var list = require('../database/mongodb');

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Index' });
});

//查询数据库
router.get('/index/list', function (req, res) {
  var lists = list.find(function (err, result) {
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
    list.insertMany(items, function (rs) {
      res.json({ success: true })
    })
  })
});


//增加一条数据到mongoose
router.post('/index/addList', function (req, res, next) {
  var item = req.body;
  list.create(item, function (re) {
    res.json({ success: true })
  })
});

module.exports = router;

