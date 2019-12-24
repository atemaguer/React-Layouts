import React from 'react';

import {Layout, Row, Col, Typography, Card, Icon} from "antd";
import 'antd/dist/antd.css';

import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import SubHeader from "./components/SubHeader"

import styles from "./styles"

const {Content, Sider, Header} = Layout;

function App() {
  return (
    <div>
        <Layout>
            <Sider width={240} collapsedWidth={0} breakpoint="xs" style={styles.sidebarContainer}>
              <Sidebar />
            </Sider>
            <Layout>
              <Header style={styles.header}>
                <Navbar />
              </Header>
              <Content style={{paddingLeft:56, paddingTop:8}}>
                <SubHeader />
                <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
                    <Profile />
                    <Profile />
                    <Profile />
                    <Profile />
                    <Profile />
                </div>
              </Content>
            </Layout>
        </Layout>
    </div>
  );
}

export default App;
