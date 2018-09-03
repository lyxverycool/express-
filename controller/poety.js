import poetyModel from '../models/poety';

class Poety {
  constructor() {

  }
  async queryPoety(req, res, next) {
    try {
      const lists = await poetyModel.find({}, { content: 0, type: 0, toOther: 0 });
      res.send({
        state: '1',
        data: lists,
        type: 'success_get_poetyList',
        message: '获取诗文列表成功'
      })
    } catch (err) {
      res.send({
        status: '0',
        type: 'error_get_poetyList',
        message: '获取诗文列表失败'
      })
    }
  }
  async addPoety(req, res, next) {
    try {
      const item = req.body;
      const lists = await poetyModel.create(item);
      res.send({
        state: '1',
        type: 'success_add_poety',
        data: true,
        message: '添加诗文成功'
      })
    } catch (err) {
      res.send({
        status: '0',
        type: 'error_add_poety',
        message: '添加诗文失败'
      })
    }
  }
  async poetyDetail(req, res, next) {
    try {
      const id = req.body.id;
      const lists = await poetyModel.findById(id);
      res.send({
        state: '1',
        data: lists,
        type: 'success_get_poetyDetail',
        message: '获取诗文详情成功'
      })
    } catch (err) {
      res.send({
        status: '0',
        type: 'error_get_poetyDetail',
        message: '获取诗文详情失败'
      })
    }
  }
}
export default new Poety();