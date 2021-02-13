import { Button, Form, Input, message } from "antd"
import { becomeArtist } from "../services/artist"
import { useAuthInfo } from "../hooks/authContex"

function ArtistCreateForm({ closeModal }) {
  const [form] = Form.useForm()
  const { setUser } = useAuthInfo()

  const sendArtistInfo = async info => {
    try {
      const { data } = await becomeArtist(info)
      setUser(data)
      closeModal()
      message.success("Artist profile created")
    } catch (error) {
      console.dir(error)
      message.error("Error")
    }
  }

  return (
    <Form form={form} layout='vertical' onFinish={sendArtistInfo}>
      <Form.Item name='nickname' label='Nickname:'>
        <Input />
      </Form.Item>
      <Form.Item name='country' label='Country:'>
        <Input />
      </Form.Item>
      <Form.Item name='genre' label='Genre:'>
        <Input />
      </Form.Item>
      <Button type='primary' block htmlType='submit'>
        Send
      </Button>
    </Form>
  )
}

export default ArtistCreateForm
