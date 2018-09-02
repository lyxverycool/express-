import listModel from '../models/list';

class List {
    constructor() {

    }
    async queryListAll(req, res, next) {
        try {
            const lists = await listModel.find({});
            res.send({
                status: '1',
                type: 'success_query_list_all',
                message: '查询列表成功',
                data: lists
            })
        } catch (err) {
            res.send({
                status: '0',
                type: 'error_query_list_all',
                message: '查询列表所有失败'
            })
        }
    }
}
export default new List();