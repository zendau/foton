module.exports = class CatalogDto {
    id;
    text;
    desc;

    constructor(model) {
        this.id = model.id;
        this.title = model.title;
        this.desc = model.desc;
    }

}
