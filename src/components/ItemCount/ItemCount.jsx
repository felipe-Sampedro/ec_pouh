import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({stock,initial}) => {
    const [quantity,setQuantity] = useState(initial)
    function add() {
        if (quantity<stock) {
            setQuantity(quantity+1)
        }
    }
    function subtrat() {
        if (quantity>1) {
            setQuantity(quantity-1)
        }
    }
    return (
    <div className='d-flex justify-content-center'>
        <div className=''>
            <div className='d-flex justify-content-center'>
                <button onClick={subtrat}>-</button>
                <input className='text-center' type="number" value={quantity}/>
                <button onClick={add}>+</button>
            </div>
            <button className="btn m-2"> Añade al Carrito </button>
        </div>
    </div>
  )
}

export default ItemCount