const mercadopago = require("mercadopago")

mercadopago.configure({
  access_token: process.env.MP_TOKEN
})

module.exports = mercadopago
