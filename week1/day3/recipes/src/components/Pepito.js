import { useEffect, useState } from "react"

const Pepito = () => {
  const [age, setAge] = useState(1)
  let intervalId
  // useEffect es una funcion que recibe como primer argumento un callback con lo que el componente debe hacer, como segundo argumento recibe un arreglo de dependencias, si estas dependecias cambian, el efecto se dispara una vez mas.
  // Este useEfffect solo deberia notificarnos cuando el componente se monta
  useEffect(() => {
    // Este codigo solo se ejecuta cuando el componente se coloca en la vista por primera vez (componentDidMount)
    console.log("Pepito nace")
    intervalId = setInterval(() => {
      console.log("en interval")
      setAge(curentAge => curentAge + 1)
    }, 2000)

    return () => {
      console.log("RIP Pepito")
      clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    console.log("Yeiiii 🎂🎉 fue el cumple de pepito")

    if (age === 18) {
      console.log("Pepito es mayor de edad")
    }
  }, [age])

  // La funcion que retorna un useEffect se conoce como cleanup function y es la que se ejecuta cuando el componente muere (deja de estar en la vista)
  // useEffect(() => {
  //   // cleanup function
  //   return () => {
  //     console.log("RIP Pepito")
  //   }
  // }, [])

  return (
    <div>
      <h3>Pepito y tengo {age} años</h3>
      <button onClick={() => setAge(age + 1)}>cumpleaños de pepito</button>
    </div>
  )
}

export default Pepito
