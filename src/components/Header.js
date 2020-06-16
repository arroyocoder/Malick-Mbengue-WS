import PropTypes from 'prop-types';
import React from 'react';
import 'tachyons';

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <a href="https://www.instagram.com/malickmbenguearroyo/?hl=es" taget="blank"><span className="icon fa-instagram"></span></a>
      <a href="https://www.youtube.com/channel/UCisnUFE34yH0i6vnWwQGqKw" taget="blank"><span className="icon fa-facebook"></span></a>
      <a href="https://www.youtube.com/channel/UCisnUFE34yH0i6vnWwQGqKw" taget="blank"><span className="icon fa-youtube"></span></a>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Malick Mbengue</h1>
        <p>
          <span className="gold">Malick Mbengue Arroyo</span> es un percusionista y baterista Senegalés nacido en España que <br/>
          ha desarrollado con éxito una fusión entre la <span className="gold">percusión flamenca, africana y latina</span>, <br/>
          y con la cual a conseguido un sonido exclusivo que no pasa desapercibido para los <br/>
          amantes y músicos de<span className="gold"> elite de la música moderna</span>.
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
