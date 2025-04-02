import { data, Link } from "react-router"
import { CiShoppingCart } from "react-icons/ci";
import UseHooks from "../hooks/usehooks";
import Addproduct from "./addproduct";
import { useContext } from "react";
import { Context } from "../context/context";
import Search from "./searchcomponent";
import Chekbox from "./chekbox";

let Product = ()=>{
       let {data} = useContext(Context)
  
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
    
  
        <img src="https://highongloss.com/wp-content/uploads/2021/04/5-Must-Have-Shoes-Men-Women-scaled.jpg" width="600px" height="400px" alt="" />
       
  </div>
  <div className="brand-name-container">
    <Link to="/product">See All Product</Link>
      <Link  to="/adidas"><img src="https://i.pinimg.com/originals/13/c4/02/13c40225b62fdcc37bbe05ef149c3619.png" height="50px" width="50px" alt="" /></Link>
      <Link to="/puma"><img src="https://logo-logos.com/2016/11/Puma_logo.png" height="50px" width="50px" alt="" /></Link>
      <Link to="/nike"><img src="https://th.bing.com/th/id/R.7ecb22fd61fcaf57bf8b9a17b0098a63?rik=RbiQQpEI1GiB9Q&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f4%2fNike-Logo-Transparent-Background.png&ehk=lWceA5o3dIB7BLwMnH9dZxYB1wbB40OxRA9QciQ%2fQc4%3d&risl=&pid=ImgRaw&r=0"  height="50px"  width="70px"   alt="" /></Link>
      <Link to="/reebok"><img src="https://download.logo.wine/logo/Reebok/Reebok-Logo.wine.png"  height="60px"  width="100px"   alt="" /></Link>
      <Link to="/woodland"><img src="https://seeklogo.com/images/W/woodland-logo-0EC7F57B3B-seeklogo.com.png"  height="60px"  width="60px"   alt="" /></Link>

 </div>
 <div className="chekbox-product">
 <Chekbox/>
  <Addproduct/>
  </div>
</>
}
export default Product