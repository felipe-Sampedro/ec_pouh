import React, { useState } from 'react'
import './ItemCount.css'
import { Link } from 'react-router-dom'

const ItemCount = ({ stock, initial, onAdd, purchase }) => {

    const [quantity, setQuantity] = useState(initial)
    function add() {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    function subtrat() {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    return (
        <div className='d-flex justify-content-center'>
            {purchase
                ?
                <div className='d-flex flex-column'>
                    <Link to='/Cart/'>
                        <button className="btn btn-success m-2"> Ver Carrito </button>
                    </Link>
                    <button className="btn btn-primary m-2"> Seguir Comprando </button>
                </div>
                :
                <div>
                    <div className='d-flex justify-content-center'>
                        <button onClick={subtrat}>-</button>
                        <input className='text-center' type="number" value={quantity} />
                        <button onClick={add}>+</button>
                    </div>
                    <div>
                        <button onClick={onAdd} className="btn m-2"> Añade al Carrito </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default ItemCount