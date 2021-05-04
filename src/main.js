import React from 'react'
import MainList from './mainList.js'
import styles from './style.js'

export default function Main(props){
   return(
      <header style={styles.header}>
         <ul style={styles.ul} className="ul">
            {props.li.map((list)=>{
               return (
                  <MainList mainList={list} key = {list.id}/>
               )
            })}
         </ul>
      </header>
   )
}