import axios from "axios"

// Preparandonos para el futuro... podemos definir una url varieble en funcion al entorno donde se ejecuta nuestro proyecto
const baseURL =
  process.env.NODE_ENV === "production" ? "/auth" : "http://localhost:3001/auth"

const _axios = axios.create({
  baseURL,
  // Tenemos que enviar esta configuracion si el endpoint al que accedemos utiliza la sesion del server,  o sea si vamos a usar al req.user del backend.
  withCredentials: true
})

export const signupFn = user => _axios.post("/signup", user)
export const loginFn = user => _axios.post("/login", user)
export const logoutFn = _ => _axios.get("/logout")
export const getCurrentUser = _ => _axios.get("/session")
export const updateAvatar = avatar => _axios.post("/avatar/change", { avatar })
