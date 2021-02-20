import axios from "axios"

const baseURL = "http://localhost:3001/api/places"

const _axios = axios.create({
  baseURL
})

export const getAllPlaces = () => _axios.get()
export const createNewPlace = ({ name, description, lat, lng }) =>
  _axios.post("/", { name, description, lat, lng })
