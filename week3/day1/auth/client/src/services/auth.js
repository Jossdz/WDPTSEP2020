import axios from "axios"

const baseURL = "http://localhost:3001/auth"

const _axios = axios.create({
  baseURL,
  withCredentials: true
})

export const signupProcess = user => _axios.post("/signup", user)
export const loginProcess = user => _axios.post("/login", user)
export const logoutProcess = () => _axios.get("/logout")
export const currentUser = () => _axios.get("/current-user")
// export const googleInit = () => _axios.get("/google")
// export const facebookInit = () => _axios.get("/facebook")
