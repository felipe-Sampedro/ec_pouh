import React from 'react'
import Item from '../Item/Item'
import Spinner from '../Spinners/Spinner'

const ItemsList = ({ catalogy }) => {

    return (
        // <div className='d-flex justify-content-evenly' style={{height:300}}>
        // <div className='d-flex align-content-around flex-wrap justify-content-evenly m-4' >
        <div className='m-auto d-flex justify-content-center'>

            <div className='d-flex flex-wrap column-gap-3 py-4' style={{width:"95.8%"}} >
                {catalogy.length > 0 ? (catalogy.map((cat, index) =>
                    <Item key={index} id={cat.id} name={cat.name} category={cat.category} price={cat.price} imagen={cat.imagen} />
                )
                ) : (
                    <h1><Spinner /></h1>)}
            </div>
        </div>
    )
}

export default ItemsList