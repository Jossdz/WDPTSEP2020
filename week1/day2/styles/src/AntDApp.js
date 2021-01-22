import React from "react"
import { Row, Col, Card } from "antd"
import ModalComponent from "./components/ModalComponent"

function AntDApp() {
  const contentStyle = {
    width: "100vw",
    height: "400px",
    backgroundColor: "rgba(50,50,50,0.5)"
  }
  return (
    // Gutter es el espacio entre los elementos de la grilla
    <Row gutter={[16, 24]}>
      <Col xs={24} sm={24} md={12} lg={8}>
        <Card title='Card'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          consectetur deleniti ad sint iste nulla sapiente voluptatem corporis
          commodi, cupiditate laboriosam, accusantium nemo nesciunt consequatur
          doloremque voluptas labore autem veritatis?
        </Card>
      </Col>
      <Col xs={24} sm={24} md={12} lg={8}>
        <Card title='Card'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          consectetur deleniti ad sint iste nulla sapiente voluptatem corporis
          commodi, cupiditate laboriosam, accusantium nemo nesciunt consequatur
          doloremque voluptas labore autem veritatis?
        </Card>
      </Col>
      <Col xs={24} sm={24} md={12} lg={8}>
        <Card title='Card'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          consectetur deleniti ad sint iste nulla sapiente voluptatem corporis
          commodi, cupiditate laboriosam, accusantium nemo nesciunt consequatur
          doloremque voluptas labore autem veritatis?
        </Card>
      </Col>
      <Col xs={24} sm={24} md={12} lg={8}>
        <Card title='Card'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          consectetur deleniti ad sint iste nulla sapiente voluptatem corporis
          commodi, cupiditate laboriosam, accusantium nemo nesciunt consequatur
          doloremque voluptas labore autem veritatis?
        </Card>
      </Col>
      <ModalComponent />
    </Row>
  )
}

export default AntDApp
