import React from 'react'
import styles from './style.js'


export default function MainList({mainList}){
   return (<li style={styles.li}>{mainList.title}</li>);
}