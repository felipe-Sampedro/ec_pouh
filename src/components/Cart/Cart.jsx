import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'


const Cart = () => {
  const { cart, removeItem, clear,totalPurchase,amount } = useContext(GlobalContext)
  const [value, setValue] = useState(0)


  function money() {
    
  }
  useEffect((c) => {

  
    return () => {
      
    }
  }, [])
  

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
                  <h4>{e.purchase}</h4>
                  <h4>Total compra</h4>
                  <h4>{parseInt(e.purchase) * parseInt(e.price)}</h4>

                </div>
                <div className='d-flex justify-content-center'>
                  <button onClick={() => removeItem(e.id,e.purchase,e.price)} className='btn btn-warning'>Borrar Item</button>
                </div>
              </div>
            </div>
          </div>)
        :
        <>
          <h3>El carrito esta vacio</h3>
          <Link to='/'>
            <button className='btn btn-info'>Seguir Comprando</button>
          </Link>
        </>
      }
      {cart.length > 0
        ?
        <>
          <h1>Total Compra {totalPurchase}</h1>
          <h1>Valor Compra {amount}</h1>
          <button onClick={clear} className='btn btn-danger'>Borrar Todo</button>
        </>
        : null}
    </div>
  )
}

export default Cart