const express = require("express")
const router = express.Router()
const {
  checkSession,
  loginProcess,
  logoutProcess,
  signupProcess
} = require("../controllers/auth")

router.post("/login", loginProcess)

router.post("/signup", signupProcess)

router.get("/logout", logoutProcess)

router.get("/session", checkSession)

module.exports = router
