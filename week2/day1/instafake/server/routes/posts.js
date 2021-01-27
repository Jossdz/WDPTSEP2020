const { Router } = require("express")
const Post = require("../models/Post")

const router = Router()

router.get("/all", (req, res) => {
  Post.find()
    .then(posts => {
      res.json({ posts })
    })
    .catch(err => {
      res.json({ message: err.message })
    })
})

router.get("/single/:id", async (req, res) => {
  //           👇 await es una pausa para la operacion asincrona de buscar un elemento en la base de datos
  const post = await Post.findById(req.params.id)
  res.json(post)
})

router.post("/create", (req, res) => {
  const { title, body, img } = req.body

  Post.create({
    title,
    body,
    likes: 0,
    img
  })
    .then(post => {
      res.status(201).json(post)
    })
    .catch(err => {
      res.json({ message: err.message })
    })
})

router.put("/update/:id", (req, res) => {
  const { title, body, img, likes } = req.body
  const { id } = req.params

  Post.findByIdAndUpdate(id, { title, body, img, likes }, { new: true })
    .then(post => {
      res.status(201).json(post)
    })
    .catch(err => {
      res.json({ message: err.message })
    })
})

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params
  Post.findByIdAndRemove(id)
    .then(() => {
      res.json({ message: "Deleted" })
    })
    .catch(err => {
      res.json({ message: err.message })
    })
})

module.exports = router
