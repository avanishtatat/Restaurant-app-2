import CartContext from '../../context/CartContext'

import './index.css'

const Dish = ({dishItem}) => (
  <CartContext.Consumer>
    {value => {
      const {
        cartList,
        addCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value

      const {
        dishId,
        dishType,
        dishName,
        dishAvailability,
        dishCalories,
        dishCurrency,
        dishPrice,
        dishImage,
        dishDescription,
        addOn,
      } = dishItem

      const cartItem = cartList.find(each => each.dishId === dishId)
      const quantity = cartItem ? cartItem.quantity : 0
      return (
        <li key={dishItem.dishId}>
          <div className="dish-card">
            <div className="dish-wrapper">
              <div className="dish-left">
                <div
                  className={`dish-type-box ${
                    dishType === 2 ? 'border-green' : 'border-red'
                  }`}
                >
                  <span
                    className={`dish-type-dot ${
                      dishType === 2 ? 'bg-green' : 'bg-red'
                    }`}
                  />
                </div>

                <div className="dish-content">
                  <h1 className="dish-name">{dishName}</h1>

                  <p className="dish-price">{`${dishCurrency} ${dishPrice}`}</p>

                  <p className="dish-desc">{dishDescription}</p>

                  {dishAvailability ? (
                    <div className="add-to-cart-btn-container">
                      <div className="dish-counter-cont">
                        <button
                          type="button"
                          className="counter-button"
                          onClick={() => {
                            if (quantity > 0) {
                              decrementCartItemQuantity(dishId)
                            }
                          }}
                        >
                          -
                        </button>

                        <p className="counter-value">{quantity}</p>

                        <button
                          type="button"
                          className="counter-button"
                          onClick={() => {
                            if (quantity === 0) {
                              addCartItem({...dishItem, quantity: 1})
                            } else {
                              incrementCartItemQuantity(dishId)
                            }
                          }}
                        >
                          +
                        </button>
                      </div>
                      {quantity > 0 ? (
                        <button type="button" className="add-to-cart-btn">
                          ADD TO CART
                        </button>
                      ) : null}
                    </div>
                  ) : (
                    <p className="dish-not-available">Not available</p>
                  )}

                  {addOn && addOn.length > 0 ? (
                    <p className="dish-custom">Customizations available</p>
                  ) : null}
                </div>
              </div>

              <p className="dish-calories">{`${dishCalories} calories`}</p>

              <div className="dish-img-box">
                <img src={dishImage} alt={dishName} className="dish-img" />
              </div>
            </div>
          </div>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default Dish
