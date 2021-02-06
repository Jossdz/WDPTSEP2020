const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const GoogleStrategy = require("passport-google-oauth20").Strategy
const FacebookStrategy = require("passport-facebook").Strategy

const User = require("../models/User")
const bcrypt = require("bcrypt")

passport.serializeUser((user, callback) => {
  callback(null, user._id)
})

passport.deserializeUser(async (id, callback) => {
  try {
    const user = await User.findById(id)
    callback(null, user)
  } catch (err) {
    console.error(err)
  }
})

passport.use(
  new LocalStrategy(
    {
      usernameField: "email"
    },
    async (email, password, callback) => {
      try {
        const user = await User.findOne({ email })
        if (!user) {
          return callback(null, false, { message: "Incorrect Email" })
        }
        if (!bcrypt.compareSync(password, user.password)) {
          return callback(null, false, { message: "Incorect password" })
        }
        callback(null, user)
      } catch (error) {
        console.log(error)
      }
    }
  )
)

// Nueva estrategia: Google Strategy.

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_KEY,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK
    },
    async (_, __, profile, callback) => {
      console.log("PROFILE: ", profile)
      // Tenemos que verificar si hay un usuario con ese googleID, Si existe, lo dejamos entrar, si no... lo creamos e iniciamos su sesion
      const user = await User.findOne({ googleID: profile.id })
      if (user) {
        return callback(null, user)
      }
      const newUser = await User.create({
        googleID: profile.id,
        email: profile.emails[0].value,
        avatar: profile.photos[0].value
      })
      return callback(null, newUser)
    }
  )
)

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_KEY,
      clientSecret: process.env.FACEBOOK_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK,
      profileFields: ["id", "email", "photos"]
    },
    async (_, __, profile, callback) => {
      console.log("PROFILE: ", profile)
      // Tenemos que verificar si hay un usuario con ese googleID, Si existe, lo dejamos entrar, si no... lo creamos e iniciamos su sesion
      const user = await User.findOne({ facebookID: profile.id })
      if (user) {
        return callback(null, user)
      }
      const newUser = await User.create({
        facebookID: profile.id,
        email: profile.emails[0].value,
        avatar: profile.photos[0].value
      })
      return callback(null, newUser)
    }
  )
)

module.exports = passport
