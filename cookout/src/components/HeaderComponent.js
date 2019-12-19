import React, {useState} from 'react'

import {Button, Row, Col, Typography, Icon, Input} from "antd";

import styles from "./styles";
import logo from "../assets/logo.jpg"

const {Text} = Typography
const { Search } = Input;

const HeaderComponent = () =>{
    const [activeTab, setActiveTab] = useState("recipes")
    return (
        <div style={styles.header}>
           <Row type="flex" justify="space-around" align="bottom">
               <Col span={8}>
                    <img src={logo} style={{height:60, width:60, borderRadius:20}}/>
               </Col>
               <Col span={16}>
                <Row type="flex" align="middle">
                    
                    <Col span={3}>
                    <Button type="link" onClick={()=>setActiveTab("recipes")}>
                            <Text style={activeTab == "recipes" ? styles.active : {}}>Recipes</Text>
                        </Button>
                    </Col>
                    <Col span={4}>
                    <Button type="link" onClick={()=>setActiveTab("dinnertv")}>
                            <Text style={activeTab == "dinnertv" ? styles.active : {}}>Dinner TV</Text>
                        </Button>
                    </Col>
                    <Col span={5}>
                    <Button type="link" onClick={()=>setActiveTab("cookingschool")}>
                            <Text style={activeTab == "cookingschool" ? styles.active : {}}>Cooking School</Text>
                        </Button>
                    </Col>
                    <Col span={3}>
                        <Button type="link" onClick={()=>setActiveTab("about")}>
                            <Text style={activeTab == "about" ? styles.active : {}}>About</Text>
                        </Button>
                    </Col>
                    <Col span={6}>
                        <Search
                            placeholder="Search..."
                            onSearch={value => console.log(value)}
                            style={{ width: 200 }}
                        />
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