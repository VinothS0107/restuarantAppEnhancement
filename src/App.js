import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Cart from './components/Cart'
import Login from './components/Login'
import CartContext from './context/CartContext'
import './App.css'

class App extends Component {
  state = {
    restaurantName: '',
    value: '',
    cartList: [],
  }

  componentDidMount() {
    this.getApiRes()
  }

  getApiRes = async () => {
    const dishesApiUrl =
      'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc'
    const response = await fetch(dishesApiUrl)
    const data = await response.json()
    const restaurantName = data[0].restaurant_name
    this.setState({restaurantName})
  }

  addCartItem = (dishId, nextComponent) => {
    const {cartList} = this.state
    const chosenId = nextComponent.find(each => each.dish_id === dishId)
    const checkCart = cartList.find(each => each.dish_id === chosenId.dish_id)
    if (checkCart === undefined) {
      this.setState({
        cartList: [...cartList, chosenId],
      })
    } else {
      const checkList = cartList.map(each => {
        if (each.dish_id === dishId) {
          return {...each, dish_quantity: each.dish_quantity + 1}
        }
        return each
      })
      this.setState({
        cartList: checkList,
      })
    }
  }

  incrementCartItemQuantity = id => {
    const {cartList} = this.state
    const increased = cartList.map(each => {
      if (each.dish_id === id) {
        return {...each, dish_quantity: each.dish_quantity + 1}
      }
      return each
    })
    this.setState({cartList: increased})
  }

  decrementCartItemQuantity = id => {
    const {cartList} = this.state
    const checkQuantity = cartList.find(each => each.dish_id === id)
    if (checkQuantity.dish_quantity === 1) {
      const leftCartList = cartList.filter(each => each.dish_id !== id)
      this.setState({cartList: leftCartList})
    } else {
      const decreased = cartList.map(each => {
        if (each.dish_id === id) {
          return {...each, dish_quantity: each.dish_quantity - 1}
        }
        return each
      })
      this.setState({cartList: decreased})
    }
  }

  removeCartItem = id => {
    const {cartList} = this.state
    const leftCartList = cartList.filter(each => each.dish_id !== id)
    this.setState({cartList: leftCartList})
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  render() {
    const {restaurantName, value, count, cartList} = this.state

    return (
      <CartContext.Provider
        value={{
          restaurantName,
          value,
          count,
          cartList,
          getApi: this.getApi,
          onOperator: this.onOperator,
          chosenList: this.chosenList,
          removeAllCartItems: this.removeAllCartItems,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/cart" component={Cart} />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
