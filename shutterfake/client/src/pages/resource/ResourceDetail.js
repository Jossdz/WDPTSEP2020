/* eslint-disable default-case */
import { useEffect, useState, useRef } from "react"
import { Row, Col, Typography, Skeleton, Button, Tag } from "antd"
import { getOneResource } from "../../services/resources"

const { Title, Text } = Typography

function ResourceDetail({ match: { params }, history }) {
  const [resource, setResource] = useState(null)
  const buyButtonRef = useRef()

  useEffect(() => {
    async function getResource() {
      const { data: resource } = await getOneResource(params.resourceId)

      setResource(resource)
    }
    getResource()
  }, [params.resourceId])

  useEffect(() => {
    if (resource) {
      const script = document.createElement("script")
      script.src =
        "https://www.mercadopago.com.mx/integrations/v1/web-payment-checkout.js"
      script.setAttribute("data-preference-id", resource.preferenceId)

      if (buyButtonRef.current) {
        buyButtonRef.current.appendChild(script)
      }
    }
  }, [resource])

  function returnResourceTag(type) {
    switch (type) {
      case "IMAGE":
        return <Tag color='blue'>Image</Tag>
      case "VIDEO":
        return <Tag color='magenta'>Video</Tag>
      case "AUDIO":
        return <Tag color='geekblue'>Audio</Tag>
    }
  }

  console.log(params)
  return resource ? (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Title>{resource.name}</Title>
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        <img src={resource.url} alt={resource.name} style={{ width: "100%" }} />
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        <Title level={2}>
          Price: <Text type='secondary'>${resource.price}.00</Text>
        </Title>
        <p>
          <Text type='secondary'>{resource.description}</Text>
        </p>
        {returnResourceTag(resource.type)}
        <div ref={buyButtonRef}></div>
        <Button style={{ margin: "5px 0" }} block type='dashed'>
          Edit
        </Button>
        <Button
          style={{ margin: "5px 0" }}
          block
          onClick={() => history.goBack()}
        >
          Back
        </Button>
      </Col>
    </Row>
  ) : (
    <Skeleton active />
  )
}

export default ResourceDetail
