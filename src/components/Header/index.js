import {AiOutlineShoppingCart} from 'react-icons/ai'
import './index.css'

const Header = props => {
  const {count, restaurantName} = props
  return (
    <div className="bg-container">
      <h1 className="heading">{restaurantName}</h1>
      <div className="card_container">
        <p className="my_order">My Orders</p>
        <AiOutlineShoppingCart className="icon_cart" />
        <p className="background">{count}</p>
      </div>
    </div>
  )
}
export default Header
