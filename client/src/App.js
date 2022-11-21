import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import { SignIn } from './Page/SignIn';
import {LogIn} from "./Page/LogIn";
import Home from './Page/Home';
import ProductPage from './Page/ProductPage';
import Store from './Page/Store';
import Cart from './Page/Cart';
import Order from './Page/Order';
function App() {
  return (
    <div className="App">
         <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/product/:id" element={<ProductPage />}/>
         <Route path="/store" element={<Store />}/>
         <Route path='/cart' element={<Cart />} />
         <Route path='/order' element={<Order />} />
         <Route  path='/signup' element={<SignIn />}/>
         <Route  path='/login' element={<LogIn/>}/>
         </Routes>
    </div>
  );
}

export default App;
