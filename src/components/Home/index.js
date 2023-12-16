import {Component} from 'react'
import Loader from 'react-loader-spinner'
<<<<<<< HEAD
=======
import CartContext from '../../context/CartContext'
>>>>>>> 7dd1c480ce97635fb061f13b0b500f26186715d3
import Header from '../Header'
import Category from '../Category'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    status: apiStatusConstants.initial,
<<<<<<< HEAD
    restaurantName: '',
    listMenu: [],
    value: '',
    count: 0,
=======
    listMenu: [],
    valueCheck: '',
>>>>>>> 7dd1c480ce97635fb061f13b0b500f26186715d3
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
<<<<<<< HEAD
    const restaurantName = data[0].restaurant_name
=======
>>>>>>> 7dd1c480ce97635fb061f13b0b500f26186715d3
    const dishQuantityAdd = data[0].table_menu_list.map(each => ({
      category_dishes: each.category_dishes.map(cate => ({
        ...cate,
        dish_quantity: '0',
      })),
      menu_category: each.menu_category,
      menu_categoryId: each.menu_category_id,
    }))
    this.setState({
      listMenu: dishQuantityAdd,
<<<<<<< HEAD
      restaurantName,
      value: dishQuantityAdd[0].menu_category,
=======
      valueCheck: dishQuantityAdd[0].menu_category,
>>>>>>> 7dd1c480ce97635fb061f13b0b500f26186715d3
      status: apiStatusConstants.success,
    })
  }

<<<<<<< HEAD
  onChooseList = value => {
    this.setState({value})
  }

  onIncreaseDecreaseCount = (dishId, operator) => {
=======
  onOperator = (dishId, operator) => {
>>>>>>> 7dd1c480ce97635fb061f13b0b500f26186715d3
    const {listMenu} = this.state
    const finalValue = listMenu.map(each => ({
      ...each,
      category_dishes: each.category_dishes.map(eachDish => {
        if (eachDish.dish_id === dishId) {
          if (operator === 'decrement' && eachDish.dish_quantity > 0) {
            this.setState(prevs => ({
              count: prevs.count - 1,
            }))
            return {
              ...eachDish,
              dish_quantity: parseInt(eachDish.dish_quantity) - 1,
            }
          }
          if (operator === 'increment') {
            this.setState(prevs => ({
              count: prevs.count + 1,
            }))
            return {
              ...eachDish,
              dish_quantity: parseInt(eachDish.dish_quantity) + 1,
            }
          }
        }
        return eachDish
      }),
    }))
    this.setState({listMenu: finalValue})
  }

<<<<<<< HEAD
=======
  chosenList = valueChosen => {
    this.setState({valueCheck: valueChosen})
  }

>>>>>>> 7dd1c480ce97635fb061f13b0b500f26186715d3
  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="Rings" color="#00BFFF" height={80} width={80} />
    </div>
  )

  renderSuccessView = () => {
<<<<<<< HEAD
    const {listMenu, value} = this.state
    const filteredDishes = listMenu.filter(each => each.menu_category === value)
=======
    const {listMenu, valueCheck} = this.state
    const filteredDishes = listMenu.filter(
      each => each.menu_category === valueCheck,
    )
>>>>>>> 7dd1c480ce97635fb061f13b0b500f26186715d3
    return (
      <>
        <ul className="menu_container">
          {listMenu.map(each => (
            <li key={each.menu_categoryId}>
              <button
                type="button"
                className={
<<<<<<< HEAD
                  each.menu_category === value
                    ? 'chosen-button'
                    : 'category-button'
                }
                onClick={() => this.onChooseList(each.menu_category)}
=======
                  each.menu_category === valueCheck
                    ? 'chosen-button'
                    : 'category-button'
                }
                onClick={() => this.chosenList(each.menu_category)}
>>>>>>> 7dd1c480ce97635fb061f13b0b500f26186715d3
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
<<<<<<< HEAD
            onDecreaseIncrease={this.onIncreaseDecreaseCount}
=======
            onOperator={this.onOperator}
>>>>>>> 7dd1c480ce97635fb061f13b0b500f26186715d3
          />
        ))}
      </>
    )
  }

  render() {
<<<<<<< HEAD
    const {count, restaurantName, status} = this.state

    return (
      <>
        <Header count={count} restaurantName={restaurantName} />
=======
    const {status} = this.state

    return (
      <>
        <Header />
>>>>>>> 7dd1c480ce97635fb061f13b0b500f26186715d3
        {status === apiStatusConstants.inProgress
          ? this.renderLoader()
          : this.renderSuccessView()}
      </>
    )
  }
}
<<<<<<< HEAD

export default Home
=======
export default Home

// const apiStatusConstants = {
//   initial: 'INITIAL',
//   success: 'SUCCESS',
//   failure: 'FAILURE',
//   inProgress: 'IN_PROGRESS',
// }

// const Home = () => (
//   <CartContext.Consumer>
//     {valueTaken => {
//       const {listMenu, status, valueCheck, onOperator, chosenList} = valueTaken

//       const onChooseList = valueChosen => {
//         chosenList(valueChosen)
//       }

//       const onIncreaseDecreaseCount = (dishId, operator) => {
//         onOperator(dishId, operator)
//       }

//       const renderLoader = () => (
//         <div className="loader-container">
//           <Loader type="Rings" color="#00BFFF" height={80} width={80} />
//         </div>
//       )

//       const renderSuccessView = () => {
//         const filteredDishes = listMenu.filter(
//           each => each.menu_category === valueCheck,
//         )
//         return (
//           <>
//             <ul className="menu_container">
//               {listMenu.map(each => (
//                 <li key={each.menu_categoryId}>
//                   <button
//                     type="button"
//                     className={
//                       each.menu_category === valueCheck
//                         ? 'chosen-button'
//                         : 'category-button'
//                     }
//                     onClick={() => onChooseList(each.menu_category)}
//                   >
//                     {each.menu_category}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//             {filteredDishes.map(each => (
//               <Category
//                 nextComponent={each.category_dishes}
//                 key={each.menu_categoryId}
//                 onDecreaseIncrease={onIncreaseDecreaseCount}
//               />
//             ))}
//           </>
//         )
//       }

//       return (
//         <>
//           <Header />
//           {status === apiStatusConstants.inProgress
//             ? renderLoader()
//             : renderSuccessView()}
//         </>
//       )
//     }}
//   </CartContext.Consumer>
// )

// export default Home
>>>>>>> 7dd1c480ce97635fb061f13b0b500f26186715d3
