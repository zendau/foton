const catalogModel = require("../models/catalog.model")
const ApiError = require("../exceprions/api.error")

class CatalogService {
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

}

module.exports = new CatalogService()