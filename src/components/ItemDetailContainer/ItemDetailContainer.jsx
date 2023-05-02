import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { data } from '../../config/data'
import db from '../../service/firebase'
import { collection, getDocs } from 'firebase/firestore'
import useFirebase from '../../hooks/useFirebase'

const ItemDetailContainer = () => {
  const [items, setItems] = useState([])
  const { id } = useParams()
  // const product = data.find((p) => p.id === +id)

  const { getById, product } = useFirebase()

  // async function getData() {
  //   const col = collection(db, 'products')
  //   try {
  //     const rawData = await getDocs(col)
  //     const finalData = rawData.docs.map(r => r = { id: r.id, ...r.data() })
  //     const product = finalData.find((p) => p.id === id)
  //     setItems(product)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async function getItem() {
  //     const data = new Promise((resolve, reject) => {
  //         setTimeout(() => {
  //             resolve(product)
  //         }, 1000);
  //     })
  //     data
  //         .then((res) => setItems(res))
  //         .catch((err) => console.log(err))
  // }

  useEffect(() => {
    // getItem()
    // getData()
    getById(id)


    return () => {

    }
  }, [])

  return (
    <div>
      {/* {items ? <ItemDetail items={items} /> : <h1>Cargando...</h1>} */}
      {items ? <ItemDetail items={product} /> : <h1>Cargando...</h1>}
    </div>
  )
}

export default ItemDetailContainer