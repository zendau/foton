const PostService = require("../services/post.service")

class PostController {

    async create(req, res, next) {
        try {
            const {author, title, body} = req.body
            const data = await PostService.create(author, title, body)
            res.json(data)

        } catch (e) {
            next(e)
        }
    }


    async getOne(req, res, next) {
        try {
            const data = await PostService.getOne(req.params.id)

            res.json(data)
        } catch (e) {
            next(e)
        }
    }


    async getAllPosts(req, res, next) {
        try {
            const data = await PostService.getAllPosts()
            res.json(data)
        } catch (e) {
            next(e)
        }
    }

}

module.exports = new PostController()