import React from "react"
import { Row, Col, Typography, Button } from "antd"

const { Title } = Typography

function ResourceDetail({ match: { params } }) {
  console.log(params)
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Title>{/* {TODO: Nombre del recurso} */}</Title>
      </Col>
    </Row>
  )
}

export default ResourceDetail
