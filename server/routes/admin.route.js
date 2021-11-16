const Router = require('express').Router
const AdminController = require('../controllers/admin.controller')
const router = new Router()

router.post("/create", AdminController.create)
router.get("/get/:id", AdminController.getOne)
router.get("/getAllItems", AdminController.getAllItems)
router.delete("/delete", AdminController.deleteItem)
router.put("/edit", AdminController.editItem)
router.post("/login", AdminController.login)

module.exports = router