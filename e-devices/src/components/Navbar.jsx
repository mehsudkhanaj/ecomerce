import '../index.css'
import { items } from './Data'
import { useState } from 'react'
import { Link , useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";


const Navbar = ({ setdata,cart }) => {
  const location=useLocation()
  
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const filterByCategory = category => {
    const element = items.filter(product => product.category === category)
    setdata(element)
  }

  const filterByPrice = price => {
    const element = items.filter(product => product.price >= price)
    setdata(element)
  }

  const handleSubmit = e => {
    e.preventDefault()
    navigate(`/search/${searchTerm}`)
    setSearchTerm('')
  }

  return (
    <>
      <header className='sticky-top'>
        <div className='nav-bar'>
          <Link to={'/'} className='brand'>
            E-Devices
          </Link>

          <form onSubmit={handleSubmit} className='search-bar'>
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type='text'
              placeholder='Search Products'
            />
          </form>

          <Link to={'/cart'} className='cart'>
          <button type="button" className="btn btn-primary position-relative">
  <FaShoppingCart/>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  {cart.length}
    
    <span className="visually-hidden">unread messages</span>
  </span>
</button>


          </Link>
        </div>

        {
          location.pathname=='/'&&(
            <div className='nav-bar-wrapper'>
          <div className='item'>Filter by{'->'}</div>
          <div onClick={() => setdata(items)} className='item'>
            No Filter
          </div>
          <div onClick={() => filterByCategory('mobiles')} className='item'>
            Mobiles
          </div>

          <div onClick={() => filterByCategory('laptops')} className='item'>
            Laptop
          </div>

          <div onClick={() => filterByCategory('tablets')} className='item'>
            Tablets
          </div>
          <div onClick={() => filterByPrice(29999)} className='item'>
            {'>='}29999
          </div>
          <div onClick={() => filterByPrice(39999)} className='item'>
            {'>='}39999
          </div>
          <div onClick={() => filterByPrice(49999)} className='item'>
            {'>='}49999
          </div>
          <div onClick={() => filterByPrice(59999)} className='item'>
            {'>='}59999
          </div>
        </div>

          )
        }
        
      </header>
    </>
  )
}

export default Navbar
