import React, { useState, useContext } from 'react'
import { Layout, Menu, message } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { Ctx } from '../hooks/context'
import { logoutProcess } from '../services/auth'

const { Header, Sider, Content } = Layout

const LayoutApp = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const { user, logout } = useContext(Ctx)

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  const initLogout = async () => {
    await logoutProcess()
    logout()
    message.info('logged out')
  }

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ height: '100vh', paddingTop: '64px' }}
      >
        <Menu theme='dark' mode='inline'>
          <Menu.Item key='1' icon={<UserOutlined />}>
            <Link to='/'>Home</Link>
          </Menu.Item>
          {!user && (
            <Menu.Item key='2' icon={<VideoCameraOutlined />}>
              <Link to='/auth'>Auth</Link>
            </Menu.Item>
          )}
          {user && (
            <Menu.Item key='3' icon={<UploadOutlined />}>
              <Link to='/profile'>Profile</Link>
            </Menu.Item>
          )}
          {user && (
            <Menu.Item key='4' icon={<UploadOutlined />} onClick={initLogout}>
              Logout
            </Menu.Item>
          )}
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: toggle
            }
          )}
        </Header>
        <Content
          className='site-layout-background'
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutApp
