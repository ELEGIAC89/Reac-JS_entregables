import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const CartWidget = () => {
    return (
      <div className="cart-widget-container">
        <div className="cart-widget">
          <FontAwesomeIcon icon={faShoppingCart} />
          {}
          <span className="badge">8</span>
        </div>
      </div>
    );
  };

export default CartWidget;