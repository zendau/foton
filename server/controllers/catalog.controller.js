const CatalogService = require("../services/catalog.service")

class CatalogController {

    async create(req, res, next) {
        try {
            const {author, title, body} = req.body
            const data = await CatalogService.create(author, title, body)
            res.json(data)

        } catch (e) {
            next(e)
        }
    }


    async getOne(req, res, next) {
        try {
            const data = await CatalogService.getOne(req.params.id)

            res.json(data)
        } catch (e) {
            next(e)
        }
    }


    async getAllItems(req, res, next) {
        try {
            const data = await CatalogService.getAllItems()
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

}

module.exports = new CatalogController()