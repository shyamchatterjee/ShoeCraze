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
function App() {
  return  <BrowserRouter>
  <ContextFuntion>
  <Routes>
       
       <Route path='/'  element={<Home/>} />
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

  </Routes>
  </ContextFuntion>
  </BrowserRouter>
}

export default App
