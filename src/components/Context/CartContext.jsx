// import { render } from '@testing-library/react'
import React, { createContext, useState } from 'react'
export const GlobalContext = createContext('')

const CartContext = ({ children }) => {
    const [cart, setCart] = useState([])
    const [amount, setAmount] = useState(0)
    const [totalPurchase,setTotalPurchase] = useState(0)
    const [itemsGlobal, setItemsGlobal] = useState()

    function addItemToCart(item,qty) {
        item.purchase = qty
        setCart([...cart, item])
        setTotalPurchase(prev => prev + qty)
        setAmount(prev => prev + (item.price*qty))
    }

    function removeItem(itemId,qty,coin) {
        const filter = cart.filter(e=>e.id !== +itemId)
        setCart(filter)
        setTotalPurchase(prev => prev - qty)
        setAmount(prev => prev - (coin*qty))
    }

    function clear() {
        setCart([])
        // setTotalPurchase(0)
    }

    function isInCart(id) {
        return cart.some(e=>e.id === +id)
    }

    return (
        <GlobalContext.Provider value={{ cart, setCart, addItemToCart, removeItem, clear, isInCart,amount, setAmount, itemsGlobal, setItemsGlobal,totalPurchase }}>
            {children}
        </GlobalContext.Provider>
    )
}
export default CartContext