import { Link } from "react-router"
import { CiShoppingCart } from "react-icons/ci";
import UseHooks from "../hooks/usehooks";
import { useContext, useEffect, useState } from "react";
import { api } from "../contast/contast";
import { Context } from "../context/context";
import CartButton from "./buttonadd";
import Search from "./searchcomponent";
import Chekbox from "./chekbox";

let Women = ()=>{
let {array} = UseHooks()
  let {addCart,data} = useContext(Context)
   
    return <> <div className="nav">
       <div className="website-name-container">
                             <img src="https://th.bing.com/th/id/OIP.M6n_U53so7bRHBmLm7d--QHaHa?rs=1&pid=ImgDetMain" height="25px" alt="" />
                             <p style={{fontSize:"15px"}}>ShoeCraze</p>
                     </div>
    <Link to="/">Home</Link>
    <Link to="/product">See All</Link>
    <Search/>
    <Link to="/men">Men</Link>
    <Link to="/women">Women</Link>
    <div className="cart-img">
<Link to="/cart"><CiShoppingCart style={{fontSize:"35px"}}/></Link> 
<p className={data.length==0?"hide":"color"} >{data.length}</p>  
</div> 
</div>
<div className="heading-container">
<div>
  <p style={{fontSize:"45px"}}>Women's </p>
  <p style={{fontSize:"45px"}}>Collection</p>
  </div>
        <img src="https://th.bing.com/th/id/OIP.dcXbkibZD39gzEFL1HL4rgHaHa?w=800&h=800&rs=1&pid=ImgDetMain" width="600px" height="400px" alt="" />
</div>

<div className="product-container">
{array.map((element)=>{
            if (element.category=="women") {
              
            
                  return <Link to={"/women/product/"+element.id}>  <div className="product">
                  <img src={element.img} width="200px" height="200px" alt="" />
                  <p style={{fontSize:"20px"}}>{element.name}</p >
                  <p>{"Rs." + element.price}</p>
                  <p>{element.description}</p>
                  <p>{element.ratting}</p>
                  <CartButton element={element}/>
           </div> </Link>
            }
                
              })}
            
</div>

</>
}
export default Women