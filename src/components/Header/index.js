<<<<<<< HEAD
import {Link, withRouter} from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Cookies from 'js-cookie'
import CartContext from '../CartContext'

=======
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import CartContext from '../../context/CartContext'
>>>>>>> 7dd1c480ce97635fb061f13b0b500f26186715d3
import './index.css'

const Header = props => (
  <CartContext.Consumer>
<<<<<<< HEAD
    {context => {
      const {cartList} = context
=======
    {contextValue => {
      const {cartList, restaurantName} = contextValue
      const count = cartList.length
>>>>>>> 7dd1c480ce97635fb061f13b0b500f26186715d3
      const onLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

<<<<<<< HEAD
      const {restaurantName} = props
      const {match} = props
      const {path} = match
      // const chosenHome = path === '/' ? 'chosenLink' : null
      const chosenCart = path === '/cart' ? 'chosenLink' : null
      return (
        <div className="bg-container">
          <Link to="/" className="link">
            <h1 className="heading">{restaurantName}</h1>
          </Link>
          <div className="card_container">
            <p className="my_order">My Orders</p>
            <Link
              to={{pathname: '/cart', state: restaurantName}}
              className="link"
            >
              <button type="button" className="cartButton">
                <AiOutlineShoppingCart className={`icon_cart ${chosenCart}`} />
              </button>
            </Link>
            <p className="background">{cartList.length}</p>
=======
      const {match} = props
      const {path} = match
      const chosenHome = path === '/' ? 'chosenLink' : null
      const chosenCart = path === '/cart' ? 'chosenLink' : null
      return (
        <div className="bg-container">
          <h1 className="heading">
            <Link to="/" className="link heading">
              {restaurantName}
            </Link>
          </h1>

          <div className="card_container">
            <p className="my_order">
              {' '}
              <Link to="/" className={`link ${chosenHome}`}>
                Home{' '}
              </Link>
            </p>

            <p className="my_order">My Orders</p>

            <button type="button" className="cartButton">
              <Link to="/cart" className="link">
                <AiOutlineShoppingCart className={`icon_cart ${chosenCart}`} />
              </Link>
            </button>

            <p className="background">{count}</p>
>>>>>>> 7dd1c480ce97635fb061f13b0b500f26186715d3
            <button type="button" className="buttonLogout" onClick={onLogout}>
              Logout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default withRouter(Header)
