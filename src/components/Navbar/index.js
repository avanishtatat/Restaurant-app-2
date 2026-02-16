import {IoCartOutline} from 'react-icons/io5'
import './index.css'

const Navbar = props => {
  const {cafeName, cartCount} = props

  return (
    <nav className="cafe-navbar">
      <span className="cafe-name">{cafeName}</span>
      <div className="cart-container">
        <p className="order-label">My Orders</p>
        <div className="cart-icon-container">
          <IoCartOutline size={28} />
          <span className="cart-count" >
            {cartCount}
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
