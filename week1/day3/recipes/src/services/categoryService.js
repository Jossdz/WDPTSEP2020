import axios from "axios"

const _axios = axios.create({
  baseURL: "https://api.nytimes.com/svc/books/v3/lists/current"
})

export const getBooksByCategory = category =>
  _axios.get(`/${category}.json?api-key=UF4KeLU9D2yvmzjHWBvhFEBEGXQZ7tx1`)
