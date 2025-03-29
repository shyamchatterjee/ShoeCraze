import { Link } from "react-router";
import UseHooks from "../hooks/usehooks"
import { CiShoppingCart } from "react-icons/ci";
import { useContext } from "react";
import { Context } from "../context/context";
import CartButton from "./buttonadd";

let Addproduct = ()=>{
   let{array} = UseHooks()
//    let {addCart} = useContext(Context)
       return <div className="product-container">
               {array.map((element)=>{
                   return <Link to={"/product/"+element.id}> <div className="product">
                          <img src={element.img} width="200px" height="200px" alt="" />
                          <p style={{fontSize:"20px"}}>{element.name}</p >
                          <p>{"Rs." + element.price}</p>
                          <p>{element.description}</p>
                          <p>{element.ratting}</p>
                            <CartButton  element={element}/>
                   </div> </Link>
               })}
       </div>
}
export default Addproduct