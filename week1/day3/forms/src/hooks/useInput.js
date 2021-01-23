import { useState } from "react"

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  // Generamos un objeto con las 2 cosas que requiere un input para ser controlado
  const bind = {
    value,
    onChange: e => setValue(e.target.value)
  }

  return [value, bind]
}
