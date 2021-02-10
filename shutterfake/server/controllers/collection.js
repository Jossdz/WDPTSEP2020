const User = require("../models/User")
const Collection = require("../models/Collection")

// req.user debe existir para tener acceso a las coleciones
exports.getColsByUser = async (req, res) => {
  const user = await User.findById(req.user._id).populate("collections")
  const { collections } = user
  res.status(200).json({ collections })
}

exports.getOneCol = async (req, res) => {
  const { colId } = req.params
  const collection = await Collection.findById(colId)

  if (collection.secret && !req.user.cols.includes(colId))
    return res.status(401).json({
      mesage: "This is a private collection"
    })

  res.status(200).json(collection)
}

// req.user debe existir para tener acceso a las coleciones
exports.createCol = async (req, res) => {
  const { name, description, secret } = req.body
  // creamos la coleccion y le asociamos a su creador
  const collection = await Collection.create({
    name,
    description,
    secret,
    owner: req.user._id
  })

  // asociar la coleccion al usuario en sesion:

  await User.findByIdAndUpdate(req.user._id, {
    $push: { cols: collection._id }
  })

  res.status(201).json(collection)
}

exports.updateCol = async (req, res) => {
  const { colId } = req.params

  const collection = await Collection.findByIdAndUpdate(colId, req.body, {
    new: true
  })

  res.status(200).json(collection)
}

exports.addResourceToCol = async (req, res) => {
  // coso: 602341dd4b2aab075ad9fc92
  // collec: 602342524b2aab075ad9fc93
  const { colId, cosoId } = req.params
  const collection = await Collection.findById(colId)

  if (collection.resources.includes(cosoId)) {
    return res.status(400).json({
      message: "Resource exists in the collection"
    })
  }

  await Collection.findByIdAndUpdate(colId, { $push: { resources: cosoId } })

  res.status(200).json({
    message: "Resouce added"
  })
}

exports.deleteResourceFromCol = async (req, res) => {
  const { colId, cosoId } = req.params

  const collection = await Collection.findOne({ _id: colId })

  if (!collection.resources.includes(cosoId)) {
    return res.status(400).json({
      message: "Resource don't exists in the collection"
    })
  }

  const index = collection.resources.indexOf(cosoId)
  collection.resources.splice(index, 1)

  await collection.save()

  res.status(200).json({
    message: "Resouce removed"
  })
}

exports.deleteCol = async (req, res) => {
  const { colId } = req.params
  console.log(colId)
  await Collection.findByIdAndRemove(colId)

  res.status(200).json({
    message: "Collection deleted"
  })
}
