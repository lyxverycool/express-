import fs from 'fs';
import superagent from 'superagent';

class File {
  writeFile(filename, data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(filename, data, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(console.log('写入完成'))
      });
    })
  }
  readFile(path) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
  }
  downLoadImgs(imgs) {
    return new Promise((resovle, reject) => {
      imgs.forEach((imgUrl, index) => {
        //获取图片名  
        let imgName = imgUrl.split('/').pop();
        //下载图片存放到指定目录
        let stream = fs.createWriteStream(`./img/${imgName}`);
        let req = superagent.get(imgUrl);
        req.pipe(stream);
        console.log(`开始下载图片 ${imgUrl} --> ./img/${imgName}`);
      })
      resovle("下载完成！")
    })
  }
}
export default new File();