const Router = require('express').Router
const CatalogController = require('../controllers/catalog.controller')
const router = new Router()

router.post("/create", CatalogController.create)
router.get("/get/:id", CatalogController.getOne)
router.get("/getAllItems", CatalogController.getAllItems)
router.delete("/delete", CatalogController.deleteItem)
router.put("/edit", CatalogController.editItem)
router.get("/getImage/:product_id", CatalogController.getImage)

module.exports = router
