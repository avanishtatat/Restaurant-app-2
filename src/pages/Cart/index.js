import {Link} from 'react-router-dom'

import CartContext from '../../context/CartContext'
import Navbar from '../../components/Navbar'
import CartItem from '../../components/CartItem'
import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const totalCartPrice = cartList?.reduce(
        (acc, item) => acc + item.dishPrice * item.quantity,
        0,
      )

      const emptyCartView = () => (
        <div className="empty-cart-conatainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
            alt="empty cart"
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
          <Navbar restaurantName="UNI Resto Cafe" />
          {cartList && cartList.length > 0 ? (
            <div className="cart-container">
              <h2 className="my-cart-heading">My Cart</h2>
              <div className="remove-all-btn-container">
                <button
                  type="button"
                  className="remove-all-btn"
                  onClick={removeAllCartItems}
                >
                  Remove All
                </button>
              </div>
              <ul className="cart-list-container">
                {cartList.map(each => (
                  <CartItem key={each.dishId} dish={each} />
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
    }}
  </CartContext.Consumer>
)

export default Cart
