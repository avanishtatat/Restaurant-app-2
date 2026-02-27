import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'
import './index.css'

const CartItem = ({dish}) => {
  // console.log('dish', dish)
  const {removeCartItem, incrementCartItemQuantity, decrementCartItemQuantity} =
    useContext(CartContext)

  return (
    <li className="cart-dish-card">
      <div className="img-container">
        <img
          src={dish.dish_image}
          alt="cart dish img"
          className="cart-dish-img"
        />
      </div>
      <div className="dish-details-container">
        <div className="dish-info">
          <p className="cart-dish-name">{dish.dish_name}</p>
          <p className="cart-dish-price">{`${dish.dish_currency} ${dish.dish_price}`}</p>
        </div>
        <div className="button-container">
          <div className="qty-container">
            <button
              type="button"
              className="cart-button"
              onClick={() => decrementCartItemQuantity(dish.dish_id)}
            >
              -
            </button>
            <p className="cart-dish-quantity">{dish.quantity}</p>
            <button
              type="button"
              className="cart-button"
              onClick={() => incrementCartItemQuantity(dish.dish_id)}
            >
              +
            </button>
          </div>
          <p className="price">SAR {dish.quantity * dish.dish_price}/-</p>
          <button
            type="button"
            className="remove-btn"
            onClick={() => removeCartItem(dish.dish_id)}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}
export default CartItem
