import { createContext, useState, useEffect, useContext } from "react"
import { currentUser } from "../services/auth"
import useLocalStorage from "./useLocalStorage"

export const Ctx = createContext()

export const AppCtxProv = props => {
  // Cambiamos useState por el uso de nuestro custom hook, para que al montarse la aplicacion tomamos el estado inicial de local storage, en vez del valor inicial del useState que se reinicia con cada refresh.
  const [user, setUser] = useLocalStorage(null, "user")

  const login = user => setUser(user)

  const logout = () => setUser(null)

  useEffect(() => {
    async function checkSession() {
      const { data } = await currentUser()
      setUser(data._id ? data : null)
    }
    checkSession()
  }, [])

  const value = {
    user,
    login,
    logout
  }

  return <Ctx.Provider {...props} value={value} />
}

export const useUserInfo = () => useContext(Ctx)
