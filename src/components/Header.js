import PropTypes from 'prop-types';
import React from 'react';
import 'tachyons';

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <a href="https://www.instagram.com/malickmbenguearroyo/?hl=es" target="_blank"><span className="icon fa-instagram"></span></a>
      <a href="https://www.facebook.com/Malickpercusion/" target="_blank"><span className="icon fa-facebook"></span></a>
      <a href="https://www.youtube.com/channel/UCisnUFE34yH0i6vnWwQGqKw" target="_blank"><span className="icon fa-youtube"></span></a>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Malick Mbengue</h1>
        <p>
          <span className="gold">Malick Mbengue Arroyo</span> es un percusionista y baterista nacido en Cádiz que <br/>
          ha desarrollado con éxito una fusión entre la <span className="gold">percusión flamenca, africana y latina</span>, <br/>
          y con la cual ha conseguido un sonido exclusivo que no pasa desapercibido para los <br/>
          músicos y amantes de<span className="gold"> de la música moderna</span>.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            <span className="gold">Bio</span>
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            <span className="gold">Media</span>
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            <span className="gold">Imagenes</span>
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            <span className="gold">Contacto</span>
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
