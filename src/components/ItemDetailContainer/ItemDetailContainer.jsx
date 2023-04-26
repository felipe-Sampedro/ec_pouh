import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {data} from '../../config/data'

const ItemDetailContainer = () => {
    const [items,setItems] = useState([])
    const {id} = useParams()
    const product = data.find((p)=>p.id === +id)

    async function getItem() {
        const data = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(product)
            }, 2000);
        })
        
        data
        .then((res)=>setItems(res))
        .catch((err)=> console.log(err))
    }
    
    useEffect(() => {
      getItem()
    //   console.log('este es items ', items);
      return () => {
        
      }
    }, [])
    
    return (
        <div>
            {items?<ItemDetail items={items}/>:<h1>Cargando...</h1>}
        </div>
    )
}

export default ItemDetailContainer