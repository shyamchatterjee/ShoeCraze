import { useContext, useEffect, useState } from "react"
import { api } from "../contast/contast"
import { Context } from "../context/context"
import { useNavigate, useSearchParams } from "react-router"

let UseHooks= ()=>{
   let [array,setArray] = useState([])
   let [search,setsearch] = useSearchParams()
   let productname = search.get("productname")
  
 
     let getApi = ()=>{
        api.get("/product").then((value)=>{
               setArray(value.data)
        })
     }
     useEffect(()=>{
     
         
      
           getApi()
     
     },[])
      useEffect(()=>{
            if (productname=="") {
               getApi()
            }else{
                 let filterItem = array.filter((element)=>{
                  if (element.name.toLowerCase().includes(productname.toLowerCase())||element.description.toLowerCase().includes(productname.toLowerCase())) {
                         return element
                  }
                 })
                 setArray(filterItem)
               
            
            }
      },[productname])
    
     return ({getApi,array,setArray,setsearch})
}
export default UseHooks