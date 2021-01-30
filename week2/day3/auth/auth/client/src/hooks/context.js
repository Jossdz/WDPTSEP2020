import { createContext, useState, useEffect, Children } from "react"

export const Ctx = createContext()

export const AppCtxProv = props => {
  const [user, setUser] = useState(null)

  const value = {
    user
  }

  return <Ctx.Provider {...props} value={value} />
}
