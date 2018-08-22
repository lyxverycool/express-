import poetyModel from '../models/poety';

class Poety {
  constructor() {

  }
  async addPoety(req, res, next) {
    try {

    } catch (err) {
      res.send({
        status: '0',
        type: 'error_add_poety',
        message: '添加诗文失败'
      })
    }
  }
}
export default new Poety();