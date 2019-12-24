import React, { Component } from 'react'

import { Typography, Row, Col } from "antd"

const { Text, Paragraph } = Typography
const AvatarList = (props) =>{
    return (
        <Row type="flex" justify="space-between" align="middle">
            <Col span={12}>
                <div style={styles.avatarsContainer}>
                    {[1,2,3,4,5,6].map((_, i)=>{
                        if(i >= 5){  
                            return (
                                <div style={{...styles.avatar, left:i * 24}}>
                                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80" style={styles.image}/>
                                    <div style={styles.overlay}>
                                        <p style={{color:"white", margin:0}}>+6</p>
                                    </div>
                                </div>
                            )
                        };
                        return (<div style={{...styles.avatar, left:i * 24}}>
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80" style={styles.image}/>
                    </div>)
                    })}
                </div>
            </Col>
            <Col span={12}> 
                <Paragraph style={{margin:0}}>10 clients in the list</Paragraph>
            </Col>
        </Row>
            
    )
}

const styles = {
    contentContainer:{
        display:"flex",
        flexDirection:"row",
    },
    avatarsContainer:{
        display:"flex",
        flexDirection:"row",
        position:"relative",
        height:32,
        marginTop:8,
    },
    avatar:{
        height:32,
        width:32,
        position:"absolute",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    image:{
        width:"100%",
        height:"100%",
        borderRadius:100,
        borderWidth:2,
        borderColor:"white",
        borderStyle:"solid",
        zIndex:5
    },
    overlay:{
        width:32,
        height:32,
        opacity:0.6,
        zIndex:10,
        borderRadius:50,
        borderStyle:"solid",
        borderColor:"white",
        display:"flex",
        borderWidth:2,
        backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center",
        position:"absolute"
    }
}

export default AvatarList;