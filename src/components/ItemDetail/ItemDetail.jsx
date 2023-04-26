import React, { useEffect, useState } from 'react'
import ImagenFalls from '../ImagenFalls/ImagenFalls'
import { useParams } from 'react-router-dom'
import { logDOM } from '@testing-library/react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ items }) => {

    const[purchase,setPurchase]=useState(false)
    function handleOnAdd(qtyAdd) {
        console.log(qtyAdd);
        console.log(`hemos recibido el evento de ITEM COUNT, compra añadida al carrito x ${qtyAdd}`);
        setPurchase(true)

    }

    return (
        <div className='d-flex justify-content-center p-5'>
            <div className='d-flex m-2'>
                <ImagenFalls waters={items.imagenFalls} />
                <div className=''>
                    <img className='rounded sustituida-modificada' src={items.imagen} alt="" />
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
                <div>
                    <ItemCount  stock={items.stock} initial={1} onAdd={handleOnAdd} purchase={purchase} />
                </div>
            </div>



        </div>


    )
}

export default ItemDetail