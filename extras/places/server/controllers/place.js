const Place = require("../models/Place")

exports.createPlace = async (req, res) => {
  const { name, description, lat, lng } = req.body

  const location = {
    type: "Point",
    coordinates: [lng, lat]
  }

  const place = await Place.create({
    name,
    description,
    location
  })

  res.status(201).json(place)
}

exports.getAllPlaces = async (req, res) => {
  const places = await Place.find()
  res.status(200).json({ places })
}

exports.getOnePlace = async (req, res) => {
  const { placeId } = req.params
  const place = await Place.findById(placeId)
  res.status(200).json(place)
}
