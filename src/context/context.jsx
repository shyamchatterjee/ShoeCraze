import { createContext, useState } from "react";
import { useNavigate } from "react-router";
import {   toast } from 'react-toastify';
 export  let Context = createContext(null)
 export let ContextFuntion = ({children})=>{
    let [data,setData] = useState([])
    let [boolen,setBoolen] = useState(true)
    let [img,setimg] = useState("")
    let [array,setArray] = useState([])
    let [obj,setObj] = useState({})
    let [eror,setEror] = useState({})
    let [acount,setacount] = useState([])
    let clickImg =(item)=>{
           setimg(item)
           setBoolen(false)
    }
       let addCart = (element)=>{
        if (boolen===true) {
            
        
            let findItem = data.find((item)=>{
                  if (item.id==element.id) {
                        return element
                  }
            })
            if (findItem) {
                 let filteritem = data.filter((item)=>{
                       if (item.id!==element.id) {
                            return element
                       }
                 })
                  setData([...filteritem,{...findItem,q:findItem.q+1}])
            }else{
                setData([...data,{...element,q:1}])
            }
        }else{
            let findItem = data.find((item)=>{
                if (item.id==element.id) {
                      return element
                }
          })
          if (findItem) {
               let filteritem = data.filter((item)=>{
                     if (item.id!==element.id) {
                          return element
                     }
               })
                setData([...filteritem,{...findItem, img:img,  q:findItem.q+1}])
          }else{
              setData([...data,{...element, img:img,  q:1}])
          }
        }
       }
       let removeItem = (element)=>{
          let removeProduct = data.filter((item)=>{
                    if (item.id!==element.id) {
                           return item
                    }
          })
           setData(removeProduct)
       }
        let plusFuntion = (element)=>{
            let findItem = data.find((item)=>{
                  if (item.id!=element.id) {
                        return element
                  }
            })
            if (findItem) {
                 let filteritem = data.filter((item)=>{
                       if (item.id!==element.id) {
                            return element
                       }
                 })
                  setData([...filteritem,{...findItem,q:findItem.q+1}])
            }else{
                setData([...data,{...element,q:1}])
            }
        }
        let nagitiveFuntion = (element)=>{
            if (element.q==0) {
                    ""
            }else{

            
            let findItem = data.find((item)=>{
                  if (item.id==element.id) {
                        return element
                  }
            })
            if (findItem) {
                 let filteritem = data.filter((item)=>{
                       if (item.id!==element.id) {
                            return element
                       }
                 })
                  setData([...filteritem,{...findItem,q:findItem.q-1}])
            }else{
                setData([...data,{...element,q:1}])
            }
      }
        }

let navigate = useNavigate()
        let submitDataFuntion = (obj)=>{
           
                   
            if (obj.password.length == 0) {
                  setEror({...eror,password:"Please put your password "});
                  return;
                } else if (obj.password.length !== 8) {
                  setEror( {...eror,password:"Please must be 8 character long"} );
                  return;
                }else if (obj.confrim!==obj.password){
                     setEror({...eror,confrim:"Password and confrim password are not match"})
                     return
                }else if (!/[!#@$&*<>(),.]/.test(obj.password)){
                       setEror({...eror,password:"Password must content any special character"})
                       return
                }else if (!/[A-Z]/.test(obj.password)){
                  setEror({...eror,password:"Password must content any capital character"})
                  
                  return 

                }
                else if (!obj.email.includes("@")){
                         setEror({...eror,email:"email must be not included @"})
                         return
                }
                
                 else {
                  setEror("");
                 
                }
              
                   setacount([...acount,obj])
               
                toast.success("Your login successful!",{
                  position:"top-right",
                  autoClose:3000,
                  hideProgressBar:false,
                  closeOnClick : false,
                  pauseOnHover:true,
                  draggable:true,
                  progress:undefined,
                  theme:"dark",
                
                })
               
                navigate("/home")
               setObj("")
        }
         return <Context.Provider  value={{addCart,data,boolen,img,clickImg,removeItem,plusFuntion,nagitiveFuntion,obj,setObj,eror,submitDataFuntion,acount}}>
                {children}
          </Context.Provider>
 }
 export default ContextFuntion
