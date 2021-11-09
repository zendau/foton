const postModel = require("../models/post.model")
const PostDto = require('../dtos/post.dto')
const ApiError = require("../exceprions/api.error")

class PostService {
    async create(author, title, body) {

        const post = await postModel.create({
            author,
            title,
            body,
        })

        const postPopulate = await post.populate("author").execPopulate()

        const postDto = this.postDtoFromPopulate(postPopulate)

        return postDto

    }

    async getAllPosts() {
        const posts = await postModel.find().populate("author")

        const postsDto = posts.map(post => this.postDtoFromPopulate(post))

        return postsDto
    }

    async getOne(id) {

        try {
            const post = await postModel.findById(id).populate("author")

            const postDto = this.postDtoFromPopulate(post)

            return postDto
        } catch (e) {
            throw ApiError.BadRequest("[GET ONE OPERATION] - Post not found")
        }


    }

    postDtoFromPopulate(postModel) {
        const postDto = new PostDto(postModel)
        const userDto = new UserDto(postModel.author)

        postDto.setAuthor(userDto)

        return postDto
    }
}

module.exports = new PostService()