import React from 'react';

import {Layout} from "antd";
import 'antd/dist/antd.css';

import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import styles from "./styles"

const {Content, Sider, Header} = Layout;

function App() {
  return (
    <div>
        <Layout>
            <Sider width={240} style={styles.sidebarContainer}>
              <Sidebar />
            </Sider>
            <Layout>
              <Header style={styles.header}>
                <Navbar />
              </Header>
              <Content>
                <p>Sub header Content</p>
                <div>
                  body
                </div>
              </Content>
            </Layout>
        </Layout>
    </div>
  );
}

export default App;
