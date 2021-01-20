import React, { useState } from "react"

const Counter = ({ initialCounter }) => {
  // Los hooks siempre tienen que ser invocados a esta altura
  const [counter, setCounter] = useState(initialCounter)
  //   getter👆  - setter👆
  // Con useState no se acostumbra tener un estado general para el componente, en su lugar cada propiedad requerida usara su propio useState.

  // const [counter, setCounter] = useState(() => initialCounter);
  // Pueden pasar un callback a set state si el calculo del valor inicial es muy pesado
  // Lazy initialization https://kentcdodds.com/blog/use-state-lazy-initialization-and-function-updates

  function increment() {
    // podemos pasar un callback al setter de un useState para evitar referenciar a la propiedad directamente
    setCounter(currentCounter => currentCounter + 1)
  }
  function decrement() {
    setCounter(counter - 1)
  }
  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default function App() {
  const [inputState, setInputState] = useState("")

  function handleInputChange({ target: { value } }) {
    setInputState(value)
  }

  return (
    <div className='App'>
      <Counter initialCounter={5} />
      {inputState}
      <br />
      <input onChange={handleInputChange} value={inputState} />
    </div>
  )
}
