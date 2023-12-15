import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Cart from './components/Cart'
import Login from './components/Login'
import CartContext from './context/CartContext'
<<<<<<< HEAD
import NotFound from './components/NotFound'
=======
>>>>>>> 3d710264beb6819b8e1e5b9db066106c6413fda1
import './App.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class App extends Component {
  state = {
    restaurantName: '',
    cartList: [],
    listMenu: [],
    valueCheck: '',
    status: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getApiRes()
    // this.getApi()
  }

  //   getApi = async () => {
  //     this.setState({status: apiStatusConstants.inProgress})
  //     const dishesApiUrl =
  //       'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc'
  //     const response = await fetch(dishesApiUrl)
  //     const data = await response.json()
  //     const restaurantName = data[0].restaurant_name
  //     const dishQuantityAdd = data[0].table_menu_list.map(each => ({
  //       category_dishes: each.category_dishes.map(cate => ({
  //         ...cate,
  //         dish_quantity: '0',
  //       })),
  //       menu_category: each.menu_category,
  //       menu_categoryId: each.menu_category_id,
  //     }))
  //     this.setState({
  //       listMenu: dishQuantityAdd,
  //       valueCheck: dishQuantityAdd[0].menu_category,
  //       status: apiStatusConstants.success,
  //       restaurantName,
  //     })
  //   }

  //   onOperator = (dishId, operator) => {
  //     const {listMenu} = this.state
  //     const finalValue = listMenu.map(each => ({
  //       ...each,
  //       category_dishes: each.category_dishes.map(eachDish => {
  //         if (eachDish.dish_id === dishId) {
  //           if (operator === 'decrement' && eachDish.dish_quantity > 0) {
  //             this.setState(prevs => ({
  //               count: prevs.count - 1,
  //             }))
  //             return {
  //               ...eachDish,
  //               dish_quantity: parseInt(eachDish.dish_quantity) - 1,
  //             }
  //           }
  //           if (operator === 'increment') {
  //             this.setState(prevs => ({
  //               count: prevs.count + 1,
  //             }))
  //             return {
  //               ...eachDish,
  //               dish_quantity: parseInt(eachDish.dish_quantity) + 1,
  //             }
  //           }
  //         }
  //         return eachDish
  //       }),
  //     }))
  //     this.setState({listMenu: finalValue})
  //   }

  //   chosenList = valueChosen => {
  //     this.setState({valueCheck: valueChosen})
  //   }

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
    const {
      restaurantName,
      count,
      cartList,
      listMenu,
      status,
      valueCheck,
    } = this.state

    return (
      <CartContext.Provider
        value={{
          restaurantName,
          count,
          cartList,
          listMenu,
          status,
          valueCheck,
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
          <Route path="/not-found" component={NotFound} />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
