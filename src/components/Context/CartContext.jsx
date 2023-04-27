import React, { createContext, useState } from 'react'


export const GlobalContext = createContext('')

const CartContext = ({ children }) => {

    const [cart, setCart] = useState([])
    const [amount,setAmount]=useState(0)

    function addItemToCart(item) {
        setCart([...cart, item])
    }

    function removeItem(itemId) {

    }

    function clear() {

    }

    function isInCart() {
        // return cart.some(e=>e.id === item.id)
    }

    return (
        <GlobalContext.Provider value={{ cart, setCart, addItemToCart, removeItem, clear, isInCart,setAmount }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default CartContext