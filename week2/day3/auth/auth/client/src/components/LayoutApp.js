import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'

const { Header, Sider, Content } = Layout

const LayoutApp = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed)
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
          <Menu.Item key='2' icon={<VideoCameraOutlined />}>
            <Link to='/auth'>Auth</Link>
          </Menu.Item>
          <Menu.Item key='3' icon={<UploadOutlined />}>
            <Link to='/profile'>Profile</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header
          className='site-layout-background'
          style={{ padding: 0, color: 'white' }}
        >
          {collapsed ? (
            <MenuUnfoldOutlined style={{ color: 'white' }} />
          ) : (
            <MenuFoldOutlined style={{ color: 'white' }} />
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
