module.exports = class CatalogDto {
    id;
    text;
    desk;

    constructor(model) {
        this.id = model.id;
        this.title = model.title;
        this.desk = model.desc;
    }

}