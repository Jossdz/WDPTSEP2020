import { Layout, Menu } from "antd"

const { Header, Footer, Content } = Layout

// Este es un componente wapper que encierra otros componentes para agregar siempre el mismo contenido al rededor
const LayoutApp = ({ children, title }) => {
  return (
    <Layout>
      <Header style={{ display: "flex", justifyContent: "space-between" }}>
        {title}
        <Menu theme='dark' mode='horizontal'>
          <Menu.Item key='1'>Home</Menu.Item>
          <Menu.Item key='2'>Login</Menu.Item>
          <Menu.Item key='3'>Signup</Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{
          minHeight: "calc(100vh - 64px - 112px)",
          padding: "2rem 5rem"
        }}
      >
        {children}
      </Content>
      <Footer>With 💙 by Ironhack</Footer>
    </Layout>
  )
}

export default LayoutApp
