import { logDOM } from '@testing-library/react'
import React, { useState } from 'react'

const Detail = () => {
    const [states,setStates]= useState('')

    const handlerOnKeyDown = (e) => {
        console.log(e.target.value);
        const {key} = e
        console.log(key);
        if (key !== 'a' && key !== 'b') {
            setStates((prev)=>prev+key)
        }

    }

    return (
        <div>
            <input value={states} onKeyDown={handlerOnKeyDown} type="text" name="Desafio" id="" />
        </div>
    )
}

export default Detail