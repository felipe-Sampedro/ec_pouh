import React, { useEffect, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemsList from '../ItemList/ItemsList'
import Item from '../Item/Item'


const data = [
  {name:"Camiseta Algodon", category:"Camiseta",price:65000,imagen:"https://picsum.photos/175/200"},
  {name:"Pantaloneta Algodon", category:"Pantaloneta",price:75000,imagen:"https://picsum.photos/175/200"},
  {name:"Medias Algodon", category:"Medias",price:22000,imagen:"https://picsum.photos/175/200"},
]

const ItemListContainer = ({greetings}) => {
  const [catalogy,setCatalogy]= useState([])

  useEffect(() => {

    const products = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      },5000);
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
    </div>
  )
}

export default ItemListContainer