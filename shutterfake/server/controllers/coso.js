const Coso = require("../models/Coso")
const Artist = require("../models/Artist")

exports.getAllCosos = async (req, res) => {
  const cosos = await Coso.find()
  res.status(200).json({ cosos })
}
exports.getCosoById = async (req, res) => {
  const { cosoId } = req.params

  const coso = await Coso.findById(cosoId)
  res.status(200).json(coso)
}

exports.createCoso = async (req, res) => {
  const { name, description, price, type, url } = req.body

  const coso = await Coso.create({
    name,
    description,
    price,
    type,
    url,
    owner: req.user.artist
  })
  await Artist.findByIdAndUpdate(req.user.artist, {
    $push: { cosos: coso._id }
  })

  res.status(201).json(coso)
}

exports.updateCoso = async (req, res) => {
  const { cosoId } = req.params
  const { name, description, price, url } = req.body

  const coso = await Coso.findByIdAndUpdate(
    cosoId,
    { name, description, price },
    { new: true }
  )

  res.status(200).json(coso)
}
exports.deleteCoso = async (req, res) => {
  const { cosoId } = req.params

  await Coso.findByIdAndRemove(cosoId)

  res.status(200).json({
    message: "deleted"
  })
}
