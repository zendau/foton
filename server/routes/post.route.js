const Router = require('express').Router
const PostController = require('../controllers/post.controller')
const router = new Router()

router.post("/create", PostController.create)
router.get("/get/:id", PostController.getOne)
router.get("/getAllPosts", PostController.getAllPosts)


module.exports = router