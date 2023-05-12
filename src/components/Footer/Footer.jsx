import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    // <div className='bg-dark' style={{ height: 250 }}>
    <div className='bg-dark'>
      <div className="containe p-4 m-1  align-items-center">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-6 col-lg-3 p-3 text-center info-pie d-flex flex-column">
            <h5 className='text-light'>LINEA PRODUCTOS</h5>
            <a href="./pages/facial.html"><strong className='text-light'>Facial</strong></a>
            <a href="./pages/capilar.html"><strong className='text-light'>Capilar</strong></a>
            <a href="./pages/corporal.html"><strong className='text-light'>Corporal</strong></a>
            <a href="./pages/maquillaje.html"><strong className='text-light'>Maquillaje</strong></a>
            <a href="./pages/suscribete.html"><strong className='text-light'>Suscribete</strong></a>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3 text-center info-pie d-flex flex-column">
            <h5 className='text-light'>SOBRE NOSOTROS</h5>
            <strong className='text-light'>Historia</strong>
            <strong className='text-light'>Contactanos</strong>
            <strong className='text-light'>Descuentos</strong>
            <strong className='text-light'>Preguntas frecuentes</strong>
            <strong className='text-light'>Marcas</strong>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-3 text-center info-pie d-flex flex-column">
            <h5 className='text-light'>POLITCAS</h5>
            <strong className='text-light'>Aprende con Nosotros</strong>
            <strong className='text-light'>Politicas Privacidad</strong>
            <strong className='text-light'>Politicas Envio</strong>
            <strong className='text-light'>Devoluciones y Garantia</strong>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-center info-pie info-icons d-flex flex-column">
            <h5 className="p-3 text-light">REDES SOCIALES</h5>
            <div className="d-flex flex-wrap flex-wrap justify-content-center align-content-center info-icons">
              <div className="fondo fondo-facebook p-2">
                <a className="fb" href="https://es-la.facebook.com/" target="blank"><i className="fab fa-facebook-square fa-3x"></i></a>
              </div>
              <div className="fondo fondo-whatsapp p-2">
                <a className="wp" href="https://web.whatsapp.com/" target="blank"><i className="fab fa-whatsapp fa-3x"></i></a>
              </div>
              <div className="fondo fondo-instagram p-2">
                <a className="in" href="https://www.instagram.com/?hl=es-la" target="blank"><i className="fab fa-instagram fa-3x"></i></a>
              </div>
              <div className="fondo fondo-youtube p-2">
                <a className="yt" href="https://www.youtube.com/" target="blank"><i className="fab fa-youtube fa-3x"></i></a>
              </div>
              <div className="fondo fondo-pinterest p-2">
                <a className="pt" href="https://co.pinterest.com/" target="blank"><i className="fab fa-pinterest fa-3x"></i></a>
              </div>
              <div className="fondo fondo-twitter p-2">
                <a className="tw" href="https://twitter.com/?lang=es" target="blank"><i className="fab fa-twitter fa-3x"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer