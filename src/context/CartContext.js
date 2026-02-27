import {createContext, useState, useEffect} from 'react'

export const CartContext = createContext({
  cartList: [],
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
})

const CartProvider = ({children}) => {
  const [cartList, setCartList] = useState([])

  // useEffect(() => {
  //   console.log(cartList)
  // }, [cartList])

  const removeAllCartItems = () => {
    setCartList([])
  }

  const addCartItem = dish => {
    const findDish = cartList.find(each => each.dish_id === dish.dish_id)
    if (findDish === undefined) {
      setCartList(prevCartList => [...prevCartList, dish])
    } else {
      incrementCartItemQuantity(dish.dish_id)
    }
  }

  const removeCartItem = id => {
    const filteredCartList = cartList.filter(each => each.dish_id !== id)
    setCartList(filteredCartList)
  }

  const incrementCartItemQuantity = id => {
    setCartList(prevCartList =>
      prevCartList.map(each =>
        each.dish_id === id ? {...each, quantity: each.quantity + 1} : each,
      ),
    )
  }

  const decrementCartItemQuantity = id => {
    setCartList(prevCartList =>
      prevCartList
        .map(each =>
          each.dish_id === id ? {...each, quantity: each.quantity - 1} : each,
        )
        .filter(each => each.quantity > 0),
    )
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        removeAllCartItems,
        addCartItem,
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
