import { useEffect, useState } from "react"
import UseHooks from "../hooks/usehooks"
import { Link } from "react-router"

let Chekbox = ()=>{
   
  
  
      return <>
      <div className="chek">
         <div className="chek-container">
                <p>1000 Rs-2000 Rs.</p>
                <Link to="/frist"><input type="checkbox" name="" id=""/></Link>
         </div>
         <div className="chek-container">
                <p>2000 Rs.-3000 Rs.</p>
                <Link to="/second"><input type="checkbox" name="" id="" /></Link>
         </div>
         <div className="chek-container">
                <p>3000 Rs.-4000 Rs.</p>
               <Link to="/third"><input type="checkbox" name="" id="" /></Link> 
         </div>
         <div className="chek-container">
                <p>4000 Rs.-5000 Rs.</p>
               <Link to="/last"> <input type="checkbox" name="" id=""/></Link>
         </div>
        
</div>
      </>
}
export default Chekbox