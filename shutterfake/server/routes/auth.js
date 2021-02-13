const express = require("express")
const router = express.Router()
const {
  checkSession,
  loginProcess,
  logoutProcess,
  signupProcess,
  changeAvatar
} = require("../controllers/auth")

const { isAuth } = require("../middlewares")

router.post("/login", loginProcess)

router.post("/signup", signupProcess)

router.get("/logout", logoutProcess)

router.get("/session", checkSession)

router.post("/avatar/change", isAuth, changeAvatar)

module.exports = router
