const express = require("express")
const router = express.Router()
const { isAuth, catchErrors, isArtists } = require("../middlewares")
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
const {
  getColsByUser,
  getOneCol,
  createCol,
  updateCol,
  addResourceToCol,
  deleteResourceFromCol,
  deleteCol
} = require("../controllers/collection")
const {
  createPreference,
  createOrder,
  userOrders
} = require("../controllers/order")

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
router.get("/coso/all", catchErrors(getAllCosos))
router.post("/coso", isAuth, isArtists, catchErrors(createCoso))
router.get("/coso/:cosoId", catchErrors(getCosoById))
router.patch("/coso/:cosoId", catchErrors(updateCoso))
router.delete("/coso/:cosoId", catchErrors(deleteCoso))

//===========Collections===========
router.get("/col", isAuth, catchErrors(getColsByUser))
router.get("/col/:colId", catchErrors(getOneCol))
router.post("/col", isAuth, catchErrors(createCol))
router.patch("/col/:colId", catchErrors(updateCol))
router.patch("/col/:colId/:cosoId", catchErrors(addResourceToCol))
router.delete("/col/:colId/:cosoId", catchErrors(deleteResourceFromCol))
router.delete("/col/:colId", catchErrors(deleteCol))

// //===========Orders=========== TODO: Terminar ordenes con MP.

// router.post("/preference", catchErrors(createPreference))
// router.post("/order", isAuth, catchErrors(createOrder))
// router.get("/order", isAuth, catchErrors(userOrders))
// // Generar la preferencia con mercadopago de nuestro carrito
// // uyetrqi8w47
// // Generar la orden (ya pagado)

module.exports = router
