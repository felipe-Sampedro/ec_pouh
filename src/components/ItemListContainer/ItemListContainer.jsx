import React, { useEffect, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemsList from '../ItemList/ItemsList'
import {data} from '../../config/data'
import Detail from '../Detail/Detail'

const ItemListContainer = ({greetings}) => {
  const [catalogy,setCatalogy]= useState([])

  useEffect(() => {

    const products = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      },2000);
    })

    products
      .then(res=>setCatalogy(res))
      .catch(err=>console.log(err))
  
    return () => {}
  }, [])
  
  return (
    <div className='vh-100'>
        {greetings}
        <ItemsList catalogy={catalogy}/>
        <Detail/>
    </div>
  )
}

export default ItemListContainer