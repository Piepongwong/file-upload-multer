const express = require("express");
const router = express.Router();
const Picture = require("../models/Picture");
var multer  = require('multer');
var upload = multer({ dest: `${__dirname}/../uploads/` });

router.get("/upload-file", (req,res)=> {
    res.render("upload-picture")
})
  
router.post('/upload-file', upload.single('profile-picture'), function (req, res) {
    Picture.create({title: req.body.title, path: req.file.filename})
        .then(()=> {
            res.send("uploaded!")
        })
        .catch((err)=> {
            res.send("err", err)
        })
})

router.get("/all-pictures", (req, res)=> {
    Picture.find()
        .then((pictures)=> {
            res.render("pictures", {pictures})
        })
        .catch((err)=> {
            res.send("ERROR ERROR", err)
        })
})

module.exports = router;