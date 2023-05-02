import React, { useContext, useState } from 'react'
import  db  from "../service/firebase";
import { doc, getDoc, getDocs, collection, addDoc, updateDoc, writeBatch } from "firebase/firestore";
import { GlobalContext } from '../components/Context/CartContext';


const useFirebase = () => {

    const [product,setProduct]=useState({})
    const [products,setProducts]=useState([])

    const {setCatalogyFB} = useContext(GlobalContext)


    async function getAllData() {
        const col = collection(db, 'products')
        try {
            const rawData = await getDocs(col)
            const finalData = rawData.docs.map(r => r = { id: r.id, ...r.data() })
            setProducts(finalData)
        } catch (error) {
            console.log(error);
        }
    }

    async function getById(id) {
        const col = collection(db, 'products')
        try {
            const rawData = await getDocs(col)
            const finalData = rawData.docs.map(r => r = { id: r.id, ...r.data() })
            const item = finalData.find(e=>e.id === id)
            setProduct(item)
        } catch (error) {
            console.log(error);
        }
    }

    return {
        product,
        products,
        getAllData,
        getById
    }
    
}

export default useFirebase

