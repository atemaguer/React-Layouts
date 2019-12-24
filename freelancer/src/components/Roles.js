import React from 'react'

import { Typography , Card} from "antd";

const { Text } = Typography

const roles = {"Camera operator":false,"Photographer":true, "Director of photographer": true, "Executive singer":false, "Record artist":true}
const Roles = () =>{
    return (
        <div style={styles.container}>
            {Object.keys(roles).map((key)=>{
                return roles[key] ? (<Card style={styles.role} bodyStyle={{padding:8}} bordered={false}>
                    <Text>{key}</Text>
                </Card>) : <Card style={{display:"inline-flex",margin:4, backgroundColor:"rgb(213, 215, 222)"}} bodyStyle={{padding:8}} bordered={false}>
                    <Text>{key}</Text>
                </Card>
            })}
        </div>
    )
}

const styles = {
    container:{
        diplay:"flex", 
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    role:{
        display:"inline-flex",
        boxShadow:"0 0.5px 0 0 #ffffff inset, 0 1px 2px 0 #B3B3B3",
        margin:4
    }
}

export default Roles;