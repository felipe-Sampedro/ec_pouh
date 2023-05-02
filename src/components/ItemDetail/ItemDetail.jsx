import React, { useContext, useEffect, useRef, useState } from 'react'
import ImagenFalls from '../ImagenFalls/ImagenFalls'
import { Link, useParams } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { GlobalContext } from '../Context/CartContext'
import Spinner2 from '../Spinners/Spinner2/Spinner2'

const ItemDetail = ({ items }) => {
    const { cart, addItemToCart, isInCart, setItemsGlobal } = useContext(GlobalContext)
    const [ref, setRef] = useState(items)
    // const [purchase, setPurchase] = useState(false)
    setItemsGlobal(items)

    function handleOnAdd(product, qtyAdd) {
        console.log(`hemos recibido el evento de ITEM COUNT, compra añadida al carrito x ${qtyAdd} unidades`);
        // setPurchase(true)
        addItemToCart(product, qtyAdd)
    }

    let textInput = useRef(null)

    return (
        <>
            {items.length == 0
                ? <h1><Spinner2 /></h1>
                :
                <div className='d-flex justify-content-center p-5'>
                    <div className='d-flex m-2'>
                        <ImagenFalls waters={items.imagenFalls} />
                        <div className=''>
                            <img className='rounded sustituida-modificada' ref={textInput} id='mainImg' src={items.imagen} alt="" />
                        </div>
                    </div>
                    <div>
                        <h1>DETALLE PRODUCTO</h1>
                        <div>
                            <h3>{items.name}</h3>
                            <h5>{items.category}</h5>
                        </div>
                        <div>
                            <h3>{items.price}</h3>
                            <p className='' style={{ width: '375px' }}>{items.description}</p>
                        </div>
                        {isInCart(items.id)
                            ? <div className='d-flex flex-column justify-content-center align-items-center'>
                                <Link to={'/Cart'}><button className='btn btn-succes m-2'>Ver Carrito</button></Link>
                                <Link to='/'><button className="btn btn-primary m-2"> Seguir Comprando </button></Link>
                            </div>
                            : <div>
                                {/* <ItemCount stock={items.stock} initial={1} onAdd={handleOnAdd} purchase={purchase} /> */}
                                <ItemCount stock={items.stock} initial={1} onAdd={handleOnAdd} />
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    )
}
export default ItemDetail