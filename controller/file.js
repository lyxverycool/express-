import listModel from '../models/list';
import fs from 'fs';
class File {
  constructor() {

  }
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
  // async readFile(req, res, next) {
  //   try {
  //     const lists = await listModel.find({});
  //     res.send({
  //       status: '1',
  //       type: 'success_query_list_all',
  //       message: '查询列表成功',
  //       data: lists
  //     })
  //   } catch (err) {
  //     res.send({
  //       status: '0',
  //       type: 'error_query_list_all',
  //       message: '查询列表所有失败'
  //     })
  //   }
  // }
}
export default new File();