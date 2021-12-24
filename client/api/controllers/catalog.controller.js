const CatalogService = require("../services/catalog.service")
const catalogDTO = require("../dtos/catalog")
const uploadFile = require("../libs/upload")
const fs = require("fs")
const textToImage = require("text-to-image")

class CatalogController {

    async create(req, res, next) {
        try {

          try {
            await uploadFile(req, res)

            if (req.file == undefined) {
              let newFile = req.body.title + ".png"
              const dataUri = await textToImage.generate(req.body.title, {
                debug: true,
                debugFilename: `static/catalog_img/${newFile}`,
                maxWidth: (parseInt(req.body.title.length)*10),
                customHeight: (parseInt(req.body.title.length)*10),
                fontSize: 32,
                fontFamily: 'Arial',
                lineHeight: 30,
                margin: 5,
                bgColor: 'white',
                textColor: 'black',
                textAlign: 'center',
                verticalAlign: 'center'
              })

              const lastId = await CatalogService.create(req.body.title, req.body.desc)
              const data = await CatalogService.addImage(lastId, newFile)
              res.json(data)
              return
            }

          } catch (err) {
            console.log(err)

            if (err.code == "LIMIT_FILE_SIZE") {
              return res.status(500).send({
                message: "Изображение не должно превышать 2 Мб размером",
              })
            }
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
            console.log(data)
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
                  let newFile = req.body.title + ".png"
                  const dataUri = await textToImage.generate(req.body.title, {
                    debug: true,
                    debugFilename: `static/catalog_img/${newFile}`,
                    maxWidth: (parseInt(req.body.title.length)*10),
                    customHeight: (parseInt(req.body.title.length)*10),
                    fontSize: 32,
                    fontFamily: 'Arial',
                    lineHeight: 30,
                    margin: 5,
                    bgColor: 'white',
                    textColor: 'black',
                    textAlign: 'center',
                    verticalAlign: 'center'
                  })
                  const result = await CatalogService.editItem(req.body.id, req.body.title, req.body.desc)
                  const data = await CatalogService.editImage(req.body.id, newFile)
                  res.json(data)
                  return
                }

            } catch (err) {
                console.log(err)

                if (err.code == "LIMIT_FILE_SIZE") {
                return res.status(500).send({
                    message: "Изображение не должно превышать 2 Мб размером",
                })
                }
            }
            const result = await CatalogService.editItem(req.body.id, req.body.title, req.body.desc)
            const data = await CatalogService.editImage(req.body.id, req.file.filename)
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async getImage(req, res, next) {
      try {
          const data = await CatalogService.getImage(req.params.product_id)
          res.json(data)
      } catch (e) {
          next(e)
      }
  }

}

module.exports = new CatalogController()
