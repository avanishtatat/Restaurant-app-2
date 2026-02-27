import {useState, useContext} from 'react'
import {CartContext} from '../../context/CartContext.js'

import './index.css'

const Dish = ({dishItem}) => {
  const {
    cartList,
    addCartItem,
    incrementCartItemQuantity,
    decrementCartItemQuantity,
  } = useContext(CartContext)

  const cartItem = cartList.find(each => each.dish_id === dishItem.dish_id)

  const quantity = cartItem ? cartItem.quantity : 0

  return (
    <li key={dishItem.dish_id}>
      <div className="dish-card">
        <div className="dish-wrapper">
          <div className="dish-left">
            <div
              className={`dish-type-box ${
                dishItem.dish_Type === 2 ? 'border-green' : 'border-red'
              }`}
            >
              <span
                className={`dish-type-dot ${
                  dishItem.dish_Type === 2 ? 'bg-green' : 'bg-red'
                }`}
              ></span>
            </div>

            <div className="dish-content">
              <h1 className="dish-name">{dishItem.dish_name}</h1>

              <p className="dish-price">
                {dishItem.dish_currency} {dishItem.dish_price}
              </p>

              <p className="dish-desc">{dishItem.dish_description}</p>

              {dishItem.dish_Availability ? (
                <div className="add-to-cart-btn-container">
                  <div className="dish-counter-cont">
                    <button
                      type="button"
                      className="counter-button"
                      role="button"
                      onClick={() => {
                        if (quantity > 0) {
                          decrementCartItemQuantity(dishItem.dish_id)
                        }
                      }}
                    >
                      -
                    </button>

                    <p className="counter-value">{quantity}</p>

                    <button
                      type="button"
                      className="counter-button"
                      role="button"
                      onClick={() => {
                        quantity === 0
                          ? addCartItem({...dishItem, quantity: 1})
                          : incrementCartItemQuantity(dishItem.dish_id)
                      }}
                    >
                      +
                    </button>
                  </div>
                  {quantity > 0 ? (
                    <button className="add-to-cart-btn">ADD TO CART</button>
                  ) : null}
                </div>
              ) : (
                <p className="dish-not-available">Not available</p>
              )}

              {dishItem.addonCat && dishItem.addonCat.length > 0 ? (
                <p className="dish-custom">Customizations available</p>
              ) : null}
            </div>
          </div>

          <p className="dish-calories">{dishItem.dish_calories} calories</p>

          <div className="dish-img-box">
            <img
              src={dishItem.dish_image}
              alt={dishItem.dish_name}
              className="dish-img"
            />
          </div>
        </div>
      </div>
    </li>
  )
}

export default Dish
