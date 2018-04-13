let fs = require("fs");
let superagent = require('superagent');
let dealFn = {
  /**
   *  [通过promise读取数据]
   *   @param {String} file [文件名]
   *   @return {Object} [Promise对象]
   */

  readFileData: (file) => {
    let promise = new Promise((resolve, reject) => {
      fs.readFile("./database/" + file, "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          data = JSON.parse(data);
          resolve(data);
        }
      })
    });
    return promise;
  },
  downLoadImg: (imgs) => {
    let promise = new Promise((resovle, reject) => {
      imgs.forEach((imgUrl, index) => {
        //获取图片名  
        let imgName = imgUrl.split('/').pop();
        //下载图片存放到指定目录
        let stream = fs.createWriteStream(`./public/img/${imgName}`);
        let req = superagent.get(imgUrl);
        req.pipe(stream);
        console.log(`开始下载图片 https:${imgUrl} --> ./img/${imgName}`);
      })
      resovle("下载完成！")
    });
    return promise;
  }
}

module.exports = dealFn;