const Router = require('express').Router
const AdminController = require('../controllers/admin.controller')
const router = new Router()

router.get("/users/get/:username", AdminController.getUser)
router.post("/login", AdminController.login)
router.put("/users/edit", AdminController.editUser)

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
