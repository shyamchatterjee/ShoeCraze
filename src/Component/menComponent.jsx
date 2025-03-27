import { Link } from "react-router"
import { CiShoppingCart } from "react-icons/ci";
import UseHooks from "../hooks/usehooks";

let Men = ()=>{
       let {array} =   UseHooks()
    return <> <div className="nav">
    <Link to="/">Home</Link>
    <Link to="/product">See All</Link>
    <Link to="/men">Men</Link>
    <Link to="/women">Women</Link>
  <Link to="/cart"><CiShoppingCart style={{fontSize:"35px"}}/></Link>  
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
                  return <div className="product">
                  <img src={element.img} width="200px" height="200px" alt="" />
                  <p style={{fontSize:"20px"}}>{element.name}</p >
                  <p>{"Rs." + element.price}</p>
                  <p>{element.description}</p>
                  <p>{element.ratting}</p>
                     <CiShoppingCart style={{fontSize:"30px",cursor:"pointer"}}/>
           </div>
                }
              })}
   </div>
</>
}
export default Men