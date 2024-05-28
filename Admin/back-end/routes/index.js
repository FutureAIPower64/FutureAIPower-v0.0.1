var express = require('express');
var router = express.Router();
var user = require('../controller/usercontroller');
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })

/* GET home page. */
router.post('/',upload.single('images'), user.insert);
router.get('/', user.get);

module.exports = router;
