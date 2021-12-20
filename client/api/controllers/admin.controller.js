const AdminService = require("../services/admin.service")
const catalogDTO = require("../dtos/catalog")

class AdminController {

    async allSections(req, res, next) {
        try {
            const data = await AdminService.getAllSections()
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async getSection(req, res, next) {
        try {
            const data = await AdminService.getSection(req.params.id)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async editSection(req, res, next){
        try {
            const data = await AdminService.editSection(req.body.id, req.body.title, req.body.desc)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async allContacts(req, res, next) {
        try {
            const data = await AdminService.getAllContacts()
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async getContact(req, res, next) {
        try {
            const data = await AdminService.getContact(req.params.id)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async editContact(req, res, next){
        try {
            const data = await AdminService.editContact(req.body.id, req.body.title, req.body.desc)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async allAchievements(req, res, next) {
        try {
            const data = await AdminService.getAllAchievements()
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async getAchievement(req, res, next) {
        try {
            const data = await AdminService.getAchievement(req.params.id)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async editAchievement(req, res, next){
        try {
            const data = await AdminService.editAchievement(req.body.id, req.body.title, req.body.count, req.body.desc)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async create(req, res, next) {
        try {
            const lastId = await AdminService.create(req.body.title, req.body.desc)
            const data = await AdminService.addImage(lastId, req.body.image)
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
            const data = await AdminService.editItem(req.body.id, req.body.title, req.body.desc, req.body.image_name)
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
