const Router = require('express').Router
const EmailController = require('../controllers/email.controller')
const router = new Router()

router.post('/sendEmail', EmailController.send)

module.exports = router