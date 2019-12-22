import React from 'react'

import {Row, Col, Typography, Card, Icon} from "antd"

const SubHeader = () =>{
    return (
        <Row type="flex" justify="space-between" align="center"  style={{marginTop:12, marginRight:40, marginBottom:24, alignItems:"center"}} gutter={24}>
           <Col span={15}>
                    <Typography.Text strong >45 Results found</Typography.Text>
            </Col>
            <Col span={3}>
                <Row type="flex">
                    <Card bodyStyle = {{display:"flex", justifyContent:"space-between", alignItems:"center",padding:16, boxShadow: "-1px 8px 10px -5px rgba(0,0,0,0.41)", borderRadius:4}} bordered={false}>
                            <Typography.Text style={{marginLeft:8, marginRight:8}}>Benjamin</Typography.Text>   
                            <Icon type="down" /> 
                    </Card>
                </Row>
            </Col>     
            <Col span={6}>
                    <Row type="flex" gutter={8} style={{backgroundColor:"#EAECF3", padding:8, borderRadius:4}}>
                        <Col span={12}>
                            <Card bodyStyle = {{display:"flex", justifyContent:"space-between", alignItems:"center",padding:8, borderRadius:4}} bordered={false}>
                                    <Icon type="appstore" /> 
                                    <Typography.Text style={{marginLeft:8, marginRight:8}}>Benjamin</Typography.Text>   
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card bodyStyle = {{display:"flex", justifyContent:"space-between", alignItems:"center",padding:8, borderRadius:4}} bordered={false}>
                                    <Icon type="menu" /> 
                                    <Typography.Text style={{marginLeft:8, marginRight:8}}>Benjamin</Typography.Text>   
                            </Card>
                        </Col>
                    </Row>
            </Col>     
        </Row>
    )
}

export default SubHeader;