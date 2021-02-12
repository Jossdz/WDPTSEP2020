import { Form, Typography, Col, Row, Button, Input } from "antd"
import React from "react"
import { useAuthInfo } from "../hooks/authContex"

function Login() {
  const [form] = Form.useForm()
  const { login } = useAuthInfo()

  function handleSubmit(userInfo) {
    login(userInfo)
  }

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={{ span: 8, offset: 8 }}>
        <Typography.Title level={1}>Login</Typography.Title>
        <Form form={form} onFinish={handleSubmit} layout='vertical'>
          <Form.Item name='email' label='Email:'>
            <Input type='email' />
          </Form.Item>
          <Form.Item name='password' label='Password:'>
            <Input.Password />
          </Form.Item>
          <Button type='primary' htmlType='submit' block size='large'>
            Login
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

export default Login
