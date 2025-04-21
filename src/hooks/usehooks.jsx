import { useContext, useEffect, useState } from "react"
import { api } from "../contast/contast"
import { Context } from "../context/context"
import { useNavigate, useSearchParams } from "react-router"

let UseHooks= ()=>{
   let [array,setArray] = useState([])
   let [search,setsearch] = useSearchParams()
   let Search = search.get("Search")
   
  
 
     let getApi = ()=>{
        api.get("/product").then((value)=>{
               setArray(value.data)
        })
     }
     useEffect(()=>{
     
         
      
           getApi()
     
     },[])
      useEffect(()=>{
            if (Search=="") {
               getApi()
            }else{
                 let filterItem = array.filter((element)=>{
                  if (element.name.toLowerCase().includes(Search.toLowerCase())||element.description.toLowerCase().includes(Search.toLowerCase())) {
                         return element
                  }
                 })
                 setArray(filterItem)
               
            
            }
      },[Search])
    
  

    
     return ({getApi,array,setArray,setsearch})
}
export default UseHooks