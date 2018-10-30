import fs from 'fs';

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
}
export default new File();