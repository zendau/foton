const multer  = require("multer")

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "static/catalog_img");
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname  + "-" + Date.now());
    }
})

// определение фильтра
const fileFilter = (req, file, cb) => {

    if(file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"||
    file.mimetype === "image/jpeg"){
        cb(null, true);
    }
    else{
        cb(null, false);
    }
}

module.exports = function() {
    return multer({storage:storageConfig, fileFilter: fileFilter}).single("file")
}
