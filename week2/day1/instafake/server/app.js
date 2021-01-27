require("dotenv").config()

const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const express = require("express")
const mongoose = require("mongoose")
const logger = require("morgan")
const path = require("path")

const session = require("express-session")
const MongoStore = require("connect-mongo")(session)
const flash = require("connect-flash")
const cors = require("cors")

mongoose
  .connect("mongodb://localhost/server", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error("Error connecting to mongo", err)
  })

const app_name = require("./package.json").name
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
)

const app = express()

app.use(logger("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.locals.title = "Express - Generated with IronGenerator"

app.use(
  session({
    secret: "irongenerator",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
)

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true
  })
)

app.use(flash())
require("./passport")(app)

const index = require("./routes/index")
app.use("/", index)

const authRoutes = require("./routes/auth")
app.use("/auth", authRoutes)
app.use("/api/post", require("./routes/posts"))

module.exports = app
