import React from 'react'

const context = React.createContext({
  listMenu: [],
  status: '',
  restaurantName: '',
  value: '',
  count: 0,
  cartList: [],
  getApi: () => {},
  onOperator: () => {},
  chosenList: () => {},
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
})
export default context
