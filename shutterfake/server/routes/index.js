const express = require("express")
const router = express.Router()
const { isAuth, catchErrors } = require("../middlewares")
const {
  becomeArtist,
  updateArtistInfo,
  updateLikes,
  updateRating,
  getAllArtists,
  getArtistsById
} = require("../controllers/artist")
const {
  getAllCosos,
  getCosoById,
  createCoso,
  updateCoso,
  deleteCoso
} = require("../controllers/coso")
/* GET home page */
router.get("/", (req, res, next) => {
  res.send("Shutterfake api")
})

// ============Artist============
// verificamos que exista el user
//                               👇
router.post("/artist/create", isAuth, catchErrors(becomeArtist))

// The main difference between the PUT and PATCH method is that the PUT method uses the request URI to supply a modified version of the requested resource which replaces the original version of the resource, whereas the PATCH method supplies a set of instructions to modify the resource.
router.patch("/artist/update", isAuth, catchErrors(updateArtistInfo))
router.patch("/artist/:artistId/like", isAuth, catchErrors(updateLikes))
router.patch("/artist/:artistId/rating", isAuth, catchErrors(updateRating))
// Mostrar todos los artistas
router.get("/artist/all", catchErrors(getAllArtists))
//Mostrar un artista (por su id)
router.get("/artist/:artistId", catchErrors(getArtistsById))

//===========Cosos===========
router.get("/coso/all", getAllCosos)
router.post("/coso", createCoso)
router.get("/coso/:cosoId", getCosoById)
router.patch("/coso/:cosoId", updateCoso)
router.delete("/coso/:cosoId", deleteCoso)

module.exports = router
