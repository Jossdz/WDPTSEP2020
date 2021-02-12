import { Layout, Menu, Avatar } from "antd"
import { Link } from "react-router-dom"
import { useAuthInfo } from "../hooks/authContex"

const { Header, Content, Footer } = Layout

function LayoutApp({ children }) {
  const { user, logout } = useAuthInfo()

  return (
    <Layout className='layout'>
      <Header>
        <div className='logo' />
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={["2"]}>
          <Menu.Item key='1'>
            <Link to='/'>Home</Link>
          </Menu.Item>
          {!user && (
            <>
              <Menu.Item key='2'>
                <Link to='/login'>Login</Link>
              </Menu.Item>
              <Menu.Item key='3'>
                <Link to='/signup'>Signup</Link>
              </Menu.Item>
            </>
          )}
          {user && (
            // React fragment (evitamos insertar marcado innecesario)
            <>
              <Menu.Item key='4'>
                <Link to='/profile'>
                  <Avatar alt='avatar' src={user.avatar} size='small' />
                  &nbsp;&nbsp;Profile
                </Link>
              </Menu.Item>
              <Menu.Item key='5' onClick={() => logout()}>
                Logout
              </Menu.Item>
            </>
          )}
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
