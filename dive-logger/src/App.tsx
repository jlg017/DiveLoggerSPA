import React, { useState } from 'react';
import { Layout, Flex } from 'antd';

import './App.css';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        Nav stuff
      </Sider>
      <Layout>
        <Header style={{ color: 'white', background: 'green' }}>
          Dive Logger
        </Header>
        <Content>Your dives...</Content>
        <Footer>Jackie.co</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
