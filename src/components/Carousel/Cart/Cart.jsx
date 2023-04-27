import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/CartContext'


const Cart = () => {

  const { cart } = useContext(GlobalContext)

  return (
    <div>
      {cart.length > 0
        ? cart.map((e, index) =>
          <div className='d-flex justify-content-center m-2'>
            <div key={index} className='d-flex justify-content-center w-75'>
              <div>
                <img src={e.imagen} style={{ width: "240px", height: "240px" }} alt="" />
              </div>
              <div className='d-flex flex-column justify-content-center w-25 p-2'>
                <div>
                  <h4>{e.name}</h4>
                  <h6>{e.category}</h6>
                  <h4>{e.price}</h4>
                  <h4>{e.stock}</h4>
                </div>
                <div className='d-flex justify-content-center'>
                  <button className='btn btn-warning'>Borrar Item</button>
                </div>
              </div>
            </div>
          </div>)
        : <h3>El carrito esta vacio</h3>
      }
    </div>
  )
}

export default Cart