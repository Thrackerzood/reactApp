import React from 'react'
import MainList from './mainList.js'

const styles = {
   ul:{
      listStyle: 'none',
      margin: 0,
      padding: 0,
   }
}

export default function Main(props){
   return(
      <main>
         <ul style={styles.ul}>
            {props.li.map((list,index)=>{
               return (
                  <MainList mainList={list} key = {list.id} index = {index}/>
               )
            })}
         </ul>
      </main>
   )
}