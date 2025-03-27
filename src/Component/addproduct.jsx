import UseHooks from "../hooks/usehooks"
import { CiShoppingCart } from "react-icons/ci";

let Addproduct = ()=>{
   let{array} = UseHooks()
       return <div className="product-container">
               {array.map((element)=>{
                   return <div className="product">
                          <img src={element.img} width="200px" height="200px" alt="" />
                          <p style={{fontSize:"20px"}}>{element.name}</p >
                          <p>{"Rs." + element.price}</p>
                          <p>{element.description}</p>
                          <p>{element.ratting}</p>
                             <CiShoppingCart style={{fontSize:"30px",cursor:"pointer"}}/>
                   </div>
               })}
       </div>
}
export default Addproduct