import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProtectedRoutes from './components/ProtectedRoutes'
import CartContext from './context/CartContext'
import './App.css'

// write your code here

class App extends Component {
  state = {cartList: []}

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  addCartItem = dish => {
    const {cartList} = this.state
    const findDish = cartList.find(each => each.dishId === dish.dishId)
    if (findDish === undefined) {
      this.setState(prevState => ({cartList: [...prevState.cartList, dish]}))
    } else {
      this.incrementCartItemQuantity(dish.dishId)
    }
  }

  removeCartItem = id => {
    const {cartList} = this.state
    const filteredCartList = cartList.filter(each => each.dishId !== id)
    this.setState({cartList: filteredCartList})
  }

  incrementCartItemQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(each =>
        each.dishId === id ? {...each, quantity: each.quantity + 1} : each,
      ),
    }))
  }

  decrementCartItemQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList
        .map(each =>
          each.dishId === id ? {...each, quantity: each.quantity - 1} : each,
        )
        .filter(each => each.quantity > 0),
    }))
  }

  render() {
    const {cartList} = this.state
    return (
      <CartContext.Provider
        value={{
          cartList,
          removeAllCartItems: this.removeAllCartItems,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoutes exact path="/" component={Home} />
          <ProtectedRoutes exact path="/cart" component={Cart} />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
