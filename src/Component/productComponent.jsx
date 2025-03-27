import { Link } from "react-router"
import { CiShoppingCart } from "react-icons/ci";
import UseHooks from "../hooks/usehooks";
import Addproduct from "./addproduct";

let Product = ()=>{
  
    return <> <div className="nav">
    <Link to="/">Home</Link>
    <Link to="/product">See All</Link>
    <Link to="/men">Men</Link>
    <Link to="/women">Women</Link>
  <Link to="/cart"><CiShoppingCart style={{fontSize:"35px"}}/></Link>  
</div>
  <div className="heading-container">
    
    
        <img src="https://highongloss.com/wp-content/uploads/2021/04/5-Must-Have-Shoes-Men-Women-scaled.jpg" width="600px" height="400px" alt="" />
  </div>
  <Addproduct/>
</>
}
export default Product