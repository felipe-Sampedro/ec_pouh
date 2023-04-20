import React from 'react'
import './Item.css'

// const Item = ({name,category,price}) => {
const Item = ({name,category,price,imagen}) => {
    console.log(name);
    console.log(category);
    console.log(price);
    return (
        <div>
            <div className="card">
                <div className="image"><span className="text"></span></div>
                <span className="title">{name}</span>
                <span className="category">{category}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    )
}

export default Item