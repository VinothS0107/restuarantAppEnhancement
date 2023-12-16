import {BiFoodTag} from 'react-icons/bi'
import CartContext from '../../context/CartContext'
import './index.css'
import CartContext from '../CartContext'

const Category = props => (
  <CartContext.Consumer>
    {propsContext => {
      const {addCartItem} = propsContext
      const {nextComponent, onOperator} = props

      const onAddToCart = (dishId, operator) => {
        onOperator(dishId, operator)
      }

<<<<<<< HEAD
  return (
    <CartContext.Consumer>
      {context => {
        const {addCartItem} = context

        const onAddToCartBtn = dishId => {
          addCartItem(nextComponent, dishId)
        }

        return (
          <ul className="dish">
            {nextComponent.map(each => (
              <li key={each.dish_id} className="list_dish">
                <div className="item_details">
                  {each.dish_Type === 2 ? (
                    <BiFoodTag className="veg" />
                  ) : (
                    <BiFoodTag className="non_veg" />
                  )}
                  <div className="sub_details">
                    <h1 className="heading">{each.dish_name}</h1>
                    <div className="price_details">
                      <p>
                        {each.dish_currency} {each.dish_price}
                      </p>
                    </div>
                    <p className="description_details">
                      {each.dish_description}
                    </p>
                    {each.dish_Availability ? (
                      <div className="button_style">
                        <button
                          type="button"
                          className="button_value"
                          onClick={() => onAddToCart(each.dish_id, 'decrement')}
                        >
                          -
                        </button>
                        <p>{each.dish_quantity}</p>
                        <button
                          type="button"
                          className="button_value"
                          onClick={() => onAddToCart(each.dish_id, 'increment')}
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <p className="not_available">Not available</p>
                    )}
                    {each.addonCat.length === 0 ? null : (
                      <p className="customise">Customizations available</p>
                    )}
                    {each.dish_Availability && each.dish_quantity > 0 ? (
                      <button
                        type="button"
                        className="addToCartButton"
                        onClick={() => onAddToCartBtn(each.dish_id)}
                      >
                        ADD TO CART
                      </button>
                    ) : null}
                  </div>
                </div>
                <div className="image_list">
                  <p className="calories">{`${each.dish_calories} calories`}</p>
                  <img
                    src={each.dish_image}
                    alt={each.dish_name}
                    className="dish_image"
                  />
                </div>
              </li>
            ))}
          </ul>
        )
      }}
    </CartContext.Consumer>
  )
}
=======
      const onAddItem = dishId => {
        addCartItem(dishId, nextComponent)
      }

      return (
        <ul className="dish">
          {nextComponent.map(each => (
            <li key={each.dish_id} className="list_dish">
              <div className="item_details">
                {each.dish_Type === 2 ? (
                  <BiFoodTag className="veg" />
                ) : (
                  <BiFoodTag className="non_veg" />
                )}
                <div className="sub_details">
                  <h1 className="heading">{each.dish_name}</h1>
                  <div className="price_details">
                    <p>
                      {each.dish_currency} {each.dish_price}
                    </p>
                  </div>
                  <p className="description_details">{each.dish_description}</p>
                  {each.dish_Availability === false ? (
                    <p className="not_available">Not available</p>
                  ) : (
                    <div className="button_style">
                      <button
                        type="button"
                        className="button_value"
                        onClick={() => onAddToCart(each.dish_id, 'decrement')}
                      >
                        -
                      </button>
                      <p>{each.dish_quantity}</p>
                      <button
                        type="button"
                        className="button_value"
                        onClick={() => onAddToCart(each.dish_id, 'increment')}
                      >
                        +
                      </button>
                    </div>
                  )}
                  {each.addonCat.length === 0 ? null : (
                    <p className="customise">Customizations available</p>
                  )}
                  {each.dish_Availability && each.dish_quantity > 0 ? (
                    <button
                      type="button"
                      className="addtocart"
                      onClick={() => onAddItem(each.dish_id)}
                    >
                      ADD TO CART
                    </button>
                  ) : null}
                </div>
              </div>
              <div className="image_list">
                <p className="calories">{`${each.dish_calories} calories`}</p>
                <img
                  src={each.dish_image}
                  alt={each.dish_name}
                  className="dish_image"
                />
              </div>
            </li>
          ))}
        </ul>
      )
    }}
  </CartContext.Consumer>
)

>>>>>>> 7dd1c480ce97635fb061f13b0b500f26186715d3
export default Category
