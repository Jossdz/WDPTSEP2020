import useInput from "../hooks/useInput"

const FormCH = () => {
  const [email, bindEmail] = useInput("")
  const [password, bindPassword] = useInput("")

  const handleSubmit = e => {
    e.preventDefault()
    console.log(email, password)
  }

  // const students = [
  //   {
  //     name: "Juan",
  //     group: "A",
  //     a: "a",
  //     b: "b"
  //   },
  //   {
  //     name: "Gala",
  //     group: "B",
  //     a: "a",
  //     b: "b"
  //   },
  //   {
  //     name: "Dylan",
  //     group: "C",
  //     a: "a",
  //     b: "b"
  //   }
  // ]

  return (
    <>
      <h1>Custom hook</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input type='text' name='email' id='email' {...bindEmail} />
        <br />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          {...bindPassword}
        />
        <button>Send</button>
      </form>

      {/* {students.map(student => (
        // El spread operator en los props descompone un objeto y pasa cada propiedad como prop individual
        <StudentCard {...student} />
      ))} */}
    </>
  )
}

// function StudentCard({ name, group, b }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>
//         {group} - {b}
//       </p>
//     </div>
//   )
// }

export default FormCH
