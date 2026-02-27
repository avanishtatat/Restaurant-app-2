import {useState, useContext, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import {RestaurantContext} from '../../context/RestaurantContext'
import Dish from '../dish'
import './index.css'

const Menu = ({menuList}) => {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    if (menuList.length > 0 && activeId === null) {
      setActiveId(menuList[0].menu_category_id)
    }
  }, [menuList, activeId])

  const categoryDishes =
    menuList.find(each => each.menu_category_id === activeId) || {}
  const categoryDishesList = categoryDishes?.category_dishes || []

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
          <Dish key={dishItem.dish_id} dishItem={dishItem} />
        ))}
      </ul>
    </>
  )
}

export default Menu
