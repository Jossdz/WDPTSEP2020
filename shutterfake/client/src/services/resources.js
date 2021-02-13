import axios from "axios"
const baseURL =
  process.env.NODE_ENV === "production" ? "/coso" : "http://localhost:3001/coso"

const _axios = axios.create({
  baseURL,
  // Tenemos que enviar esta configuracion si el endpoint al que accedemos utiliza la sesion del server,  o sea si vamos a usar al req.user del backend.
  withCredentials: true
})

export const getAllResouces = () => _axios.get()
export const getOneResource = resourceId => _axios.get(`/${resourceId}`)
export const createResource = resource => _axios.post("/", resource)
export const updateResource = (resourceId, updates) =>
  _axios.patch(`/${resourceId}`, updates)
export const deleteResource = resourceId => _axios.delete(`/${resourceId}`)
