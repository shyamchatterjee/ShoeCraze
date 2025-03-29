import { useNavigate, useSearchParams } from "react-router"
import UseHooks from "../hooks/usehooks"
import { useContext, useEffect } from "react"
import { Context } from "../context/context"

let Search = ()=>{
    
     let {setsearch,setname} = UseHooks()
    
       let changeName = (e)=>{
             setsearch({productname:e.target.value})
            
             
       }
       
    return <input type="text" name="" id="search-input" placeholder="Search for Products,Brands" onChange={changeName} />
}
export default Search