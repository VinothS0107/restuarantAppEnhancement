import React from 'react'

const CartContext = React.createContext({
  restaurantName: '',
  count: 0,
  cartList: [],
  valueCheck: '',
  listMenu: [],
  status: '',
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
  chosenList: () => {},
  onOperator: () => {},
})
export default CartContext
