import { Form, Typography, Col, Row, Button, Input, message } from "antd"
import { signupFn } from "../services/auth"

function Signup() {
  const [form] = Form.useForm()

  async function handleSubmit(userInfo) {
    try {
      await signupFn(userInfo)
      message.success("Account created")
    } catch (error) {
      message.error(error.response.data.message)
    }
  }

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={{ span: 8, offset: 8 }}>
        <Typography.Title level={1}>Signup</Typography.Title>
        <Form form={form} onFinish={handleSubmit} layout='vertical'>
          <Form.Item name='email' label='Email:'>
            <Input type='email' />
          </Form.Item>
          <Form.Item name='username' label='Username:'>
            <Input />
          </Form.Item>
          <Form.Item name='password' label='Password:'>
            <Input.Password />
          </Form.Item>
          <Button type='primary' htmlType='submit' block size='large'>
            Signup
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

export default Signup
