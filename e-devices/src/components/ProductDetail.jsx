import { useParams } from 'react-router-dom'
import { items } from './Data'
import { useState, useEffect } from 'react'
import Products from './Products'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom'
const ProductDetail = ({ cart, setcart }) => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [relatedProducts, setRelatedProducts] = useState([])
  useEffect(() => {
    const filterProduct = items.filter(prd => prd.id == id)

    setProduct(filterProduct[0])

    const relatedProducts = items.filter(p => p.category === product.category)
    setRelatedProducts(relatedProducts)
  }, [id, product.category])
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc
    }
    setcart([...cart, obj])
    console.log('Cart Element', cart)
    toast.success('Item added on cart', {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark'
    })
  }

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      <div className='container con'>
        <div className='img'>
          <img src={product.imgSrc} alt='' />
        </div>

        <div className='text-center'>
          <h1 className='card-title'>{product.title}</h1>
          <p className='card-text'>{product.description}</p>
          <button className='btn btn-primary mx-3'>{product.price} PKR</button>

          <button
            onClick={() =>
              addToCart(
                product.id,
                product.price,
                product.title,
                product.description,
                product.imgSrc
              )
            }
            className='btn btn-warning'
          >
            Add To Cart
          </button>
        </div>
      </div>

      <h1 className='text-center'>Related Products</h1>

      <Products cart={cart} setcart={setcart} items={relatedProducts} />
    </>
  )
}

export default ProductDetail
