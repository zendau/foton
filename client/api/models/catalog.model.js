const mysql = require('../libs/mysql')
const fs = require("fs")

class CatalogModel {

	async createItem(title, desc) {
		const res = await mysql.query(`INSERT INTO catalog (title, \`desc\`) VALUES ("${title}", "${desc}")`)
    return res.insertId
	}

	async getAllItems() {
		return await mysql.query("SELECT c.*, i.name AS image FROM catalog c INNER JOIN images i ON (c.id = i.product_id) ORDER BY c.id DESC")
	}

	async getOneItem(id) {
		return await mysql.query(`SELECT c.*, i.name AS image FROM catalog c INNER JOIN images i ON (c.id = i.product_id) WHERE c.id=${id}`)
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
    const promise = await this.getImage(product_id)
    const oldImage = promise[0]['name']
    if(fs.existsSync(`static/catalog_img/${oldImage}`)){
      fs.rm(`static/catalog_img/${oldImage}`, { recursive: false }, (err) => {
        if (err) {
          console.error(err)
        }
      })
    }
    return await mysql.query(`UPDATE images SET \`name\`="${image}" WHERE product_id="${product_id}"`)
  }

  async getImage(product_id) {
    return await mysql.query(`SELECT \`name\` FROM images WHERE product_id="${product_id}"`)
  }

  async rmImage(image_name) {
    fs.rm(`static/catalog_img/${image_name}`, { recursive: false }, (err) => {
      if (err) {
        console.error(err)
      }
    })
  }

}

module.exports = new CatalogModel()
