const mysql = require('../libs/mysql')

class AdminModel {

    async getPassById(id) {
        return await mysql.query(`SELECT password FROM users WHERE id=${id}`)
    }

    async getPassByName(username) {
      return await mysql.query(`SELECT password FROM users WHERE username="${username}"`)
    }

    async getUserById(id) {
        return await mysql.query(`SELECT id, username, role FROM users WHERE id=${id}`)
    }

    async getUserByName(username) {
        const id = await mysql.query(`SELECT id FROM users WHERE username="${username}"`)
        return await this.getUserById(id[0]["id"])
    }

    async editUser(id, username, password) {
      return await mysql.query(`UPDATE users SET username="${username}", password="${password}" WHERE id=${id}`)
    }

    async deleteUser(id) {
      return await mysql.query(`DE`)
    }

    async getAllSections() {
        return await mysql.query(`SELECT id, title, \`desc\` FROM sections`)
    }

    async getSection(id) {
        return await mysql.query(`SELECT * FROM sections WHERE id=${id}`)
    }

    async editSection(id, title, desc) {
        return await mysql.query(`UPDATE sections SET title="${title}", \`desc\`="${desc}" WHERE id=${id}`)
    }

    async getAllContacts() {
        return await mysql.query(`SELECT * FROM contacts`)
    }

    async getContact(id) {
        return await mysql.query(`SELECT * FROM contacts WHERE id=${id}`)
    }

    async editContact(id, title, desc) {
        return await mysql.query(`UPDATE contacts SET title="${title}", \`desc\`="${desc}" WHERE id=${id}`)
    }

    async getAllAchievements() {
        return await mysql.query(`SELECT * FROM achievements`)
    }

    async getAchievement(id) {
        return await mysql.query(`SELECT * FROM achievements WHERE id=${id}`)
    }

    async editAchievements(id, title, count, desc) {
        return await mysql.query(`UPDATE achievements SET title="${title}", count="${count}" , \`desc\`="${desc}" WHERE id=${id}`)
    }

}

module.exports = new AdminModel()
