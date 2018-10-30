import superagent from 'superagent';
import cheerio from 'cheerio';

class Crawler {
  constructor() {

  }
  //爬取腾讯微博
  async getQQWeibo(req, res, next) {
    try {
      const htmlMsg = await superagent.get('http://t.qq.com/LYX117888/mine');
      const $ = cheerio.load(htmlMsg.text);
      let items = [];
      $(".msgCnt").each(function (index, ele) {
        const msgCnt = $(ele).text();
        console.log(msgCnt)
        items.push({
          text: msgCnt
        })
      });
      res.send({
        status: '1',
        type: 'success_get_cnblogs',
        message: '爬取成功',
        data: items
      })
    } catch (err) {
      res.send({
        status: '0',
        type: 'error_get_qqweibo',
        message: err
      })
    }
  }

  async getData(i) {
    const htmlMsg = await superagent.get('https://www.cnblogs.com/lyxverycool/default.html?page=' + i);
    const $ = cheerio.load(htmlMsg.text);
    let items = [];
    $(".day").each(function (index, ele) {
      const msgDay = $(ele).find(".dayTitle a").text();
      const msgTitle = $(ele).find(".postTitle a").text();
      const msgHref = $(ele).find(".postTitle a").attr("href");
      items.push({
        day: msgDay,
        title: msgTitle,
        href: msgHref
      })
    });
    console.log(items)
    return items;
  }
  //爬取博客园文章所有标题
  async getCnblogs(req, res, next) {
    try {
      let allData = [];
      for (i = 0; i < 6; i++) {
        const data = await getData(i);
        console.log(data)
      }
      res.send({
        status: '1',
        type: 'success_get_cnblogs',
        message: '爬取成功',
        data: allData
      })
    } catch (err) {
      res.send({
        status: '0',
        type: 'error_get_cnblogs',
        message: err
      })
    }
  }
}
export default new Crawler();