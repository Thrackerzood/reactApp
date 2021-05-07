import {Link} from 'react-router-dom';
import React from "react"


class Header extends React.Component{
render(){
   return (
      <header>
         <nav>
            <ul >
               {Array.from(this.props.state).map((prop,index) =>{
                  return(
                     <li key={index}><Link className="navA" to={prop.path}>{prop.title}</Link></li>//spa! no link - no spa!
                  )
               })}
            </ul>
         </nav>
      </header>
   )      
   }      
}
export {Header}
