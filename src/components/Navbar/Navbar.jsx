import React from 'react'
import logo from '../../assets/images/logo.jpg'
import CartWidget from '../CartWidget/CartWidget'
import PreNavbar from '../PreNavbar/PreNavbar'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <PreNavbar />
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid mx-4">
                    {/* <a className="navbar-brand" href="#">POUH</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=''>
                        <Link to='/'>
                            <img src={logo} className='' style={{ "width": 70 }} alt="" />
                        </Link>
                    </div>
                    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="ItemListContainer/Hombre">
                                    <span className="nav-link active" aria-current="page" href="#">HOMBRE</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="ItemListContainer/Mujer">
                                    <span className="nav-link" href="#">MUJER</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="ItemListContainer/Niños">
                                    <span className="nav-link" href="#">NIÑOS</span>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    OFERTAS
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Hombre</a></li>
                                    <li><a className="dropdown-item" href="#">Mujer</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Unisex</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                    <CartWidget />
                </div>
            </nav>
        </div>
    )
}

export default Navbar