import Loader from 'react-loader-spinner'
import {Link, withRouter} from 'react-router-dom'
import {useContext} from 'react'
import Cookies from 'js-cookie'
import {RestaurantContext} from '../../context/RestaurantContext'
import {CartContext} from '../../context/CartContext'
import {IoCartOutline} from 'react-icons/io5'
import './index.css'

const Navbar = ({history}) => {
  const {data} = useContext(RestaurantContext)
  const {cartList} = useContext(CartContext)

  const cafeName = data?.[0]?.restaurant_name || 'UNI Resto Cafe'

  const totalCartCount = cartList.length || 0

  const handleLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="cafe-navbar">
      <Link to="/" className="nav-link">
        <h1 className="cafe-name">{cafeName}</h1>
      </Link>
      <div className="nav-cart-container">
        <p className="order-label">My Orders</p>
        <Link to="/cart" className="nav-link">
          <button
            className="nav-cart-icon-container"
            data-testid="cart"
            type="button"
            role="button"
          >
            <IoCartOutline size={28} color="#000" />

            <span className="nav-cart-count">{totalCartCount}</span>
          </button>
        </Link>
        <button type="button" className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)
