const Order = require("../models/Order")

exports.createPreference = async (req, res) => {
  // recibir la lista de elementos en el carrito
  /*
  {
    id: _id,
    name: sdf,
    price: 000
  }
 */
  const { resources } = req.body

  // generamos la preferencia

  res.status(200).json({ preference: "owyetgrqkluweguy" })
}

exports.createOrder = async (req, res) => {}

exports.userOrders = async (req, res) => {}
