const CatalogService = require("../services/catalog.service")
const catalogDTO = require("../dtos/catalog")

class CatalogController {

    async create(req, res, next) {
        try {
            const {title, desc} = req.body
            const data = await CatalogService.create(title, desc)
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

            const postsDto = data.map(item => new catalogDTO(item))

            res.json(postsDto)
        } catch (e) {
            next(e)
        }
    }

    async deleteItem(req, res, next){
        try {
            const data = await CatalogService.deleteItem(req.body.id)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async editItem(req, res, next){
        try {
            const data = await CatalogService.editItem(req.body.id, req.body.title, req.body.desc)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }



}

module.exports = new CatalogController()