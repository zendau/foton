const Router = require('express').Router
const CatalogController = require('../controllers/catalog.controller')
const router = new Router()

router.post("/create", CatalogController.create)
router.get("/get/:id", CatalogController.getOne)
router.get("/getAllItems", CatalogController.getAllItems)

module.exports = router