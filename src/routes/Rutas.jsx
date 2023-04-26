import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import Layout from '../components/Layout/Layout'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import ItemDetail from '../components/ItemDetail/ItemDetail'
import Error from '../views/Error'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import Cart from '../components/Carousel/Cart/Cart'

const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<ItemListContainer />} />
            <Route path='/ItemDetail/:id' element={<ItemDetailContainer />} />
            <Route path='/Cart' element={<Cart />} />
          </Route>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Rutas



