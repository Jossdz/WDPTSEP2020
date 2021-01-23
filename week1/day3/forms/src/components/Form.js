const Form = () => {
  const handleSubmit = e => {
    e.preventDefault()

    console.log(e.target[0].value, e.target[1].value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='email'>Email</label>
      <input type='text' name='email' id='email' />
      <br />
      <label htmlFor='password'>Password</label>
      <input type='password' name='password' id='password' />
      <button>Send</button>
    </form>
  )
}

export default Form
