import { useEffect, useState } from "react"
import { api } from "../contast/contast"

let UseHooks= ()=>{
  let [array,setArray] = useState([])
     let getApi = ()=>{
        api.get("/product").then((value)=>{
               setArray(value.data)
        })
     }
     useEffect(()=>{
           getApi()
     },[])
    
    
     return ({array})
}
export default UseHooks