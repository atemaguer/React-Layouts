import React from 'react'

import {Menu, Icon, Button} from "antd"

import Logo from "./Logo"
import styles from './styles'

const Siderbar = () =>{
    return (
        <div style={styles.container}>
            <Logo />
            <Menu
                defaultSelectedKeys={["recruit"]}
                mode="inline"
            >
                <Menu.Item
                    key="overview"
                >
                    <Icon type="layout"/>
                    <span>Overview</span>
                </Menu.Item>
                <Menu.Item
                    key="recruit"
                >
                    <Icon type="team"/>
                    <span>Recruit</span>
                </Menu.Item>
                <Menu.Item
                    key="reminder"
                >
                    <Icon type="clock-circle"/>
                    <span>Reminder</span>
                </Menu.Item>
                <Menu.Item
                    key="message"
                >
                    <Icon type="message"/>
                    <span>Message</span>
                </Menu.Item>
                <Menu.Item
                    key="estimate"
                >
                    <Icon type="thunderbolt"/>
                    <span>Estimate</span>
                </Menu.Item>
                <Menu.Item
                    key="settings"
                >
                    <Icon type="setting"/>
                    <span>Settings</span>
                </Menu.Item>
                <Button style={styles.footer} size="large">
                    <Icon type="logout"/>
                    <span style={{paddingLeft:8}}>Logout</span>
                </Button>
            </Menu>
        </div>
    )
}

export default Siderbar;