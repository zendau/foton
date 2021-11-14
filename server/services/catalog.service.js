const catalogModel = require("../models/catalog.model")
const ApiError = require("../exceprions/api.error")

class CatalogService {
    async create(author, title, body) {

    }

    async getAllItems() {
        return await catalogModel.query("SELECT * FROM catalog")
    }

    async getOne(id) {

    }

    catalogDtoFromPopulate(catalogModel) {

    }
}

module.exports = new CatalogService()