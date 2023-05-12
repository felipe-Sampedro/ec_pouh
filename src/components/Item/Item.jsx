import React from 'react'
import './Item.css'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import { Link, useParams } from 'react-router-dom'

const Item = ({ id, name, category, price, imagen }) => {

    return (
        // <div className="card my-4">
        <div className="card d-flex flex-column my-3">
            {/* <div className=" d-flex flex-column"> */}
                <div className="m-2"><span className="text"></span>
                    <img className="image" src={imagen} alt="" />
                </div>
                {/* <div className='d-flex flex-column'> */}
                {/* <div className=' d-flex flex-column p-3' style={{height:"70px"}}> */}
                <div className=' d-flex flex-column px-4 py-2'>
                    <div className="title">{name}</div>
                    <div className="category">{category}</div>
                    <div className="price">{price}</div>
                </div>
                <div className='d-flex justify-content-center py-2'>
                    <Link to={`/ItemDetail/` + id}>
                        <button className='btn'>Detalle</button>
                    </Link>
                </div>
            {/* </div> */}
        </div>
    )
}

export default Item