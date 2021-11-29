const catalogModel = require("../models/catalog.model")
const adminModel = require("../models/admin.model")
const ApiError = require("../exceprions/api.error")

class AdminService {

    async create(title, desc) {
        return await catalogModel.query(`INSERT INTO catalog (title, \`desc\`) VALUES ("${title}", "${desc}")`)
    }

    async getAllItems() {
        return await catalogModel.query("SELECT * FROM catalog")
    }

    async getOne(id) {
        return await catalogModel.query(`SELECT * FROM catalog WHERE id=${id}`)
    }

    async deleteItem(id){
        return await catalogModel.query(`DELETE FROM catalog WHERE id=${id}`)
    }

    async editItem(id, title, desc){
        return await catalogModel.query(`UPDATE catalog SET title="${title}", \`desc\`="${desc}" WHERE id=${id}`)
    }

    async login(login, password){
        return await login === process.env.APP_ADMIN_NAME && password == process.env.APP_ADMIN_PASS ? true : false
    }

    async getAllSections() {
        return await adminModel.getAllSections()
    }

    async getSection(id) {
        return await adminModel.getSection(id)
    }

    async editSection(id, title, desc) {
        return await adminModel.editSection(id, title, desc)
    }

    async getAllContacts() {
        return await adminModel.getAllContacts()
    }

    async getContact(id) {
        return await adminModel.getContact(id)
    }

    async editContact(id, title,desc) {
        return await adminModel.editContact(id, title,desc)
    }

    async getAllAchievements() {
        return await adminModel.getAllAchievements()
    }

    async getAchievement(id) {
        return await adminModel.getAchievement(id)
    }

    async editAchievement(id, title, count, desc) {
        return await adminModel.editAchievements(id, title, count, desc)
    }

}

module.exports = new AdminService()