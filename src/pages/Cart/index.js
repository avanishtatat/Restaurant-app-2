import {useContext} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import {RestaurantContext} from '../../context/RestaurantContext'
import {CartContext} from '../../context/CartContext'
import Navbar from '../../components/Navbar'
import CartItem from '../../components/CartItem'
import './index.css'

const Cart = () => {
  const {isLoading, error} = useContext(RestaurantContext)
  const {cartList, removeAllCartItems} = useContext(CartContext)

  // console.log('CartList => ', cartList)

  if (isLoading) {
    return (
      <div className="react-loader-container">
        <Loader type="Circles" color="#00BFFF" height={80} width={80} />
      </div>
    )
  }

  if (error) {
    return (
      <div className="react-loader-container">
        <p>{error}</p>
      </div>
    )
  }

  const totalCartPrice = cartList.reduce(
    (acc, item) => acc + item.dish_price * item.quantity,
    0,
  )

  const emptyCartView = () => (
    <div className="empty-cart-conatainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
        alt="cart empty image"
      />
      <h2 className="empty-cart-text">Your Cart is empty</h2>
      <Link to="/">
        <button type="button" className="order-now-btn">
          Order now
        </button>
      </Link>
    </div>
  )

  return (
    <>
      <Navbar />
      {cartList && cartList.length > 0 ? (
        <div className="cart-container">
          <h2 className="my-cart-heading">My Cart</h2>
          <div className="remove-all-btn-container">
            <button
              type="button"
              className="remove-all-btn"
              onClick={removeAllCartItems}
              role="button"
            >
              Remove All
            </button>
          </div>
          <ul className="cart-list-container">
            {cartList.map(each => (
              <CartItem key={each.dish_id} dish={each} />
            ))}
          </ul>

          <div className="total-price-container">
            <p>
              <b>Total: </b>
              <span className="total-price">SAR {totalCartPrice}/-</span>
            </p>
          </div>
        </div>
      ) : (
        emptyCartView()
      )}
    </>
  )
}

export default Cart
