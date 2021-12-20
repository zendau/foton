const mysql = require('../libs/mysql')

class CatalogModel {

	async createItem(title, desc) {
		const res = await mysql.query(`INSERT INTO catalog (title, \`desc\`) VALUES ("${title}", "${desc}")`)
    return res.insertId
	}

	async getAllItems() {
		return await mysql.query("SELECT * FROM catalog")
	}

	async getOneItem(id) {
		return await mysql.query(`SELECT * FROM catalog WHERE id=${id}`)
	}

	async deleteItem(id) {
		return await mysql.query(`DELETE FROM catalog WHERE id=${id}`)
	}

	async editItem(id, title, desc) {
		return await mysql.query(`UPDATE catalog SET title="${title}", \`desc\`="${desc}" WHERE id=${id}`)
	}

	async addImage(product_id, image) {
		return await mysql.query(`INSERT INTO images (product_id, name) VALUES ("${product_id}", "${image}")`)
	}

  async editImage(product_id, image) {
    return await mysql.query(`UPDATE images SET \`name\`="${image}" WHERE product_id="${product_id}"`)
  }

}

module.exports = new CatalogModel()
