import React, { useContext, useEffect, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemsList from '../ItemList/ItemsList'
import { data } from '../../config/data'
import { useParams } from 'react-router-dom'
import Carousel from '../Carousel/Carousel'
import db from "../../service/firebase";
import { doc, getDocs, collection } from "firebase/firestore";
import useFirebase from "../../hooks/useFirebase";

const ItemListContainer = () => {
  const [catalogy, setCatalogy] = useState([])
  const { filt } = useParams()
  const sail = data.filter(e => e.segment === filt)
  const { getAllData,products } = useFirebase()


  // async function getData() {
  //   const col = collection(db, 'products')
  //   try {
  //     const rawData = await getDocs(col)
  //     const finalData = rawData.docs.map(r => r = { id: r.id, ...r.data() })
  //     setCatalogy(finalData)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    getAllData()
    // setCatalogy(pro)
    // getData()
    return () => {
     }
  }, [filt])

  return (
    <div className=''>
      {/* {greetings} */}
      <Carousel />
      {/* <ItemsList catalogy={catalogy} /> */}
      <ItemsList catalogy={products} />
    </div>
  )
}

export default ItemListContainer