const CatalogService = require("../services/catalog.service")
const catalogDTO = require("../dtos/catalog")
const uploadFile = require("../middlewares/upload")
const fs = require("fs")

class CatalogController {

    async create(req, res, next) {
        try {

          try {
            await uploadFile(req, res)

            if (req.file == undefined) {
              return res.status(400).send({ message: "Please upload a file!" })
            }

          } catch (err) {
            console.log(err)

            if (err.code == "LIMIT_FILE_SIZE") {
              return res.status(500).send({
                message: "File size cannot be larger than 2MB!",
              })
            }

            res.status(500).send({
              message: `Could not upload the file: ${req.file.originalname}. ${err}`,
            })
          }
            const lastId = await CatalogService.create(req.body.title, req.body.desc)
            const data = await CatalogService.addImage(lastId, req.file.filename)
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
            try {
                await uploadFile(req, res)

                if (req.file == undefined) {
                return res.status(400).send({ message: "Please upload a file!" })
                }

            } catch (err) {
                console.log(err)

                if (err.code == "LIMIT_FILE_SIZE") {
                return res.status(500).send({
                    message: "File size cannot be larger than 2MB!",
                })
                }

                res.status(500).send({
                message: `Could not upload the file: ${req.file.originalname}. ${err}`,
                })
            }
            const result = await CatalogService.editItem(req.body.id, req.body.title, req.body.desc)
            const data = await CatalogService.editImage(req.body.id, req.file.filename)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

}

module.exports = new CatalogController()
