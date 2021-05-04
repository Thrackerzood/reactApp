import React from 'react'



export default function MainList({mainList, index}){
   return (<li>{index + 1} {mainList.title}</li>);
}