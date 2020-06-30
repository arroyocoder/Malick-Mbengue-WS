import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (<footer id="footer" style={props.timeout
    ? {
      display: 'none'
    }
    : {}}>
  <h1 className="copyright">Mas de mi música en
    <a href="https://www.facebook.com/Malickpercusion/" className="yellow" target="blank">
      &nbsp;FACEBOOK&nbsp;
    </a>,
    <a href="https://www.instagram.com/malickmbenguearroyo/?hl=es" className="yellow" target="blank">
      &nbsp;INSTAGRAM&nbsp;
    </a>
    y
    <a href="https://www.youtube.com/channel/UCisnUFE34yH0i6vnWwQGqKw" className="yellow" target="blank">
    &nbsp;YOUTUBE&nbsp;
  </a>
  </h1>
</footer>)

Footer.propTypes = {

  timeout: PropTypes.bool
}

export default Footer
