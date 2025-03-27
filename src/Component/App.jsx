import '../App.css'
import { BrowserRouter,Route,Routes } from "react-router";
import Home from './homecomponent';
import Cart from './cartComponent';
import Product from './productComponent';
import Men from './menComponent';
import Women from './womentComponent';
function App() {
  return  <BrowserRouter>
  <Routes>
       
       <Route path='/'  element={<Home/>} />
       <Route path='/cart' element={<Cart/>} />
       <Route path='/product' element={<Product/>}/>
       <Route path='/men' element={<Men/>}/>
       <Route path='/women'  element={<Women/>}  />
  </Routes>
  </BrowserRouter>
}

export default App
