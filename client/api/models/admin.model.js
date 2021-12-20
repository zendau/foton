const mysql = require('../libs/mysql')

class AdminModel {

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

    async addImage(product_id, name) {
      	return await mysql.query(`INSERT INTO images (product_id, name) VALUES ("${product_id}", "${name}")`)
    }

    async editImage(product_id, name) {
      return await mysql.query(`UPDATE images SET name="${name}" WHERE product_id=${product_id}`)
    }

}

module.exports = new AdminModel()
