import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import RestaurantProvider from './context/RestaurantContext'
import CartProvider from './context/CartContext'
import App from './App'

ReactDOM.render(
  <RestaurantProvider>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </RestaurantProvider>,
  document.getElementById('root'),
)
