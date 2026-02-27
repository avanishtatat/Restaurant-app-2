// import {useContext} from 'react'
import CartContext from '../../context/CartContext'
import './index.css'

const CartItem = ({dish}) => (
  <CartContext.Consumer>
    {value => {
      const {
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value

      const {
        dishImage,
        dishName,
        dishCurrency,
        dishPrice,
        dishId,
        quantity,
      } = dish

      return (
        <li className="cart-dish-card">
          <div className="img-container">
            <img src={dishImage} alt={dishName} className="cart-dish-img" />
          </div>
          <div className="dish-details-container">
            <div className="dish-info">
              <p className="cart-dish-name">{dishName}</p>
              <p className="cart-dish-price">{`${dishCurrency} ${dishPrice}`}</p>
            </div>
            <div className="button-container">
              <div className="qty-container">
                <button
                  type="button"
                  className="cart-button"
                  onClick={() => decrementCartItemQuantity(dishId)}
                >
                  -
                </button>
                <p className="cart-dish-quantity">{quantity}</p>
                <button
                  type="button"
                  className="cart-button"
                  onClick={() => incrementCartItemQuantity(dishId)}
                >
                  +
                </button>
              </div>
              <span className="price">SAR {quantity * dishPrice}/-</span>
              <button
                type="button"
                className="remove-btn"
                onClick={() => removeCartItem(dishId)}
              >
                Remove
              </button>
            </div>
          </div>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
