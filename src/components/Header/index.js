import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import context from '../../context'
import './index.css'

const Header = props => (
  <context.Consumer>
    {contextValue => {
      const {cartList, restaurantName} = contextValue
      const count = cartList.length
      const onLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }
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
              <Link to="/" className={`link ${chosenHome}`}>
                Home
              </Link>
            </p>

            <p className="my_order">My Orders</p>
            <Link to="/cart" className="link" staticcontext="true">
              <button type="button" className="cartButton">
                {' '}
                <AiOutlineShoppingCart className={`icon_cart ${chosenCart}`} />
              </button>
            </Link>

            <p className="background">{count}</p>
            <button type="button" className="buttonLogout" onClick={onLogout}>
              Logout
            </button>
          </div>
        </div>
      )
    }}
  </context.Consumer>
)

export default withRouter(Header)
