import React, { useEffect, useRef, useState } from 'react'
import useFirebase from "../../hooks/useFirebase";

const Form = ({ items, amount }) => {
    const [location, setLocation] = useState(true)
    const { addOneOrderToCart,UpdateOneDoc } = useFirebase()
    const stateDom = useRef()
    const cityName = useRef()
    const [form, setForm] = useState({
        buyer: {
            email: "",
            firstName: "",
            lastName: "",
            celPhone: "",
            address: "",
            state: "",
            city: "",
        },
        amount: amount,
        items: items
    })

    const { email, firstName, lastName, celPhone, address, state, city } = form

    function handleOnChangeForm(e) {
        const { name, value } = e.target;
        setForm({
            ...form,
            buyer: {
                ...form.buyer,
                [name]: value
            }
        })
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        console.log(e);
        addOneOrderToCart(form)
    }

    async function getInfo() {
        try {
            const info = await fetch("https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json")
            const data = await info.json()
            data.forEach(e => {
                const add = document.createElement('option')
                add.value = e.departamento
                add.text = e.departamento
                stateDom.current.appendChild(add)
            });
        } catch (err) {
            console.log(err);
        }
    }

    async function handleOnChangeSelect() {
        console.log('Estado seleccionado');
        cityName.current.innerHTML = null
        try {
            const info = await fetch("https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json")
            const data = await info.json()
            const prev = data.filter(e => e.departamento === stateDom.current.value)
            const { ciudades } = prev[0]

            ciudades.forEach(c => {
                const add = document.createElement('option')
                add.value = c
                add.text = c
                cityName.current.appendChild(add)
            });

        } catch (err) {
            console.log(err);
        }
    }

    getInfo()
    // UpdateOneDoc("products","thR91bMGu5bsGZ0FY9hm","price",80000)
    UpdateOneDoc("products","thR91bMGu5bsGZ0FY9hm",{price:80000})

    return (
        <div>
            <form onSubmit={handleOnSubmit} className="ro g-3">
                <div className="col-md-10">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input onChange={handleOnChangeForm} type="email" className="form-control" name="email" id="inputEmail" />
                </div>
                <div className="col-10">
                    <label htmlFor="inputName" className="form-label">Nombre</label>
                    <input onChange={handleOnChangeForm} type="text" className="form-control" name="firstName" id="inputName" placeholder="1234 Main St" />
                </div>
                <div className="col-10">
                    <label htmlFor="inputLastName" className="form-label">Apellido</label>
                    <input onChange={handleOnChangeForm} type="text" className="form-control" name="lastName" id="inputLastName" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="col-md-10">
                    <label htmlFor="inputCel" className="form-label">Celular</label>
                    <input onChange={handleOnChangeForm} type="tel" className="form-control" name="celPhone" id="inputCel" />
                </div>
                <div className="col-md-10">
                    <label htmlFor="inputAddress" className="form-label">Direccion</label>
                    <input onChange={handleOnChangeForm} type="text" className="form-control" name="address" id="inputAddress" />
                </div>
                <div className='d-flex'>
                    <div className="col-md-5 px-1">
                        <label htmlFor="inputState" className="form-label">Departamento</label>
                        <select onChange={handleOnChangeSelect} ref={stateDom} id="inputState" name="state" className="form-select">
                            <option defaultValue>Choose...</option>
                        </select>
                    </div>
                    <div className="col-md-5 px-1">
                        <label htmlFor="inputCity" className="form-label">Ciudad</label>
                        <select ref={cityName} id="inputCity" name="city" className="form-select">
                            <option defaultValue>Choose...</option>
                        </select>
                    </div>
                </div>
                <div className="col-10">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <div className="col-10">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    )
}

export default Form