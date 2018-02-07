let fs = require("fs");

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
  }
}

module.exports = dealFn;