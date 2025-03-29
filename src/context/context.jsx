import { createContext, useState } from "react";

 export  let Context = createContext(null)
 export let ContextFuntion = ({children})=>{
    let [data,setData] = useState([])
    let [boolen,setBoolen] = useState(true)
    let [img,setimg] = useState("")
    let [array,setArray] = useState([])
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

         return <Context.Provider  value={{addCart,data,boolen,img,clickImg,removeItem}}>
                {children}
          </Context.Provider>
 }
 export default ContextFuntion
