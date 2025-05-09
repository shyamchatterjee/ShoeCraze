import '../App.css'
import { BrowserRouter,Route,Routes } from "react-router";
import Home from './homecomponent';
import Cart from './cartComponent';
import Product from './productComponent';
import Men from './menComponent';
import Women from './womentComponent';
import Adidas from './adidasComponent';
import Puma from './pumaComponent';
import Woodland from './woodland';
import Nike from './nikeComponent';
import Reebok from './reebokcomponent';
import SingleProduct from './singleProduct';
import ContextFuntion from '../context/context';
import Frist from './price1000-2000';
import Second from './price2000-3000';
import Third from './price3000-4000.jsx';
import Last from './price4000-5000';
import Secondprice from './price2000-3000';
import Thirdprice from './price3000-4000.jsx';
import Lastprice from './price4000-5000';
import Login from './logincomponent.jsx';
import Acount from './loginacount.jsx';
function App() {
  return  <BrowserRouter>
  <ContextFuntion>
  <Routes>
       
       <Route path='/home'  element={<Home/>} />
       <Route path='/cart' element={<Cart/>} />
       <Route path='/product' element={<Product/>}/>
       <Route path='/men' element={<Men/>}/>
       <Route path='/women'  element={<Women/>}  />
       <Route  path='/adidas' element={<Adidas/>}/>
       <Route  path='/puma' element={<Puma/>}/>
       <Route path='/woodland' element={<Woodland/>}/>
       <Route path='/nike' element={<Nike/>}/>
       <Route path='/reebok' element={<Reebok/>}/>
       <Route path='/product/:productid' element={<SingleProduct/>}  />
       <Route path='/women/product/:productid' element={<SingleProduct/>}  />
       <Route path='/men/product/:productid' element={<SingleProduct/>}  />
          <Route path='/frist' element={<Frist/>}    />
          <Route path='/second' element={<Secondprice/>}    />
          <Route  path='/third' element={<Thirdprice/>}/>
          <Route path='/last' element={<Lastprice/>}/>
          <Route  path='/'  element={<Login/>} />
          <Route  path='/acount'  element={<Acount/>} />
  </Routes>
  </ContextFuntion>
  </BrowserRouter>
}

export default App
