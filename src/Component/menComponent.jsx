import { Link } from "react-router"
import { CiShoppingCart } from "react-icons/ci";
import UseHooks from "../hooks/usehooks";
import { useContext } from "react";
import { Context } from "../context/context";
import CartButton from "./buttonadd";
import Search from "./searchcomponent";
import Chekbox from "./chekbox";

let Men = ()=>{
       let {array} =   UseHooks()
       let {addCart,data} = useContext(Context)
    return <> <div className="nav">
       <div className="website-name-container">
                             <img src="https://th.bing.com/th/id/OIP.M6n_U53so7bRHBmLm7d--QHaHa?rs=1&pid=ImgDetMain" height="25px" alt="" />
                             <p style={{fontSize:"15px"}}>ShoeCraze</p>
                     </div>
    <Link to="/home">Home</Link>
    <Link to="/product">See All</Link>
    <Search/>
    <Link to="/men">Men</Link>
    <Link to="/women">Women</Link>
    <Link to="/acount"><img src="https://static.vecteezy.com/system/resources/previews/007/033/146/original/profile-icon-login-head-icon-vector.jpg" height={20} width={20} alt="" /></Link>
 
    <div className="cart-img">
<Link to="/cart"><CiShoppingCart style={{fontSize:"35px"}}/></Link> 
<p className={data.length==0?"hide":"color"} >{data.length}</p>  
</div> 
</div>
<div className="heading-container">
  <div>
  <p style={{fontSize:"45px"}}>Men's </p>
  <p style={{fontSize:"45px"}}>Collection</p>
  </div>
        <img src="https://th.bing.com/th/id/OIP.vXF3D9onL5W6FyjDbTquLAHaHa?rs=1&pid=ImgDetMain" width="600px" height="400px" alt="" />
</div>

   <div className="product-container">
              {array.map((element)=>{
                if (element.category=="men") {
                  return <Link to={"/men/product/"+element.id}> <div className="product">
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
export default Men