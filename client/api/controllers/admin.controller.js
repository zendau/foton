const AdminService = require("../services/admin.service")
const UserDto = require("../dtos/user")

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

    async getUser(req, res, next){
        try {
            const data = await AdminService.getUserByName(req.params.username)

            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async login(req, res, next){
        try {
            const data = await AdminService.getUserByName(req.body.username)
            const id = data[0]["id"]
            const data2 = await AdminService.getPassById(id)

            const username = data[0]["username"]
            const password = data2[0]["password"]

            res.json(req.body.username === username && req.body.password === password ? true : false)
        } catch (e) {
            next(e)
        }
    }

    async editUser(req, res, next){
        try {
            const data = await AdminService.editUser(req.body.id, req.body.username, req.body.password)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

}

module.exports = new AdminController()
