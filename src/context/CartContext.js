import React from 'react'

const CartContext = React.createContext({
  restaurantName: '',
  count: 0,
  cartList: [],
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
})
export default CartContext
