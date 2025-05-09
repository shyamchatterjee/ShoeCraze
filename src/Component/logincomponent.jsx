import { Link } from "react-router"

import { useContext } from "react"
import { Context } from "../context/context"
import { ToastContainer} from 'react-toastify';
let Login = ()=>{

    

    let {obj,setObj,eror,submitDataFuntion} = useContext(Context)
      return <div className="uppercontainer">
        <div className="opacity">
         <div className="navbar">
              <div className="website-name-container">
                             <img src="https://th.bing.com/th/id/OIP.M6n_U53so7bRHBmLm7d--QHaHa?rs=1&pid=ImgDetMain" height="25px" alt="" />
                             <p style={{fontSize:"15px"}}>ShoeCraze</p>
                     </div>
      </div>
       <div className="form-container-frist">
        
                     <ToastContainer/>
             <div className="form-container-second">
                   <form className="form"   onSubmit={(e)=>{
                    e.preventDefault(),
                    submitDataFuntion(obj)
                   }} >
                        <p  style={{textAlign:"center",fontSize:"23px"}}>Create an Account</p>
                        <input type="text" name=""   id="text"   value={obj.name}  placeholder="Enter your name" required  onChange={(e)=>{setObj({...obj,name:e.target.value})}}  />
                        <div className="div">
                        <input type="email" name="" id="email" value={obj.email} placeholder="Enter your Email" required   onChange={(e)=>{setObj({...obj,email:e.target.value})}}  />
                           {eror.email&&<p style={{color:"red",fontSize:"12px"}}>{eror.email}</p>} 
                          </div>
                          <div className="div">
                        <input type="password" name="" id="password"   value={obj.password} placeholder="Enter your password"    onChange={(e)=>{setObj({...obj,password:e.target.value})}}   required   />
                        {eror.password&&<p style={{color:"red",fontSize:"12px"}}>{eror.password}</p>}
                        </div>
                        <div className="div">
                        <input type="password" name="" id="confrim" value={obj.confrim} placeholder="Enter your confrimd password"    onChange={(e)=>{setObj({...obj,confrim:e.target.value})}}  required   />
                        {eror.confrim&&<p style={{color:"red",fontSize:"12px"}}>{eror.confrim}</p>} 
                        </div>
                    
                        <input type="submit" value="Submit" className="submit-button" />
                           <p style={{fontSize:"13px"}} >By registering, you agree to our <Link style={{fontSize:"13px",color:"blue"}}>Terms & Condition</Link> and <Link style={{fontSize:"13px",color:"blue"}}>Privacy Policy</Link></p>
                   </form>
             </div>
             {/* <img src="https://st3.depositphotos.com/3591429/13163/i/950/depositphotos_131630280-stock-photo-happy-people-with-shopping-bags.jpg" alt="" /> */}
      </div> 
      </div>
      </div>
}
export default Login