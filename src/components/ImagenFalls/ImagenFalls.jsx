import React from 'react'
import './ImagenFalls.css'

const ImagenFalls = ({ waters }) => {
  return (
    <>
      {waters ? (
      <div className='d-flex flex-column mx-3'>
        <img className="thumbnail rounded border border-black mb-3" src={waters[0]} alt="" />
        <img className="thumbnail rounded border border-black mb-3"  src={waters[1]} alt="" />
        <img className="thumbnail rounded border border-black mb-3"  src={waters[2]} alt="" />
        <img className="thumbnail rounded border border-black mb-3"  src={waters[3]} alt="" />
        <img className="thumbnail rounded border border-black mb-3"  src={waters[4]} alt="" />
      </div>
      ) : <h2>Cargando....</h2>}

    </>
  )
}

export default ImagenFalls