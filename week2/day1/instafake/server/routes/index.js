const express = require("express")
const router = express.Router()
const uploader = require("../config/cloudinary")

/* GET home page */
router.get("/", (req, res, next) => {
  res.json({ message: "Working" })
})

router.post("/upload-image", uploader.single("photo"), (req, res) => {
  res.status(201).json({ url: req.file.path })
})

module.exports = router
