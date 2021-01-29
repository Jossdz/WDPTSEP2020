// Una promesa es un objeto que tendra un futuro 'exito o fallo que podemos resolver.
const DBStatus = "off"

const User = {
  find: new Promise((resolve, reject) => {
    if (DBStatus === "on") {
      resolve([{ username: "joss", password: "123" }])
    } else {
      reject(new Error("DB off"))
    }
  })
}

// User.find
//   .then(data => {
//     console.log(data)
//   })
//   .catch(err => console.error(err))

// async function invoke(){}
const invoke = async () => {
  // directamente hacemos una pausa a la ejecucion del codigo con la palabra clave await y la promesa a resolver
  // Forma numero 1 de manejar el error: Try Catch
  // try {
  const data = await User.find
  console.log(data)
  // } catch (err) {
  //   console.error(err)
  // }
}
// Forma numero 2: invocar el metodo catch que se agrega a todas las funciones asincronas
invoke().catch(err => console.error(err))
