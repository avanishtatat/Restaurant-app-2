import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'
import {IoCartOutline} from 'react-icons/io5'
import CartContext from '../../context/CartContext'
import './index.css'

const Navbar = props => {
  // const totalCartCount = cartList.reduce(
  //   (acc, item) => acc + (item.quantity || 0),
  //   0,
  // )
  const {history, restaurantName} = props

  const renderCartItemCount = () => (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        return <span className="nav-cart-count">{cartList.length}</span>
      }}
    </CartContext.Consumer>
  )

  const handleLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="cafe-navbar">
      <Link to="/" className="nav-link">
        <h1 className="cafe-name">{restaurantName}</h1>
      </Link>
      <div className="nav-cart-container">
        <p className="order-label">My Orders</p>
        <Link to="/cart" className="nav-link">
          <button
            className="nav-cart-icon-container"
            data-testid="cart"
            type="button"
          >
            <IoCartOutline size={28} color="#000" />
            {renderCartItemCount()}
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
