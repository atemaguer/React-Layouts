import React from 'react'

import {Row, Col, Button, Input, Dropdown, Icon, Menu} from "antd"

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
                <Button size="large">
                    Button <Icon type="down" />
                </Button>
            </Dropdown>
            </Col>
        </Row>
    )
}

export default Navbar;