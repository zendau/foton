const util = require("util")
const multer  = require('multer')
const maxSize = 2 * 1024 * 1024

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "static/catalog_img")
  },
  filename: (req, file, cb) => {
    cb(null,  Date.now() + file.originalname)
  },
})

const uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file")

const upload = util.promisify(uploadFile)
module.exports = upload
