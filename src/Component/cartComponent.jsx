import { Link } from "react-router"
import { CiShoppingCart } from "react-icons/ci";
import { useContext } from "react";
import { Context } from "../context/context";
import { CiCircleRemove } from "react-icons/ci";

let Cart = ()=>{
  let {data,removeItem,plusFuntion,nagitiveFuntion} = useContext(Context)
     console.log(data)
    return <>  <div className="nav">
       <div className="website-name-container">
                             <img src="https://th.bing.com/th/id/OIP.M6n_U53so7bRHBmLm7d--QHaHa?rs=1&pid=ImgDetMain" height="25px" alt="" />
                             <p style={{fontSize:"15px"}}>ShoeCraze</p>
                     </div>
    <Link to="/home">Home</Link>
    <Link to="/product">See All</Link>
    <Link to="/men">Men</Link>
    <Link to="/women">Women</Link>
    <Link to="/acount"><img src="https://static.vecteezy.com/system/resources/previews/007/033/146/original/profile-icon-login-head-icon-vector.jpg" height={20} width={20} alt="" /></Link>
 
  

</div>
<div className="cart-container">
        {data.map((element)=>{
             return <Link to={"/product/"+element.id}> <div className="cart">
                    <img src={element.img} height="100px" width="100px" alt="" />
                     <p style={{fontSize:"25px"}}>{element.name}</p>
                     <p style={{fontSize:"15px"}}>{ "Rs. "+ element.price}</p>
                     <button  className="plush"  onClick={(e)=>{  e.preventDefault(),  plusFuntion(element)}}>+</button>
                     <p  style={{fontSize:"15px"}}>{"Quantity:" + element.q}</p>
                     <button className="nagitive"   onClick={(e)=>{ e.preventDefault(),   nagitiveFuntion(element)}}  >-</button>
                     <p  style={{fontSize:"15px"}}>{"Total: "+ "Rs." + element.price*element.q}</p>
                     <CiCircleRemove onClick={(e)=>{e.preventDefault(),removeItem(element)}}  style={{cursor:"pointer",fontSize:"30px"}} />
             </div> </Link>
        })}
</div>
</>

}
export default Cart