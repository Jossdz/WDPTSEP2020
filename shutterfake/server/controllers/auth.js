const User = require("../models/User")
const passport = require("passport")
// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt")
const bcryptSalt = 10

const clearRes = data => {
  //destructuramos el objeto "data" y retornamos un nuevo objeto unicamente con
  // los datos requerido para nuestro "desarrollador = dev"
  const { password, __v, createdAt, updatedAt, ...cleanedData } = data
  // {key:"value"}
  return cleanedData
}

exports.loginProcess = (req, res, next) => {
  passport.authenticate("local", (error, user, errDetails) => {
    if (error) return res.status(500).json({ message: errDetails })
    if (!user) return res.status(401).json({ message: "Unauthorized" })

    req.login(user, error => {
      if (error) return res.status(500).json({ message: errDetails })
      const usr = clearRes(user.toObject())
      res.status(200).json(usr)
    })
  })(req, res, next)
}

exports.signupProcess = async (req, res) => {
  const { email, password, username } = req.body

  if (email === "" || password === "" || username === "") {
    res.status(400).json({ message: "Indicate email, username, and password" })
    return
  }

  const usernameExits = await User.findOne({ username })
  if (usernameExits) {
    return res.status(401).json({ message: "The username already exists" })
  }

  User.findOne({ email }, "email", (err, user) => {
    if (user !== null) {
      res.status(400).json({ message: "The email already exists" })
      return
    }

    const salt = bcrypt.genSaltSync(bcryptSalt)
    const hashPass = bcrypt.hashSync(password, salt)

    const newUser = new User({
      email,
      username,
      password: hashPass
    })

    newUser
      .save()
      .then(newUser => {
        const {
          _doc: { password, ...rest }
        } = newUser
        res.status(200).json(rest)
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ message: err.message })
      })
  })
}

exports.logoutProcess = (req, res) => {
  req.logout()
  res.json({ message: "loggedout" })
}

exports.checkSession = (req, res) => {
  if (req.user) {
    const usr = clearRes(req.user.toObject())
    return res.status(200).json(usr)
  }
  res.status(200).json(null)
}

exports.changeAvatar = async (req, res) => {
  const { avatar } = req.body

  const user = await User.findByIdAndUpdate(
    req.user._id,
    { $set: { avatar } },
    { new: true }
  )

  const {
    _doc: { password, ...rest }
  } = user

  res.status(200).json(rest)
}
