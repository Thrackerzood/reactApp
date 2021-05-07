import React from "react";
import {BrowserRouter as Router,Switch,Route,Link,useParams} from "react-router-dom";


function CatId() {
   let { id } = useParams();
 
   return (
     <main>
        <p> Name: {id}</p>
     </main>
   );
 }

 export default CatId