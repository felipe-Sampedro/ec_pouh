import React from 'react'
import './Item.css'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import { Link, useParams } from 'react-router-dom'

const Item = ({ id, name, category, price, imagen }) => {

    return (
        <div className="card my-4">
            <div className="">
                <div className=""><span className="text"></span>
                    <img className="image" src={imagen} alt="" />
                </div>
                <div className='d-flex flex-column'>
                    <p className="title">{name}</p>
                    <p className="category">{category}</p>
                    <p className="price">{price}</p>
                    {/* <span className="title">{name}</span>
                    <span className="category">{category}</span>
                    <span className="price">{price}</span> */}
                </div>
                <div>
                    <Link to={`/ItemDetail/` + id}>
                        <button className='btn'>Detalle</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Item