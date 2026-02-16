import {useState} from 'react'
import './index.css'

const Menu = ({menuList, addItemToCart, removeCartItem, cartItem}) => {
  const [activeId, setActiveId] = useState(menuList[0]?.menu_category_id)
  const categoryDishes = menuList.find(
    each => each.menu_category_id === activeId,
  )
  const categoryDishesList = categoryDishes.category_dishes

  return (
    <>
      <ul className="menu-category-list">
        {menuList &&
          menuList.map(menu => (
            <li key={menu.menu_category_id}>
              <button
                type="button"
                className={`category ${
                  activeId === menu.menu_category_id ? 'active-category' : ''
                }`}
                onClick={() => setActiveId(menu.menu_category_id)}
              >
                {menu.menu_category}{' '}
              </button>
            </li>
          ))}
      </ul>
      <ul className="dishes-list">
        {categoryDishesList.map(dishItem => (
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
                    <h3 className="dish-name">{dishItem.dish_name}</h3>

                    <p className="dish-price">
                      {dishItem.dish_currency} {dishItem.dish_price}
                    </p>

                    <p className="dish-desc">{dishItem.dish_description}</p>

                    {dishItem.dish_Availability ? (
                      <div className="dish-counter">
                        <button
                          type="button"
                          className="counter-btn"
                          onClick={() => removeCartItem(dishItem.dish_id)}
                        >
                          -
                        </button>

                        <span
                          className="counter-value"
                          
                        >
                          {cartItem[dishItem.dish_id] || 0}
                        </span>

                        <button
                          type="button"
                          className="counter-btn"
                          onClick={() => addItemToCart(dishItem.dish_id)}
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <p className="dish-not-available">Not Available</p>
                    )}

                    {dishItem.addonCat.length > 0 ? (
                      <p className="dish-custom">Customizations available</p>
                    ) : null}
                  </div>
                </div>

                <p className="dish-calories">
                  {dishItem.dish_calories} calories
                </p>

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
        ))}
      </ul>
    </>
  )
}

export default Menu
