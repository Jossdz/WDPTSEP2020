import { Form, Input, Typography, Button, Row, Col } from "antd"
import { useState } from "react"
const { Title } = Typography

const FormAntD = () => {
  // useForm ya nos ayuda a almacenar en su estado interno las propiedades de cada Form.Item, por lo que al invocar el evento onFinish del Form estaran los valores como llaves del objeto value
  const [form] = Form.useForm()
  const [email, setEmail] = useState("")

  const submitForm = value => {
    console.log(value)
  }

  return (
    <Row>
      <Col span={12} offset={6}>
        <Title level={1}>Antd Form</Title>
        <p>{email}</p>
        {/* Al componente Form hay que pasarle como prop form la instancia del formulario que nos retorna useForm */}
        <Form layout='vertical' form={form} onFinish={submitForm}>
          <Form.Item name='email' label='Email'>
            <Input value={email} onChange={e => setEmail(e.target.value)} />
          </Form.Item>
          <Form.Item name='name' label='Name'>
            <Input />
          </Form.Item>
          <Form.Item name='password' label='Password'>
            <Input.Password />
          </Form.Item>
          <Button
            style={{ backgroundColor: "rebeccapurple" }}
            type='primary'
            block
            htmlType='submit'
          >
            Send
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

export default FormAntD
