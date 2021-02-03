import { Row, Col, Typography, Divider } from 'antd'
import { useContext } from 'react'
import { Ctx } from '../hooks/context'
import { Redirect } from 'react-router-dom'

const { Title } = Typography

const Profile = () => {
  const { user } = useContext(Ctx)
  return user ? (
    <Row>
      <Col offset={3} span={21}>
        <Title level={1}>Profile</Title>
      </Col>
      <Divider />
      <Col offset={3} span={21}>
        <Title level={2}>Email: {user.email}</Title>
        <img src={user.avatar} width='200' alt='avatar' />
      </Col>
    </Row>
  ) : (
    <Redirect to='/auth' />
  )
}

export default Profile
