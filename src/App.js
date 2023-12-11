import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from './components/Header'
import Category from './components/Category'
import './App.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class App extends Component {
  state = {
    status: apiStatusConstants.initial,
    restaurantName: '',
    listMenu: [],
    value: 'Salads and Soup',
    count: 0,
  }

  componentDidMount() {
    this.getApi()
  }

  getApi = async () => {
    this.setState({status: apiStatusConstants.inProgress})

    const dishesApiUrl =
      'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc'
    const response = await fetch(dishesApiUrl)
    const data = await response.json()
    const restaurantName = data[0].restaurant_name
    const dishQuantityAdd = data[0].table_menu_list.map(each => ({
      category_dishes: each.category_dishes.map(cate => ({
        ...cate,
        dish_quantity: 0,
      })),
      menu_category: each.menu_category,
      menu_categoryId: each.menu_category_id,
    }))
    this.setState({
      listMenu: dishQuantityAdd,
      restaurantName,
      status: apiStatusConstants.success,
    })
  }

  onChooseList = event => {
    const chosenMenu = event.target.innerText
    this.setState({value: chosenMenu})
  }

  totalCounter = operator => {
    if (operator === 'increment') {
      this.setState(prevs => ({
        count: prevs.count + 1,
      }))
    } else if (operator === 'decrement') {
      this.setState(prevs => ({
        count: prevs.count - 1,
      }))
    }
  }

  onDecreaseCount = (dishId, operator) => {
    const {listMenu} = this.state
    const finalValue = listMenu.map(each => ({
      ...each,
      category_dishes: each.category_dishes.map(eachDish => {
        if (eachDish.dish_id === dishId) {
          if (operator === 'decrement' && eachDish.dish_quantity > 0) {
            this.totalCounter('decrement')
            return {
              ...eachDish,
              dish_quantity: eachDish.dish_quantity - 1,
            }
          }
          if (operator === 'increment') {
            this.totalCounter('increment')
            return {
              ...eachDish,
              dish_quantity: eachDish.dish_quantity + 1,
            }
          }
        }
        return eachDish
      }),
    }))
    this.setState({listMenu: finalValue})
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="Rings" color="#00BFFF" height={80} width={80} />
    </div>
  )

  renderSuccessView = () => {
    const {listMenu, value} = this.state
    const filteredDishes = listMenu.filter(each => each.menu_category === value)
    return (
      <>
        <ul className="menu_container">
          {listMenu.map(each => (
            <li key={each.menu_categoryId} onClick={this.onChooseList}>
              <button
                type="button"
                className={
                  each.menu_category === value
                    ? 'chosen-button'
                    : 'category-button'
                }
              >
                {each.menu_category}
              </button>
            </li>
          ))}
        </ul>
        {filteredDishes.map(each => (
          <Category
            nextComponent={each.category_dishes}
            key={each.menu_categoryId}
            onDecrease={this.onDecreaseCount}
          />
        ))}
      </>
    )
  }

  render() {
    const {count, restaurantName, status} = this.state

    return (
      <>
        <Header count={count} restaurantName={restaurantName} />
        {status === apiStatusConstants.inProgress
          ? this.renderLoader()
          : this.renderSuccessView()}
      </>
    )
  }
}

export default App
