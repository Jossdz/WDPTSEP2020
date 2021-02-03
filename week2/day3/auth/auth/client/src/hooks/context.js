import { createContext, useState, useEffect } from 'react'

export const Ctx = createContext()

export const AppCtxProv = props => {
  const [user, setUser] = useState({ email: 'carloscorrea.dev@gmail.com' })

  const value = {
    user,
    l: 's'
  }

  return <Ctx.Provider {...props} value={value} />
}
