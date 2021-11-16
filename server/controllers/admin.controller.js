const AdminService = require("../services/admin.service")
const catalogDTO = require("../dtos/catalog")

class AdminController {

    async create(req, res, next) {
        try {
            const {title, desc} = req.body
            const data = await AdminService.create(title, desc)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }


    async getOne(req, res, next) {
        try {
            const data = await AdminService.getOne(req.params.id)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }


    async getAllItems(req, res, next) {
        try {
            const data = await AdminService.getAllItems()
            const postsDto = data.map(item => new catalogDTO(item))
            res.json(postsDto)
        } catch (e) {
            next(e)
        }
    }

    async deleteItem(req, res, next){
        try {
            const data = await AdminService.deleteItem(req.body.id)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async editItem(req, res, next){
        try {
            const data = await AdminService.editItem(req.body.id, req.body.title, req.body.desc)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async login(req, res, next){
        try {
            const data = await AdminService.login(req.body.name, req.body.pass)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

}

module.exports = new AdminController()