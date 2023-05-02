import React, { useState } from 'react'

const Form = ({ items, amount }) => {

    const [form, setForm] = useState({
        buyer: {
            email: "",
            firstName: "",
            lastName: "",
            celPhone: "",
            city: "",
        },
        amount: amount,
        items: items
    })

    const { email, firstName, lastName, celPhone, city } = form

    function handleOnChange(e) {
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
        console.log(e);
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit} className="ro g-3">
                <div className="col-md-10">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input onChange={handleOnChange} type="email" className="form-control" name="email" id="inputEmail" />
                </div>
                <div className="col-10">
                    <label htmlFor="inputAddress" className="form-label">Nombre</label>
                    <input onChange={handleOnChange} type="text" className="form-control" name="firstName" id="inputName" placeholder="1234 Main St" />
                </div>
                <div className="col-10">
                    <label htmlFor="inputAddress2" className="form-label">Apellido</label>
                    <input onChange={handleOnChange} type="text" className="form-control" name="lastName" id="inputLastName" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="col-md-10">
                    <label htmlFor="inputCity" className="form-label">Celular</label>
                    <input onChange={handleOnChange} type="tel" className="form-control" name="celPhone" id="inputCel" />
                </div>
                <div className="col-md-10">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">
                        <option defaultValue>Choose...</option>
                        <option>...</option>
                    </select>
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