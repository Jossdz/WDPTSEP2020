import axios from "axios"

// Preparandonos para el futuro... podemos definir una url varieble en funcion al entorno donde se ejecuta nuestro proyecto
const baseURL =
  process.env.NODE_ENV === "production"
    ? "/artist"
    : "http://localhost:3001/artist"

const _axios = axios.create({
  baseURL,
  // Tenemos que enviar esta configuracion si el endpoint al que accedemos utiliza la sesion del server,  o sea si vamos a usar al req.user del backend.
  withCredentials: true
})

export const getArtistInfo = artistId => _axios.get(`/${artistId}`)
export const becomeArtist = artistInfo => _axios.post("/create", artistInfo)
export const updateArtistInfo = artistInfo =>
  _axios.patch("/update", artistInfo)
export const updateArtistLike = artistId => _axios.patch(`/${artistId}/like`)
export const updateArtistRating = (score, artistId) =>
  _axios.patch(`/${artistId}/rating`, { score })
