import React from 'react'
import './Item.css'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import { Link, useParams } from 'react-router-dom'



const Item = ({id,name,category,price,imagen}) => {

    return (
        <div>
            <div className="card">
                <div className="image"><span className="text"></span></div>
                <span className="title">{name}</span>
                <span className="category">{category}</span>
                <span className="price">{price}</span>
                <Link to ={`/ItemDetail/`+id}>
                    <button className='btn'>Detalle</button>
                </Link>

            </div>
        </div>
    )
}

export default Item