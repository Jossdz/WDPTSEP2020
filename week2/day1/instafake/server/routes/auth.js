const express = require("express")
const passport = require("passport")
const router = express.Router()
const User = require("../models/User")

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt")
const bcryptSalt = 10

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (_, user, error) => {
    if (!user) {
      res.status(403).json(error)
      next()
    }

    req.login(user, err => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Something went wrong authenticating user" })
      }
      user.password = null
      res.status(200).json(user)
    })
  })(req, res, next)
})

router.post("/signup", (req, res, next) => {
  const username = req.body.username
  const password = req.body.password
  if (username === "" || password === "") {
    res.json({ message: "Indicate username and password" })
    return
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.json({ message: "The username already exists" })
      return
    }

    const salt = bcrypt.genSaltSync(bcryptSalt)
    const hashPass = bcrypt.hashSync(password, salt)

    const newUser = new User({
      username,
      password: hashPass
    })

    newUser
      .save()
      .then(() => {
        res.json(newUser)
      })
      .catch(err => {
        res.json({ message: "Something went wrong" })
      })
  })
})

router.get("/logout", (req, res) => {
  req.logout()
  res.json({ message: "tas afuera :p " })
})

router.get("/current-user", (req, res) => {
  res.json({ user: req.user })
})
module.exports = router
