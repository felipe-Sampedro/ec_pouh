import React, { useContext } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import './CartWidget.css';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Context/CartContext';

const CartWidget = () => {
  const {totalPurchase} =useContext(GlobalContext)
  return (
    <div className="cart-widget px-5 py-2">
      {/* Acá puede ir cualquier ícono que quieran. En mi caso, estoy usando FontAwesome para React JS. */}
      <Link to='/Cart'>
        <FontAwesomeIcon icon={faCartShopping} size="2x" color="black" />
      </Link>
      {/* <div className="qty-display">{totalPurchase}</div> */}
      <div className={totalPurchase>1?'qty-display2':'qty-display'}>{totalPurchase}</div>
    </div>
  )
}

export default CartWidget







