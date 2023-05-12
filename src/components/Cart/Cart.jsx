import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Form from '../Form/Form'


const Cart = () => {
  const { cart, removeItem, clear, totalPurchase, amount } = useContext(GlobalContext)
  const [value, setValue] = useState(0)

  return (
    <div className='d-flex w-100'>
      {cart.length > 0
        ?
        <div className='w-50'>

          {cart.map((e, index) =>
            <div key={index} className='d-flex justify-content-center m-2 w-100'>
              <div  className='d-flex justify-content-center w-100'>
                <div>
                  <img src={e.imagen} style={{ width: "150px", height: "150px" }} alt="" />
                </div>
                {/* <div className='d-flex flex-column justify-content-center w-50 p-2'> */}
                <div className='d-flex flex-column justify-content-center p-2'style={{ width: "250px"}}>
                  <div>
                    <h3>{e.name}</h3>
                    <h6>{e.category}</h6>
                    <h4>{e.price}</h4>
                    <h4>{e.purchase}</h4>
                    {/* <h4>Total compra</h4>
                    <h4>{parseInt(e.purchase) * parseInt(e.price)}</h4> */}
                  </div>

                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    {/* <button onClick={() => removeItem(e.id, e.purchase, e.price)} className='btn btn-warning'>Borrar Item</button> */}
                    <FontAwesomeIcon onClick={() => removeItem(e.id, e.purchase, e.price)} icon={faTrashCan} size="2x" color="black"  />
                  </div>
              </div>
            </div>

          )}
        </div>
        :
        <div className='d-flex flex-column align-items-center m-5 w-100'>
          <h3 className='m-5 p-2'>El carrito esta vacio</h3>
          <Link to='/'>
            <button className='btn btn-info m-5'>Seguir Comprando</button>
          </Link>
        </div>
      }
      {cart.length > 0
        ?
        <div className='w-50 m-3'>
          <div className="m-3">
            <h1>Total Compra {totalPurchase}</h1>
            <h1>Valor Compra {amount}</h1>
            <button onClick={clear} className='btn btn-danger'>Borrar Todo</button>
          </div>
          <Form items={cart} amount={amount}/>
        </div>
        : null
      }
    </div >
  )
}

export default Cart