import {Component} from 'react'
import Loader from 'react-loader-spinner'
import context from '../../context'
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
  render() {
    return (
      <context.Consumer>
        {valueTaken => {
          const {listMenu, status, value, onOperator, chosenList} = valueTaken

          const onChooseList = valueChosen => {
            chosenList(valueChosen)
          }

          const onIncreaseDecreaseCount = (dishId, operator) => {
            onOperator(dishId, operator)
          }

          const renderLoader = () => (
            <div data-testid="loader" className="loader-container">
              <Loader type="Rings" color="#00BFFF" height={80} width={80} />
            </div>
          )

          const renderSuccessView = () => {
            const filteredDishes = listMenu.filter(
              each => each.menu_category === value,
            )
            return (
              <>
                <ul className="menu_container">
                  {listMenu.map(each => (
                    <li key={each.menu_categoryId}>
                      <button
                        type="button"
                        className={
                          each.menu_category === value
                            ? 'chosen-button'
                            : 'category-button'
                        }
                        onClick={() => onChooseList(each.menu_category)}
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
                    onDecreaseIncrease={onIncreaseDecreaseCount}
                  />
                ))}
              </>
            )
          }

          return (
            <>
              <Header />
              {status === apiStatusConstants.inProgress
                ? renderLoader()
                : renderSuccessView()}
            </>
          )
        }}
      </context.Consumer>
    )
  }
}

export default Home
