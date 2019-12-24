import React from 'react'

import {Card, Row, Col, Divider, Typography, Icon, Progress, Button, Avatar, Badge} from "antd"

import AvatarList from "./AvatarList"
import Roles from "./Roles"
import styles from "./styles";

const {Title, Text, Paragraph} = Typography

const Profile = () =>{
    return (
        <Card bordered={false} style={{width:340, boxShadow:"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)", borderRadius:4, marginRight:32, marginTop:16, marginBottom:16}} bodyStyle={{padding:16}}>
            <Row>
                <Col span={6}>
                    <Badge dot style={{backgroundColor:"green"}}>
                        <Avatar shape="square" size={48} src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80" />
                    </Badge>
                </Col>
                <Col span={18}>
                    <Text>Joel Henderson</Text>
                    <Row>
                        <div style={{display:"inline-flex", backgroundColor:"#FCEFF5",paddingLeft:4, paddingRight:4, borderRadius:4}}>
                            <Text strong style={{color:"#EB5D99"}}>230$</Text>
                        </div>
                        <Divider type="vertical"></Divider>
                        <Text>Not negotiable</Text>
                    </Row>
                </Col>
            </Row>
            <Row type="flex" align="center" justify="space-between">
                <Col span={7} style={styles.center}>
                    <Paragraph style={{marginBottom:0}}>9.7 RATING</Paragraph>
                </Col>
                <Col span={13} style={styles.center} >
                    <Progress percent={70} showInfo={false} strokeColor="green"/>
                </Col>
                <Col span={4} style={{...styles.center, justifyContent:"flex-end"}}>
                    <Card bordered={false} bodyStyle={{display:"flex", height: 0, width: 0, padding:20, justifyContent:"center", alignItems:"center", borderRadius:"100%", boxShadow:"-1px 0px 19px -5px rgba(0,0,0,0.89)"}}>
                        <Icon type="heart" style={{color:"red"}} theme="filled"/>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Text strong>ROLES</Text>
                <Roles />
            </Row>
            <Row style={{marginBottom:8, marginTop:16}}>
                <Text strong>ASK PEOPLE</Text>
                <AvatarList />
            </Row>
            <Row gutter={24} style={{marginBottom:18, marginTop:18}}>
                <Col span={12}>
                    <Button block size="large" type="danger">
                        <Text strong style={{color:"white"}}>BOOK NOW</Text>
                    </Button>
                </Col>
                <Col span={12}>
                    <Button block size="large" type="primary">
                    <Text strong style={{color:"white"}}>PENCIL</Text>
                    </Button>
                </Col>
            </Row>
            <Row style={{marginTop:18}}>
                <Col>
                    <Button block size="large">
                    <Text strong>CHECK AVAILABILITY</Text>
                    </Button>
                </Col>
            </Row>
        </Card>
    )
}

export default Profile;