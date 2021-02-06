const { Router } = require("express")
const { catchErrors } = require("../middlewares")
const {
  signupProcess,
  loginProcess,
  logoutProcess,
  getCurrentUser,
  googleInit,
  googleCallback,
  facebookInit,
  facebookCallback
} = require("../controllers/auth.controller")

const router = Router()

router.post("/signup", catchErrors(signupProcess))

router.post("/login", loginProcess)

router.get("/logout", mandarATodosAComer, logoutProcess)

router.get("/current-user", getCurrentUser)

router.get("/google", googleInit)
router.get("/google/callback", googleCallback)

router.get("/facebook", facebookInit)
router.get("/facebook/callback", facebookCallback)

module.exports = router

function mandarATodosAComer(req, res, next) {
  console.log("Vamonos a comerrrrr")

  next()
}
