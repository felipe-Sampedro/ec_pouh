import React from 'react'
import Item from '../Item/Item'

const ItemsList = ({ catalogy }) => {

    return (
        // <div className='d-flex justify-content-evenly' style={{height:300}}>
        <div className='d-flex justify-content-evenly' >
            {catalogy.length > 0 ? (catalogy.map((cat, index) =>
                <Item key={index} id={cat.id} name={cat.name} category={cat.category} price={cat.price} imagen={cat.imagen} />
            )
            ) : (
                <h1>Cargando....</h1>)}
        </div>
    )
}

export default ItemsList