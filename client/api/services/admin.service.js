const adminModel = require("../models/admin.model")

class AdminService {

    async getUserByName(username) {
        return await adminModel.getUserByName(username)
    }

    async getPassById(id) {
        return await adminModel.getPassById(id)
    }

    async editUser(id, username, password) {
        return await adminModel.editUser(id, username, password)
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
