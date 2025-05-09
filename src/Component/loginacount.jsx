import { useContext } from "react"
import { Link, useNavigate, useNavigation } from "react-router"
import { Context } from "../context/context"


let Acount = ()=>{
    let {acount} = useContext(Context)

    console.log(acount)
      let navigate = useNavigate()
    let buttonfuntion = ()=>{
          navigate("/product")
    }
    let womenFuntion = ()=>{
        navigate("/women")
    }
    let menFuntion = ()=>{
        navigate("/men")
    }
       return <>
       <div className="nav">
       <div className="website-name-container">
                             <img src="https://th.bing.com/th/id/OIP.M6n_U53so7bRHBmLm7d--QHaHa?rs=1&pid=ImgDetMain" height="25px" alt="" />
                             <p style={{fontSize:"15px"}}>ShoeCraze</p>
                     </div>
    <Link to="/home">Home</Link>
    <Link to="/product">See All</Link>
    
    <Link to="/men">Men</Link>
    <Link to="/women">Women</Link>
    <Link to="/acount"><img src="https://static.vecteezy.com/system/resources/previews/007/033/146/original/profile-icon-login-head-icon-vector.jpg" height={20} width={20} alt="" /></Link>
 
    </div>
    {/* <div className="div-container"> */}
       <div className="acount-container">
                {acount.map((element)=>{
                      return <div className="acount">
                        <div className="acount-image">
                            <img src="https://cdn3.iconfinder.com/data/icons/login-5/512/LOGIN_6-1024.png" height={32} width={32} alt="" />
                             <p style={{fontSize:"30px"}}>{element.email}</p>

                    </div>
                             <p   style={{fontSize:"12px"}} >{element.name}</p>
                            <Link to="/"><button className="logout-button">Logout</button></Link>
                      </div>
                })}
       </div>
       <div className="heading">
                <img src="https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000013611187-Beige-OFFWHITE-1000013611187_01-2100.jpg" width={400} height={400} alt="" />
       </div>
{/* </div> */}

       <div className="product-acount-product">
              <div className="img-product">
                <img src="https://th.bing.com/th/id/OIP.JTggaJSPhqghqj5lqgJaOgHaHa?cb=iwp1&rs=1&pid=ImgDetMain" width={200} height={200} alt="" />
                <button className="shop-now" onClick={buttonfuntion}>Shop now</button>
              </div>
              <div className="img-product">
                <img src="https://th.bing.com/th/id/OIP.TIWckpoCSJiDO_8U3qewegHaEh?cb=iwp1&rs=1&pid=ImgDetMain" width={200} height={200} alt="" />
                <button className="shop-now" onClick={buttonfuntion}>Shop now</button>
              </div>
              <div className="img-product">
                <img src="https://images.pexels.com/photos/27008327/pexels-photo-27008327.jpeg?cs=srgb&dl=pexels-jose-martin-segura-benites-1422456152-27008327.jpg&fm=jpg" width={200} height={200} alt="" />
                <button className="shop-now" onClick={buttonfuntion}>Shop now</button>
              </div>
              
              <div className="img-product">
                <img src="https://th.bing.com/th/id/OIP.xKaKQ5bfe8pgRQHrhjjz0gHaLH?cb=iwp1&w=4480&h=6720&rs=1&pid=ImgDetMain" width={200} height={200} alt="" />
               <button className="shop-now" onClick={buttonfuntion}>Shop now</button>
              </div>
              
       </div>
       <div className="women-image-men">
        <div className="women-shoping-container">
                   <img src="https://www.gngmodels.com/wp-content/uploads/2022/10/female-footwear-photoshoot-2.jpg" width={400}  height={400}   alt="" />
                   <p>Women's collection</p>
                   <button className="shop-now-buttons" onClick={womenFuntion}>Shop now</button>
    </div>
    <div className="women-shoping-container">
                   <img src="https://www.gngmodels.com/wp-content/uploads/2022/10/shoe-photography-5-682x1024.jpg" width={400}  height={400}   alt="" />
                   <p>men's collection</p>
                   <button className="shop-now-buttons" onClick={menFuntion}>Shop now</button>
    </div>
       </div>
       </>
}
export default Acount