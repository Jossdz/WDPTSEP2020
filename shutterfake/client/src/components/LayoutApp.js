import { Layout, Menu } from "antd"

const { Header, Content, Footer } = Layout

function LayoutApp({ children }) {
  return (
    <Layout className='layout'>
      <Header>
        <div className='logo' />
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={["2"]}>
          <Menu.Item key='1'>nav 1</Menu.Item>
          <Menu.Item key='2'>nav 2</Menu.Item>
          <Menu.Item key='3'>nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{ padding: "1rem 50px", height: "calc(100vh - 64px - 70px)" }}
      >
        <div className='site-layout-content'>{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>with 💙 by PT Ironhackers</Footer>
    </Layout>
  )
}

export default LayoutApp
