import React, { useContext, useState } from 'react'
import db from "../service/firebase";
import { doc, getDoc, getDocs, collection, addDoc, updateDoc, writeBatch } from "firebase/firestore";
import { GlobalContext } from '../components/Context/CartContext';

const useFirebase = () => {
    const [product, setProduct] = useState({})
    const [products, setProducts] = useState([])

    async function getById(id) {
        const col = collection(db, 'products')
        try {
            const rawData = await getDocs(col)
            const finalData = rawData.docs.map(r => r = { id: r.id, ...r.data() })
            const item = finalData.find(e => e.id === id)
            setProduct(item)
        } catch (error) {
            console.log(error);
        }
    }

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

    async function addOneOrderToCart(order) {
        const col = collection(db, "orders")
        try {
            const note = await addDoc(col, order)
            alert('Su oprden se ha creado correctamente con el id: ' + note.id)
        } catch (error) {
            console.log(error);
        }
    }


    async function UpdateOneDoc(col, id, val) {
        const reg = doc(db, col, id)
        try {
            await updateDoc(reg, val)
        } catch (err) {
            console.log(err);
        }
    }


    return {
        product,
        products,
        getAllData,
        getById,
        addOneOrderToCart,
        UpdateOneDoc
    }
}

export default useFirebase

