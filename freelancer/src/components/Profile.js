import React from 'react'

import {Card, Row, Col, Divider, Typography, Icon, Progress, Button, Avatar} from "antd"
import styles from "./styles";

const {Title, Text, Paragraph} = Typography

const Profile = () =>{
    return (
        <Card bordered={false} style={{width:340}} bodyStyle={{padding:10}}>
            <Row>
                <Col span={6}>
                  <Avatar shape="square" size={48} icon="user" />
                </Col>
                <Col span={18}>
                    <Text>Joel Henderson</Text>
                    <Row>
                        <Text>230$</Text>
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
                    <Progress percent={50} showInfo={false} />
                </Col>
                <Col span={4} style={{...styles.center, justifyContent:"flex-end"}}>
                    <Card bordered={false} bodyStyle={{display:"flex", height: 0, width: 0, padding:20, justifyContent:"center", alignItems:"center", borderRadius:"100%", boxShadow:"-1px 0px 19px -5px rgba(0,0,0,0.89)"}}>
                        <Icon type="heart"/>
                    </Card>
                </Col>
            </Row>
            <Text>ROLES</Text>
            <Row type="flex">
                {/* <Col style={{position:"relative"}}>
                    <Avatar size="small" icon="user" style={{position:"absolute"}} />
                    <Avatar size="small" icon="user" style={{position:"absolute", left:15, zIndex:1, borderColor:"white", borderWidth:1}}/>
                    <Avatar size="small" icon="user" style={{position:"absolute", left:30, zIndex: 2}}/>
                </Col> */}
            </Row>
        </Card>
    )
}

export default Profile;