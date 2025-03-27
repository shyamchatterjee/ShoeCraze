import { Link } from "react-router"
import { FaRegWindowRestore } from "react-icons/fa6";

let Home = ()=>{
    return  <div  className="container">
                 <div className="mini-container">
                    
                    <div className="second-part">
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