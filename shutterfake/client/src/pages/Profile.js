import React from "react"
import { useAuthInfo } from "../hooks/authContex"
import { Typography, Col, Row } from "antd"

const { Title, Text } = Typography

function Profile() {
  const { user } = useAuthInfo()
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={{ span: 10, offset: 2 }}>
        <Title level={1}>Profile:</Title>
        <Row>
          <Col span={24}>
            <Text>Email: {user.email}</Text>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Profile
