import React, { useContext, useState } from 'react'
import './ItemCount.css'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../Context/CartContext'

const ItemCount = ({ stock, initial, onAdd, purchase }) => {

    const [quantity, setQuantity] = useState(initial)
    const { itemsGlobal } = useContext(GlobalContext)

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
            {/* {purchase
                ?
                <div className='d-flex flex-column'>
                    <Link to='/Cart/'>
                        <button className="btn btn-success m-2"> Ver Carrito </button>
                    </Link>
                    <Link to='/ItemListContainer'>
                        <button className="btn btn-primary m-2"> Seguir Comprando </button>
                    </Link>
                </div>
                : */}
                <div>
                    <div className='d-flex justify-content-center'>
                        <button onClick={subtrat}>-</button>
                        <input className='text-center' type="number" value={quantity} />
                        <button onClick={add}>+</button>
                    </div>
                    <div>
                        <button onClick={() => onAdd(itemsGlobal, quantity)} className="btne m-2"> Añade al Carrito </button>
                    </div>
                </div>
            {/* } */}
        </div>
    )
}

export default ItemCount