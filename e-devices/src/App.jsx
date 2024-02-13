import Navbar from './components/Navbar';
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import SearchItem from './components/SearchItem'
import Cart from './components/Cart'
import {items} from './components/Data'
import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
const App = () => {
  const [data, setdata] = useState([...items])
  const [cart, setcart] = useState([])
  return (
   <>
   <Router>
   <Navbar cart={cart}  setdata={setdata}/>
   <Routes>
    <Route path='/' element={<Products cart={cart} setcart={setcart}items={data}/>}/>

    <Route path='/product/:id' element={<ProductDetail cart={cart} setcart={setcart}/>}/>
    <Route path='/search/:term' element={<SearchItem cart={cart} setcart={setcart}/>}/>
    <Route path='/cart' element={<Cart cart={cart} setcart={setcart}/>}/>

   </Routes>
   
   </Router>
   </>
  )
}

export default App