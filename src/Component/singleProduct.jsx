import { useParams } from "react-router"
import { Link } from "react-router"
import { CiShoppingCart } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { api } from "../contast/contast";
import { Context } from "../context/context";
import CartButton from "./buttonadd";
let SingleProduct = ()=>{
       let {addCart,data,img,boolen,clickImg} = useContext(Context)
    let perams = useParams()
    let [element,setObj] = useState({})
    
    useEffect(()=>{
          api.get("/product/"+perams.productid).then((value)=>{
               setObj(value.data)
          })
    },[])
   
      
    return <> <div className="nav">
    <Link to="/">Home</Link>
    <Link to="/product">See All</Link>
    <Link to="/men">Men</Link>
    <Link to="/women">Women</Link>
    <div className="cart-img">
<Link to="/cart"><CiShoppingCart style={{fontSize:"35px"}}/></Link> 
<p className={data.length==0?"hide":"color"} >{data.length}</p>  
</div> 
</div>
    <div className="single-Product-container">
                <div className="img-container">
                       <img src={ boolen==true? element.img:img} height="300px" width="300px" alt="" />
                </div>
                <div className="product-details">
                <p style={{fontSize:"20px"}}>{element.name}</p >
                          <p>{"Rs." + element.price}</p>
                          <p>{element.description}</p>
                          <p>{element.ratting}</p>
                          <CartButton  element={element}/>
                </div>

    </div>
    <div className="img-choice-container">
        <div className="choice"style={{cursor:"pointer"}} >
    <img src={element.img} width="100px" height="100px" alt=""  onClick={()=>{clickImg(element.img)}} />
    </div>
    <div className="choice" style={{cursor:"pointer"}}>
           <img src={element.img1} width="100px" height="100px" alt="" onClick={()=>{clickImg(element.img1)}} />
           </div>
           <div className="choice"style={{cursor:"pointer"}} >
           <img src={element.img2} width="100px" height="100px" alt=""  onClick={()=>{clickImg(element.img2)}} />
           </div>
           <div className="choice"style={{cursor:"pointer"}} >
           <img src={element.img3} width="100px" height="100px" alt=""  onClick={()=>{clickImg(element.img3)}} />
           </div>
    </div>
</>
}
export default SingleProduct