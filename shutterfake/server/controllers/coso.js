const Coso = require("../models/Coso")
const Artist = require("../models/Artist")
const mercadopago = require("../config/mercadopago")

exports.getAllCosos = async (req, res) => {
  const cosos = await Coso.find()
  res.status(200).json({ cosos })
}
exports.getCosoById = async (req, res) => {
  const { cosoId } = req.params

  const coso = await Coso.findById(cosoId)

  //TODO: Tenemos que generar la preferencia para hacerle llegar a react,
  // el dato para cobrar.
  let preference = {
    items: [
      {
        title: coso.name,
        unit_price: Number(coso.price),
        quantity: 1
      }
    ],
    notification_url:
      "https://webhook.site/1797d8db-4b84-4e9c-b608-0c12485f61aa",
    back_urls: {
      success: "http://localhost:3000/success",
      failure: "http://localhost:3000/failure",
      pending: "http://localhost:3000/pending"
    }
  }

  const response = await mercadopago.preferences.create(preference)

  res.status(200).json({ ...coso.toJSON(), preferenceId: response.body.id })
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
