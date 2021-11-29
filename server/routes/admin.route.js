const Router = require('express').Router
const AdminController = require('../controllers/admin.controller')
const router = new Router()

router.post("/create", AdminController.create)
router.get("/get/:id", AdminController.getOne)
router.get("/getAllItems", AdminController.getAllItems)
router.delete("/delete", AdminController.deleteItem)
router.put("/edit", AdminController.editItem)
router.post("/login", AdminController.login)

router.get("/sections/all", AdminController.allSections)
router.get("/sections/get/:id", AdminController.getSection)
router.put("/sections/edit", AdminController.editSection)

router.get("/contacts/all", AdminController.allContacts)
router.get("/contacts/get/:id", AdminController.getContact)
router.put("/contacts/edit", AdminController.editContact)

router.get("/achievements/all", AdminController.allAchievements)
router.get("/achievements/get/:id", AdminController.getAchievement)
router.put("/achievements/edit", AdminController.editAchievement)

module.exports = router