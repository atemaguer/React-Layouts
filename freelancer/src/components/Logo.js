import React from 'react'

import styles from "./styles"
import logo from "../assets/logo.png"

const Logo = () => (
    <div style={styles.logContainer}>
        <img src={logo} style={styles.logo}/>
    </div>
)

export default Logo;