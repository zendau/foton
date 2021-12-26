const catalogModel = require("../models/catalog.model")

class CatalogService {

    async create(title, desc) {
        return await catalogModel.createItem(title, desc)
    }

    async getAllItems() {
        return await catalogModel.getAllItems()
    }

    async getOne(id) {
        return await catalogModel.getOneItem(id)
    }

    async deleteItem(id){
        return await catalogModel.deleteItem(id)
    }

    async editItem(id, title, desc){
        return await catalogModel.editItem(id, title, desc)
    }

    async addImage(product_id, image) {
		  return await catalogModel.addImage(product_id, image)
    }

    async editImage(product_id, image) {
      return await catalogModel.editImage(product_id, image)
    }

    async getImage(product_id) {
      return await catalogModel.getImage(product_id)
    }

    async rmImage(image_name) {
      return await catalogModel.rmImage(image_name)
    }

}

module.exports = new CatalogService()
