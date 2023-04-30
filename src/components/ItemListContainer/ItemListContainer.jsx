import React, { useEffect, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemsList from '../ItemList/ItemsList'
import { data } from '../../config/data'
import { useParams } from 'react-router-dom'
import Carousel from '../Carousel/Carousel'
import  db  from "../../service/firebase";
import { doc, getDocs, collection } from "firebase/firestore";

const ItemListContainer = ({ greetings }) => {
  const [catalogy, setCatalogy] = useState([])
  const { filt } = useParams()
  const sail = data.filter(e => e.segment === filt)

  async function getData() {
    const col = collection(db, 'products')
    try {
      const rawData = await getDocs(col)
      const finalData = rawData.docs.map(r => r = { id: r.id, ...r.data() })
      setCatalogy(finalData)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {

    getData()
    // const products = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(sail.length == 0 ? data : sail)
    //     // resolve(data)
    //   }, 1000);
    // })

    // products
    //   .then(res => setCatalogy(res))
    //   .catch(err => console.log(err))

    return () => { }
  }, [filt])

  return (
    <div className=''>
      {greetings}
      <Carousel />
      <ItemsList catalogy={catalogy} />
      {/* <Detail/> */}
    </div>
  )
}

export default ItemListContainer