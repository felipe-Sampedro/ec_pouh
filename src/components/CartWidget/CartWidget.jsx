import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-widget px-5 py-2">
      {/* Acá puede ir cualquier ícono que quieran. En mi caso, estoy usando FontAwesome para React JS. */}
      <FontAwesomeIcon icon={faCartShopping} size="2x" color="black"  />
      <div className="qty-display">0</div>
    </div>
  )
}

export default CartWidget







