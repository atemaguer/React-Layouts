import React from 'react'

import {Button, Row, Col, Typography, Icon} from "antd";

import styles from "./styles";
import logo from "../assets/logo.jpg"

const HeaderComponent = () =>{
    return (
        <div style={styles.header}>
           <Row type="flex" justify="space-around" align="bottom">
               <Col span={12}>
                    <img src={logo} style={{height:60, width:60, borderRadius:20}}/>
               </Col>
               <Col span={12}>
                <Row type="flex" align="middle">
                    <Col span={3}>
                        <Icon type="search" style={{fontSize:24}} />
                    </Col>
                    <Col span={3}>
                    <Button type="link">
                            <Typography>Recipes</Typography>
                        </Button>
                    </Col>
                    <Col span={3}>
                    <Button type="link">
                            <Typography>Dinner TV</Typography>
                        </Button>
                    </Col>
                    <Col span={5}>
                    <Button type="link">
                            <Typography>Cooking School</Typography>
                        </Button>
                    </Col>
                    <Col span={3}>
                        <Button type="link">
                            <Typography>About</Typography>
                        </Button>
                    </Col>
                    <Button style={styles.siginButtonStyle} size="large">
                        Sign In
                    </Button>
                </Row>
               </Col>
           </Row>
        </div>
    )
}

export default HeaderComponent;