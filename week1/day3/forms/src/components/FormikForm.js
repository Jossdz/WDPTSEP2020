import { useFormik } from "formik"
import { Input } from "antd"

const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: values => {
      console.log(values)
    }
  })

  const {
    values: { email, password }
  } = formik

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor='email'>Email:</label>
      <br />
      <Input
        type='text'
        name='email'
        id='email'
        value={email}
        onChange={formik.handleChange}
      />
      <br />
      <label htmlFor='password'>Password:</label>
      <br />
      <Input
        type='password'
        name='password'
        id='password'
        value={password}
        onChange={formik.handleChange}
      />
      <br />
      <button>Submit</button>
    </form>
  )
}

export default FormikForm
