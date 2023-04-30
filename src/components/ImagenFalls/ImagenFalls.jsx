import React from 'react'
import './ImagenFalls.css'
import ReactDOM from 'react-dom/client';

const ImagenFalls = ({ waters }) => {


  function handleMouseOver(e) {
    const imgMain = document.getElementById('mainImg')
    const imgMainSrc = imgMain.attributes.src.value
    const thumbNailImg = e.target.src
    imgMain.setAttribute('src',thumbNailImg)
  }

  return (
    <>
      <div className='d-flex flex-column mx-3'>
        {waters
          ? waters.map((w,index) => <img key={index} onMouseOver={handleMouseOver} className={`thumbnail img${index} rounded border border-black mb-3`} src={w} alt="" />)
          : <h2>Cargando...</h2>
        }
      </div>
    </>
  )
}
export default ImagenFalls