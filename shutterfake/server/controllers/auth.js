const User = require("../models/User")
const passport = require("passport")
// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt")
const bcryptSalt = 10

exports.loginProcess = (req, res, next) => {
  passport.authenticate("local", (error, user, errDetails) => {
    if (error) return res.status(500).json({ message: errDetails })
    if (!user) return res.status(401).json({ message: "Unauthorized" })

    req.login(user, error => {
      if (error) return res.status(500).json({ message: errDetails })
      user.password = null
      res.status(200).json(user)
    })
  })(req, res, next)
}

exports.signupProcess = (req, res, next) => {
  const { email, password, username } = req.body

  if (email === "" || password === "" || username === "") {
    res.status(400).json({ message: "Indicate email, username, and password" })
    return
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
      .then(() => {
        res.json(newUser)
      })
      .catch(err => {
        res.status(500).json({ message: "Something went wrong" })
      })
  })
}

exports.logoutProcess = (req, res) => {
  req.logout()
  res.json({ message: "loggedout" })
}

exports.checkSession = (req, res) => {
  if (req.user) {
    req.user.password = null
  }
  res.status(200).json(req.user || null)
}
