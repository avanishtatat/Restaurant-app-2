import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import useFetch from './custom-hooks/useFetch'
import './App.css'

//write your code here

const App = () => {
  const {data, isLoading, error} = useFetch(
    'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
  )
  // console.log('data', data)
  const [cartItem, setCartItem] = useState({})

  const totalCartItems = Object.keys(cartItem).reduce((acc, key) => {
    if (cartItem[key] > 0) acc += cartItem[key]
    return acc
  }, 0)

  const addItemToCart = id => {
    setCartItem(prevCart => ({...prevCart, [id]: (prevCart[id] || 0) + 1}))
  }

  const removeCartItem = id => {
    if (cartItem[id] && cartItem[id] > 0) {
      setCartItem(prevCart => ({...prevCart, [id]: prevCart[id] - 1}))
    }
  }

  return (
    <>
      {isLoading ? (
        <div className="react-loader-container">
          <Loader type="Circles" color="#00BFFF" height={80} width={80} />
        </div>
      ) : error ? (
        <div className="react-loader-container">
          <p>{error}</p>
        </div>
      ) : (
        <>
          <Navbar
            cafeName={data[0]?.restaurant_name}
            cartCount={totalCartItems}
          />
          <Menu
            menuList={data[0]?.table_menu_list}
            cartItem={cartItem}
            addItemToCart={addItemToCart}
            removeCartItem={removeCartItem}
          />
        </>
      )}
    </>
  )
}

export default App
