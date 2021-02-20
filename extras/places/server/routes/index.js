const express = require("express")
const router = express.Router()
const {
  createPlace,
  getAllPlaces,
  getOnePlace
} = require("../controllers/place")
/* GET home page */
router.get("/", (req, res, next) => {
  res.send("Places API")
})

router.get("/api/places", getAllPlaces)
router.get("/api/places/:placeId", getOnePlace)
router.post("/api/places", createPlace)

module.exports = router
