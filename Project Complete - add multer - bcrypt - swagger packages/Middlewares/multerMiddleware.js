const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const originalname = file.originalname.replace(path.extname(file.originalname), '');
        // const originalname = path.parse(file.originalname).name;
        const extension = path.extname(file.originalname);
        cb(null, originalname + '-' + uniqueSuffix + extension);
    }
})

const upload = multer({ storage: storage });
module.exports = upload;