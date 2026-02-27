import Dish from '../dish'
import './index.css'

const Menu = ({tableMenuList, activeId, changeActiveId}) => {
  const activeMenuObj = tableMenuList.find(
    eachMenu => eachMenu.menuCategoryId === activeId,
  )

  const categoryDishesList = activeMenuObj.categoryDishes

  return (
    <>
      <div className="menu-category-list">
        {tableMenuList &&
          tableMenuList.map(menu => (
            <button
              key={menu.menuCategoryId}
              type="button"
              className={`category ${
                activeId === menu.menuCategoryId ? 'active-category' : ''
              }`}
              onClick={() => changeActiveId(menu.menuCategoryId)}
            >
              {menu.menuCategory}
            </button>
          ))}
      </div>
      <ul className="dishes-list">
        {categoryDishesList.map(dishItem => (
          <Dish key={dishItem.dishId} dishItem={dishItem} />
        ))}
      </ul>
    </>
  )
}

export default Menu
