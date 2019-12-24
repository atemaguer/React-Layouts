import React from 'react'

import {Row, Col, Avatar, Input, Dropdown, Icon, Menu, Card, Typography} from "antd"

const {Search} = Input

const Navbar = () =>{
    const menu =  (
        <Menu>
          <Menu.Item key="1">
            <Icon type="user" />
            1st menu item
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="user" />
            2nd menu item
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="user" />
            3rd item
          </Menu.Item>
        </Menu>
      );
    return (
        <Row type="flex" align="middle" justify="space-between">
            <Col span={8} style={{display:"flex", justifyContent:"center"}}>
                <Search 
                    placeholder="Search..."
                    enterButton
                    size="large"
                />
            </Col>
            <Col span={8} style={{display:"flex", justifyContent:"flex-end"}}>
              <Dropdown overlay={menu}>
                <Card style={{width:200}} bodyStyle = {{display:"flex", alignItems:"center", padding:0, boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)", borderRadius:4}} bordered={false}>
                  <Avatar shape="square" size={48} src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" />
                  <Typography.Text style={{marginLeft:10, marginRight: 10}}>Benjamin Duncan</Typography.Text>   
                  <Icon type="down" /> 
                </Card>    
              </Dropdown>
            </Col>
        </Row>
    )
}

export default Navbar;