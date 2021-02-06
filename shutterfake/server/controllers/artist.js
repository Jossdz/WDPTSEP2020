const Artist = require("../models/Artist")
const User = require("../models/User")
const Rating = require("../models/Rating")

exports.becomeArtist = async (req, res) => {
  // Si usan req user, siempre tienen que estar seguros de que quien accede, esta realmente logueado.
  const { _id } = req.user
  const { nickname, country, genre } = req.body
  // 0. Verificar que el usuario no sea un artista ya...
  if (req.user.isArtist)
    return res.status(400).json({
      message: "You are already an artist"
    })

  // 1. Encontrar al usuario que coincida con el ID de la sesion
  const user = await User.findOne({ _id })
  // 2. Crear la instancia del model artista
  const artist = await Artist.create({
    userRef: user._id,
    nickname,
    country,
    genre
  })
  // 3. asociar el artista al usuario
  user.isArtist = true
  // 4. cambiar la propiedad de isArtist a true
  user.artist = artist._id
  // await User.findByIdAndUpdate(user.id, {artist: artist._id, isArtist: true})
  // 5. Guardar los cambios en el user
  await user.save()

  // responder...
  res.status(201).json({ message: "asdfa" })
}

exports.updateArtistInfo = async (req, res) => {
  // 1. obtener la informacion del request
  const { nickname, country, genre, links } = req.body
  // 2. obtener el id del artista del req.user (si no es artista devolver un error)
  if (!req.user.artist)
    return res.status(401).json({
      message: "Unauthorized"
    })
  // 3. buscar el artista por id y actualizar los valores
  const artistInfo = await Artist.findByIdAndUpdate(
    req.user.artist,
    {
      nickname,
      country,
      genre,
      links
    },
    { new: true }
  )

  res.status(200).json(artistInfo)
}

exports.updateLikes = async (req, res) => {
  // 1. El id del artista
  const { artistId } = req.params
  const { favorites, _id } = req.user
  let artist

  // 2. Prevenir el auto like
  if (req.user.artist === artistId)
    return res.status(401).json({
      message: "Unauthorized"
    })

  const user = await User.findOne({ _id })
  // 3. Buscamos el artista en el arreglo de favoritos del usuario
  if (favorites.includes(artistId)) {
    // 4. si existe, lo quitamos y decrementamos los likes
    user.favorites.splice(favorites.indexOf(artistId), 1)
    artist = await Artist.findByIdAndUpdate(
      artistId,
      { $inc: { likes: -1 } },
      { new: true }
    )
  } else {
    // 5. si no existe, lo agregamos e incrementamos los likes
    user.favorites.push(artistId)
    artist = await Artist.findByIdAndUpdate(
      artistId,
      { $inc: { likes: 1 } },
      { new: true }
    )
  }
  console.log(artist)
  await user.save()

  res.json({ user, artist })
}

exports.updateRating = async (req, res) => {
  // 1. id del artista
  const { artistId } = req.params
  // 2. obtener el score del body
  const { score } = req.body
  // 3. agregar o actualizar el rating, si es que existe,
  const rating = await Rating.findOne({
    $and: [{ userId: req.user._id }, { artistId }]
  })

  if (rating) {
    rating.score = score
    await rating.save()
  } else {
    // 4. Crear el rating
    await Rating.create({
      userId: req.user._id,
      artistId,
      score
    })
  }

  const ratingsByArtist = await Rating.find({ artistId })

  const avg =
    ratingsByArtist.reduce((prev, current) => {
      return prev + current.score
    }, 0) / ratingsByArtist.length

  res.json({ score: avg })
}

exports.getAllArtists = async (req, res) => {
  // buscar a los artistas
  const artists = await Artist.find()
  res.status(200).json({ artists })
  // devolver a los artistas
}
exports.getArtistsById = async (req, res) => {
  // extraer el id de params
  const { artistId } = req.params
  // buscar al artista por su id
  const artist = await Artist.findById(artistId)

  const ratingsByArtist = await Rating.find({ artistId })

  const avg =
    ratingsByArtist.reduce((prev, current) => {
      return prev + current.score
    }, 0) / ratingsByArtist.length

  artist.rating = avg
  // devolver al artista
  res.status(200).json(artist)
}
