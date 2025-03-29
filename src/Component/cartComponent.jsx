import { Link } from "react-router"
import { CiShoppingCart } from "react-icons/ci";
import { useContext } from "react";
import { Context } from "../context/context";
import { CiCircleRemove } from "react-icons/ci";

let Cart = ()=>{
  let {data,removeItem} = useContext(Context)
     console.log(data)
    return <>  <div className="nav">
    <Link to="/">Home</Link>
    <Link to="/product">See All</Link>
    <Link to="/men">Men</Link>
    <Link to="/women">Women</Link>
  <Link to="/cart"><CiShoppingCart style={{fontSize:"35px"}}/></Link> 

</div>
<div className="cart-container">
        {data.map((element)=>{
             return <Link to={"/product/"+element.id}> <div className="cart">
                    <img src={element.img} height="100px" width="100px" alt="" />
                     <p style={{fontSize:"25px"}}>{element.name}</p>
                     <p style={{fontSize:"15px"}}>{ "Rs. "+ element.price}</p>
                     <p  style={{fontSize:"15px"}}>{"Quantity:" + element.q}</p>
                     <p  style={{fontSize:"15px"}}>{"Total: "+ "Rs." + element.price*element.q}</p>
                     <CiCircleRemove onClick={(e)=>{e.preventDefault(),removeItem(element)}}  style={{cursor:"pointer",fontSize:"30px"}} />
             </div> </Link>
        })}
</div>
</>

}
export default Cart