import { createContext, useState, useEffect } from 'react'
import { currentUser } from '../services/auth'

export const Ctx = createContext()

export const AppCtxProv = props => {
  const [user, setUser] = useState(null)

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
