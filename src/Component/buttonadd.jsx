import { useContext, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { Context } from "../context/context";
let CartButton = ({element})=>{
    let {addCart} = useContext(Context)
    let [color,setColor] = useState("black")
    let changeColor = ()=>{
        setColor("green")
        setTimeout(()=>{
            setColor("black")
        },2000)
    }
   return  <CiShoppingCart style={{fontSize:"30px",cursor:"pointer",color:color}} onClick={(e)=>{ e.preventDefault()  , addCart(element),changeColor()}}  />
}
export default CartButton