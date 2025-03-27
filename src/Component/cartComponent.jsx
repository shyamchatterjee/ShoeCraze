import { Link } from "react-router"
import { CiShoppingCart } from "react-icons/ci";

let Cart = ()=>{
    return  <div className="nav">
    <Link to="/">Home</Link>
  <Link to="/cart"><CiShoppingCart style={{fontSize:"35px"}}/></Link>  
</div>
}
export default Cart