import React from 'react';

import {Layout, Row, Col, Typography, Button} from "antd";

import HeaderComponent from "./components/HeaderComponent"

import "./App.css"
import chef from "./assets/chef.png"

const {Header, Content} = Layout;
const {Title, Text, Paragraph} = Typography

function App() {
  return (
    <Layout>
        <Header className="header">
          <HeaderComponent />
        </Header>
        <Content className="content">
          <Row type="flex" align="middle" style={{paddingLeft:120}}>
            <Col span={10}>
              <Row>
                <Col>
                  <Title level={1}>Let's Get Cooking!</Title>
                </Col>
                <Col style={{paddingTop:10, paddingBottom:20}}>
                  <Text style={{color:"#000",fontFamily:"helvetica", fontSize:16, paddingTop:40, paddingBottom:40}}>Explore the best recipes from around the world. <br></br> Make cooking enjoyable again.</Text>
                </Col>
                <Col>
                  <Button 
                    size="large"
                    style={{backgroundColor:"#3c7843",
                    color:"white"}}>
                    Explore Recipes
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col span={14}>
              <img src={chef} className="chef" />
            </Col>
          </Row>
        </Content>
    </Layout>
  
  );
}

export default App;
