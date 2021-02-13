import { useState, useEffect } from "react"
import { useAuthInfo } from "../hooks/authContex"
import {
  Typography,
  Col,
  Row,
  Avatar,
  Button,
  Modal,
  Upload,
  Rate,
  Card
} from "antd"
import ArtistCreateForm from "../components/ArtistCreateForm"
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons"
import axios from "axios"
import { updateAvatar } from "../services/auth"
import { getArtistInfo } from "../services/artist"

const { Title, Text } = Typography

function Profile() {
  //TODO: Complementar

  const { user, setUser } = useAuthInfo()
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [artistInfo, setArtistInfo] = useState(null)

  useEffect(() => {
    async function loadData() {
      const { data } = await getArtistInfo(user.artist)
      setArtistInfo(data)
    }

    loadData()
  }, [])

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  const handleChange = async file => {
    const fdata = new FormData()
    fdata.append("file", file)
    //                                            cloudname 👇    👇 tipo de recurso
    const cloudinaryApi = "https://api.cloudinary.com/v1_1/joss/image/upload"
    fdata.append("upload_preset", "shutterfake")
    setLoading(true)
    const { data } = await axios.post(cloudinaryApi, fdata)
    const { data: user } = await updateAvatar(data.secure_url)
    setLoading(false)
    setUser(user)
  }
  const capitalize = s => {
    if (typeof s !== "string") return ""
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={{ span: 12 }}>
        <Card style={{ width: "100%" }}>
          <Title level={1}>Profile:</Title>
          <Row gutter={[24, 24]}>
            {!user.isArtist && (
              <Col span={24}>
                <Button block type='primary' onClick={openModal}>
                  Become artist
                </Button>
              </Col>
            )}
            <br />
            <Col span={24}>
              <Avatar size={80} src={user.avatar} />
            </Col>
            <Col span={24}>
              <Upload
                name='avatar'
                showUploadList={false}
                beforeUpload={handleChange}
                listType='picture-card'
                className='avatar-uploader'
              >
                {uploadButton}
              </Upload>
            </Col>
            <Col span={24}>
              <Text>Email: {user.email}</Text>
            </Col>
            <Col span={24}>
              <Text>User: {user.username}</Text>
            </Col>
            <Col span={24}>
              <Button block>Edit Profile</Button>
            </Col>
          </Row>
        </Card>
      </Col>
      {user.isArtist && artistInfo && (
        <Col xs={24} sm={24} md={{ span: 12 }}>
          <Card style={{ width: "100%" }}>
            <Title level={1}>Artist info:</Title>
            <Row>
              <Col span={24}>
                <Title level={5}>
                  Nickname:{" "}
                  <Text
                    type='secondary'
                    style={{ textTransform: "capitalize" }}
                  >
                    {artistInfo.nickname}
                  </Text>
                </Title>
                <Title level={5}>
                  Genre:{" "}
                  <Text
                    type='secondary'
                    style={{ textTransform: "capitalize" }}
                  >
                    {artistInfo.genre}
                  </Text>
                </Title>
                <Title level={5}>
                  Country:{" "}
                  <Text
                    type='secondary'
                    style={{ textTransform: "capitalize" }}
                  >
                    {artistInfo.country}
                  </Text>
                </Title>
              </Col>
              <Col span={12}>
                <Title level={5}>Rating:</Title>
                <Rate
                  defaultValue={artistInfo.rating}
                  disabled
                  style={{ borderWidth: 1 }}
                />
              </Col>
              <Col span={12}>
                <Title level={5}>
                  Likes: <Text type='secondary'>{artistInfo.likes}</Text>
                </Title>
              </Col>
            </Row>
          </Card>
        </Col>
      )}
      <Modal
        title='Artist Info'
        onCancel={closeModal}
        visible={showModal}
        footer={false}
      >
        <ArtistCreateForm closeModal={closeModal} />
      </Modal>
    </Row>
  )
}

export default Profile
