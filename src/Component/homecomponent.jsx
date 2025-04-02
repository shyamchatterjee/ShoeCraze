import { Link } from "react-router"
import { FaRegWindowRestore } from "react-icons/fa6";

let Home = ()=>{
    return  <div  className="container">
                 <div className="mini-container">
                 
                    <div className="second-part">
                    <div className="website-name-container">
                             <img src="https://th.bing.com/th/id/OIP.M6n_U53so7bRHBmLm7d--QHaHa?rs=1&pid=ImgDetMain" height="25px" alt="" />
                             <p style={{fontSize:"15px"}}>ShoeCraze</p>
                     </div>
                    <div className="frist-part">
                    <p>Men's and Women's</p>
                    <p>Shoe's Collection</p>
                    </div>
                    <Link to="/product"><button className="shoop-now-button"> <FaRegWindowRestore/> Visit Store</button></Link>
                    </div>
                    <img src="https://www.telegraph.co.uk/multimedia/archive/02425/B3C1GK_2425720b.jpg" alt="" />
                           
                  
                 </div>
      </div>
}
export default Home