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
      const { password, ...publicUserInfo } = user
      res.status(200).json(publicUserInfo)
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
        const { password, ...publicUserInfo } = newUser
        res.status(200).json(publicUserInfo)
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
    const { password, ...publicUserInfo } = user
    return res.status(200).json(publicUserInfo)
  }
  res.status(200).json(null)
}
