module.exports = class CatalogDto {
    id;
    text;
    desc;
    image;

    constructor(model) {
        this.id = model.id;
        this.title = model.title;
        this.desc = model.desc;
        this.image = model.image;
    }

}
