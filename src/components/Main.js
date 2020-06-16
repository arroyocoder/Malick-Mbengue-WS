import PropTypes from 'prop-types'
import 'tachyons'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic4 from '../images/pic4.jpg'
import pic033 from '../images/pic033.jpg'
import malickCajonFlamencoTwo from '../images/malickCajonFlamencoTwo.jpg';
import VideoGalery from './VideoGalery';
import './VideoStyle.css';
import ImageGalery from './ImageGalery'

class Main extends React.Component {
  render() {
    let close = (<div className="close" onClick={() => {
        this.props.onCloseArticle()
      }}></div>)

    return (<div ref={this.props.setWrapperRef} id="main" style={this.props.timeout
        ? {
          display: 'flex'
        }
        : {
          display: 'none'
        }}>
      <article id="intro" className={`${this.props.article === 'intro'
          ? 'active'
          : ''} ${
        this.props.articleTimeout
          ? 'timeout'
          : ''}`} style={{
          display: 'none'
        }}>
        <h2 className="major">Bio</h2>
        <span className=" main">
          <img src={malickCajonFlamencoTwo} alt=""/>
        </span>
        <p className="tex-combination">
          Malick Mbengue Arroyo (30, 04, 1985) percusionista y baterista hispano-senegalés nacido en España.
        </p>

        <h3 className="major">Comienzos</h3>

        <p className="tex-combination">
          Nacido en
          <a href="https://es.wikipedia.org/wiki/C%C3%A1diz" target="blank">
            &nbsp;Cádiz&nbsp;
          </a>
          (Andalucía) en 1985, Malick crece dentro de un marco musical influenciado por la música africana y flamenca.
          <br/>
          Fue a la edad de siete años cuando el percusionista, de forma totalmente autodidacta, comenzó a experimentar con el Cajón flamenco y el Djembe africano logrando formar su primera banda
          <a href="https://www.facebook.com/Aguatap%C3%A1-281903694767/" target="blank">
            &nbsp;'Aguatapa'&nbsp;
          </a>
          a la edad de doce años,.
          <br/>
          <br/>
          Como percusionista de Cajón consolidado en su ciudad, Malick completo estudios de percusión y batería en la
          <a href="https://ucaescuelamusica.com/" target="blank">
            &nbsp;Escuela de Música Moderna de la UCA&nbsp;
          </a>
          en Cádiz, graduándose con una calificación de notable.
          <br/>
          <br/>
          Posteriormente cursó estudios superiores de música clásica y contemporánea en la
          <a href="https://conservatoriomanueldefalla.es/historia/" target="blank">
            &nbsp;Academia Nacional de Música Manuel de Falla&nbsp;
          </a>
          en Cádiz, completando los últimos años de estudio en la ciudad de Londres.
          <br/>
          <br/>
          Durante los años siguientes, Malick formó parte de una serie de bandas basadas en el jazz junto con los maestros y músicos consolidados de la escuela
          <a href="https://ucaescuelamusica.com/" target="blank">
            &nbsp;Escuela de Música Moderna&nbsp;
          </a>
          de Cadiz y como resultado de estas colaboraciones se formo la banda gaditana
          <a href="https://clasijazz.com/tumbando-a-monk-abriendo-el-thelonious/" target="blank">
            &nbsp;Tumbando a Monk&nbsp;
          </a>
          . Esta formación ha logrado transportar la música de Thelonious Monk a una estructura de jazz latino, y entre sus participantes figuran
          <a href="https://clasijazz.com/tumbando-a-monk-abriendo-el-thelonious/" target="blank">
            &nbsp;Juan Sainz&nbsp;
          </a>
          (batería),
          <a href="http://juliansanchezmusic.com/biografia/" target="blank">
            &nbsp;Julián Sánchez&nbsp;
          </a>
          (trompeta, fliscorno),
          <a href="https://clasijazz.com/tumbando-a-monk-abriendo-el-thelonious/" target="blank">
            &nbsp;Javier Galiana&nbsp;
          </a>
          (piano),
          <a href="https://javibermudez.com/" target="blank">
            &nbsp;Javier Bermúdez&nbsp;
          </a>
          (bajo),
          <a href="http://www.pedrocortejosa.com/" target="blank">
            &nbsp;Pedro Cortejosa&nbsp;
          </a>
          (saxofón) y Malick Mbengue (percusiones).
        </p>

        <h3 className="major">Carrera profesional</h3>
        <p className="tex-combination">
          En el mundo del jazz Malick ha colaborado con artistas de la talla de
          <a href="https://es.wikipedia.org/wiki/Jerry_Gonz%C3%A1lez" target="blank">
            &nbsp;Jerry González&nbsp;
          </a>
          ,
          <a href="https://www.conciertosengranada.es/artistas/manuel-perfumo-cuarteto" target="blank">
            &nbsp;Manolo Perfumo&nbsp;
          </a>,
          <a href="http://festimad.es/ediciones-anteriores/2016/programacion/ciclos/item/antonio-lizana" target="blank">
            &nbsp;Antonio Lizana&nbsp;
          </a>,
          <a href="https://clasijazz.com/enrique-oliver-special-quintet/" target="blank">
            &nbsp;Enrique Oliver&nbsp;
          </a>,
          <a href="https://en.wikipedia.org/wiki/Jorge_Rossy" target="blank">
            &nbsp;Jordy Rossy&nbsp;
          </a>,
          <a href="https://es.wikipedia.org/wiki/Chano_Dom%C3%ADnguez" target="blank">
            &nbsp;Chano Domínguez&nbsp;
          </a>,
          <a href="https://es.linkedin.com/in/miguel-angel-l%C3%B3pez-27a16141" target="blank">
            &nbsp;Miguel A. López&nbsp;
          </a>,
          <a href="http://www.apoloybaco.com/jazz/index.php?option=com_content&view=article&id=2008:alfonso-gamaza&catid=90&Itemid=256" target="blank">
            &nbsp;Alfonso Gamaza&nbsp;
          </a>,
          <a href="http://www.rizomarecords.com/tomate-trio-y-cebolla" target="blank">
            &nbsp;Jose Lopez&nbsp;
          </a>,
          <a href="http://www.nonogarcia.com/recortes.htm" target="blank">
            &nbsp;Nono Garcia&nbsp;
          </a>,
          <a href="https://www.bravissimomusica.es/equipo/alejandro-benitez/" target="blank">
            &nbsp;Alejandro Benitez&nbsp;
          </a>,
          <a href="http://carmelomuriel.com/es/biografia.html" target="blank">
            &nbsp;Carmelo Muriel&nbsp;
          </a>,
          <a href="https://celiamur.es/blog/sobre-celia-mur" target="blank">
            &nbsp;Celia Mur&nbsp;
          </a>,
          <a href="http://www.garethlockrane.com/biography.html" target="blank">
            &nbsp;Gareth Locrane&nbsp;
          </a>,
          <a href="https://es.wikipedia.org/wiki/Tito_Alcedo" target="blank">
            Tito Alcedo
          </a>, en varios clubes de jazz alrededor del mundo como el
          <a href="https://thejazzcafelondon.com/" target="blank">
            &nbsp;Jazz Café de Londres&nbsp;
          </a>
          (UK),
          <a href="https://www.ronniescotts.co.uk/" target="blank">
            &nbsp;Ronnie Scott's&nbsp;
          </a>
          (UK),
          <a href="https://lovesupremefestival.com/" target="blank">
            &nbsp;Love Supreme&nbsp;
          </a>(UK)
          <a href="https://www.salaclamores.es/" target="blank">
            &nbsp;Clamores, Jamboree&nbsp; (ES)
          </a>
          o la
          <a href="https://www.facebook.com/casaflamencaalbuquerque/" target="blank">
            &nbsp;Casa Flamenca&nbsp;
          </a>
          (Alburquerque)
          <br/>
          <br/>
          Malick ha compartido escenario dentro de una lista de artistas de música latina galardonados y reconocidos como
          <a href="https://clazz.es/que-es-clazz/artistas/alain-perez" target="blank">
            &nbsp;Alain Perez&nbsp;
          </a>,
          <a href="https://www.andaluciabigband.com/" target="blank">
            &nbsp;Andalucia& Big Band (Miguel Blanco Dir &Arr)&nbsp;
          </a>,
          <a href="http://www.elianecorrea.com/index.php/about/" target="blank">
            &nbsp;Elian Correa&nbsp;
          </a>
          <a href="http://www.movimientos.org.uk/artists-wara-london.html" target="blank">
            (Wara London)
          </a>,
          <a href="https://www.guiadecadiz.com/es/agenda/mayo/2011/octavio-kotan-alba-molina" target="blank">
            &nbsp;Octavio Kotan&nbsp;
          </a>
          <a href="https://www.youtube.com/watch?v=mzgoPfIbCvw" target="blank">
            &nbsp;(Bastinazo Habanero)&nbsp;
          </a>,
          <a href="https://es.wikipedia.org/wiki/Ska_Cubano" target="blank">
            &nbsp;Kiko Cowan&nbsp;
          </a>
          <a href="https://www.amazon.es/Rey-Crespo-Salsa-Conga-Loca/dp/B0040Y7EJC" target="blank">
            &nbsp;(Rey Crespo/Ska Cubano)&nbsp;
          </a>
          ,
          <a href="http://www.movimientos.org.uk/artists-lokandes.html" target="blank">
            &nbsp;Lokandes&nbsp;
          </a>,
          <a href="https://www.starnow.co.uk/renealvarezportuondo" target="blank">
            &nbsp;Rene Alvarez&nbsp;
          </a>
          <a href="https://www.solarlatinclub.com/rene-alvarez-y-su-cuban-combination-abriendo-los-caminos/" target="blank">
            &nbsp;(Cuban Combination)&nbsp;
          </a>,
          <a href="https://www.solarlatinclub.com/edwin-sanz-san-agustin/" target="blank">
            &nbsp;Edwin Sanz&nbsp;
          </a>,
          <a href="https://uk.linkedin.com/in/gerardo-de-armas-sarria-711423198/es-es" target="blank">
            &nbsp;Gerardo de Armas&nbsp;
          </a>, ,
          <a href="https://www.facebook.com/Juanitaeukamusic/" target="blank">
            &nbsp;Juanita Euka&nbsp;
          </a>,
          <a href="https://www.youtube.com/watch?v=zXhokSz1ufI" target="blank">
            &nbsp;El Chamito Candela&nbsp;
          </a>,
          <a href="https://capitanbombay.wixsite.com/capitanbombay/fotos-y-videos" target="blank">
            &nbsp;Capitán Bombay&nbsp;
          </a>,
          <a href="http://jacksonscottmusic.com/about/" target="blank">
            &nbsp;Jackson Scott&nbsp;
          </a>
          .
          <br/>
          <br/>
          En lo referente al el género flamenco Malick también a colaborado con artistas como
          <a href="https://www.andalucia.org/es/carmen-ledesma" target="blank">
            &nbsp;Carmen Ledezma&nbsp;
          </a>,
          <a href="https://www.ecfdavidpalomar.com/#.html" target="blank">
            &nbsp;David Palomar&nbsp;
          </a>,
          <a href="https://andaluciainformacion.es/antequera/657408/ramon-heredia-llega-a-las-plataformas-digitales/" target="blank">
            &nbsp;Ramón Heredia&nbsp;
          </a>,
          <a href="https://www.laleopower.com/" target="blank">
            &nbsp;Leo Power&nbsp;
          </a>,
          <a href="http://jesusolmedoflamenco.com/es_ES/pablo-dominguez/" target="blank">
            &nbsp;Pablo Domínguez&nbsp;
          </a>,
          <a href="https://www.danza.es/multimedia/biografias/mercedes-ruiz" target="blank">
            &nbsp;Mercedes Ruiz&nbsp;
          </a>,
          <a href="https://twitter.com/alvaroguarnido?lang=es" target="blank">
            &nbsp;Alvaro Guarnido&nbsp;
          </a>,
          <a href="https://www.facebook.com/felipe.gonzalezescanez?fref=search&__tn__=%2Cd%2CP-R&eid=ARB5l-GsXr5X_KpPTU7hi_9dfB-_Rk8fZZmRjkN1hyUabpwl4X8HUUq-9f1i6-QAKgmv53lTkSCOuDlO" target="blank">
            &nbsp;Felipe de Algeciras&nbsp;
          </a>,
          <a href="https://www.diariodecadiz.es/ocio/Raul-Obregon-musica-desaparecer-sobrevivir_0_682432256.html" target="blank">
            &nbsp;Raul Obregón&nbsp;
          </a>,
          <a href="https://www.youtube.com/watch?v=gFiMUzwRjAI" target="blank">
            &nbsp;Davile de Mane&nbsp;
          </a>,
          <a href="https://www.youtube.com/channel/UCvqU_MnweXoThDUvZTN_H-A" target="blank">
            &nbsp;Nati Palomo&nbsp;
          </a>,
          <a href="http://jesusolmedoflamenco.com/es_ES/biography/" target="blank">
            &nbsp;Jesus Olmedo&nbsp;
          </a>,
          <a href="https://www.lavozdelsur.es/yo-empece-con-los-beatles-pero-a-mi-me-gustan-las-papas-alinas-no-el-fish-and-chips/" target="blank">
            &nbsp;Ricardo Piñero&nbsp;
          </a>,
          <a href="https://www.ecured.cu/Luis_Balaguer" target="blank">
            &nbsp;Luis Balaguer&nbsp;,
          </a>
          <a href="https://es.linkedin.com/in/elena-mart%C3%ADn-la-machana-030284104" target="blank">
            &nbsp;Elena “La Machana”&nbsp;
          </a>
          entre otros.
          <br/>
          <br/>
          El Artista asistió a varias clases magistrales organizadas por percusionistas y bateristas de alto nivel como
          <a href="https://es.wikipedia.org/wiki/Giovanni_Hidalgo" target="blank">
            &nbsp;Giovanni Hidalgo&nbsp;
          </a>
          (latin),
          <a href="https://en.wikipedia.org/wiki/Samuel_Torres" target="blank">
            &nbsp;Samuel Torres&nbsp;
          </a>
          (latin),
          <a href="https://ca.wikipedia.org/wiki/Jordi_Rossy" target="blank">
            &nbsp;Jordy Rosy&nbsp;
          </a>
          (jazz),
          <a href="https://es.wikipedia.org/wiki/Horacio_Hern%C3%A1ndez" target="blank">
            &nbsp;Horacio El Negro&nbsp;
          </a>(latin),
          <a href="https://es.wikipedia.org/wiki/Stanton_Moore" target="blank">
            &nbsp;Stanton Moore&nbsp;
          </a>
          (jazz),
          <a href="https://www.allmusic.com/artist/jimmy-weinstein-mn0000129766" target="blank">
            &nbsp;Jimmy Weinstein&nbsp; (jazz )
          </a>,
          <a href="https://en.wikipedia.org/wiki/Thomas_Pridgen" target="blank">
            &nbsp;Thomas Pridgen&nbsp;
          </a>
          (batería) o
          <a href="https://en.wikipedia.org/wiki/Mamady_Ke%C3%AFta" target="blank">
            &nbsp;Mamady Keita&nbsp;
          </a>
          (afro)
          <a href="https://www.ecured.cu/Yaroldy_Abreu_Robles" target="blank">
            &nbsp;Yaroldy Abreu&nbsp;
          </a>(latin),
          <a href="http://www.aragonradio.es/podcast/tag/dreiser-durruthy-bombale" target="blank">
            &nbsp;Dreiser Durruthy&nbsp;
          </a>,
          <a href="https://en.wikipedia.org/wiki/Ernesto_Simpson" target="blank">
            &nbsp;Ernesto Simpson&nbsp;
          </a>(fusion),
          <a href="https://www.ecured.cu/Rodney_Barreto" target="blank">
            &nbsp;Rodney Barreto&nbsp;
          </a>(latin),
          <a href="https://en.javiernavasmusic.com/" target="blank">
            &nbsp;Javier Navas&nbsp;
          </a>,
          <a href="https://javibermudez.com/quien-soy/" target="blank">
            &nbsp;Javier Bermudez&nbsp;
          </a>
          , o
          <a href="https://ucaescuelamusica.com/profesores/" target="blank">
            &nbsp;Juan Sainz&nbsp;
          </a>.
          <br/>
          <br/>
          Malick ha colaborado como arreglista para artistas como
          <a href="https://www.johncervantes.co.uk/bio" target="blank">
            &nbsp;John Cervantes&nbsp;
          </a>
          <a href="https://www.royalacademy.org.uk/" target="blank">
            &nbsp;(“Royal Academy of London”)&nbsp;
          </a>
          en su disco de flamenco jazz
          <a href="https://open.spotify.com/album/6Qmx8wB3lSR8pjqmEtaFr0" target="blank">
            &nbsp;“Crossing The Threshold”&nbsp;
          </a>
          , en la producción del disco de la hispano-neoyorkina
          <a href="https://www.reverbnation.com/artist/video/12285377" target="blank">
            &nbsp;Claudia Valentina&nbsp;
          </a>, o en los trabajos de
          <a href="https://www.guillermorayo.com/bio/" target="blank">
            &nbsp;Guillermo Rayo&nbsp;
          </a>,
          <a href="https://www.youtube.com/watch?v=devV3Y6cmTA" target="blank">
            &nbsp;Ivan Camelo&nbsp;
          </a>,
          <a href="http://www.mistergroovyandtheblueheads.com/la-banda/" target="blank">
            &nbsp;Mrs Groovy and the Blue Heads&nbsp;
          </a>,
          <a href="https://fanmusicfest.com/content/carlinga-y-la-microband" target="blank">
            &nbsp;Carlinga Microband&nbsp;
          </a>y
          <a href="https://www.facebook.com/MariaLaMonicaOficial/" target="blank">
            &nbsp;Maria “La Mónica”&nbsp;
          </a>
          entre otros.
          <br/>
          <br/>
          En su travesía musical pasó por otros muchos géneros como batukadas
          <a href="https://www.facebook.com/pages/category/Musician-Band/Samba-Wamba-418833698179436/" target="blank">
            &nbsp;“Samba Wamba”&nbsp;
          </a>
          y bandas populares como
          <a href="https://www.youtube.com/channel/UCERUNlRvEABWYIewn3VJ4gw" target="blank">
            &nbsp;“El Simpático Gorrión”&nbsp;
          </a>,
          <a href="https://www.facebook.com/Villanson-428118977984260/" target="blank">
            &nbsp;“Villansón”&nbsp;
          </a>,
          <a href="https://www.labandamorisca.com/la-banda/" target="blank">
            &nbsp;“La Banda Morisca”&nbsp;
          </a>,
          <a href="http://www.tundejegede.org/tunde-renu-duo/" target="blank">
            &nbsp;Renu Hossain (Indian Proyect)&nbsp;
          </a>
          y
          <a href="http://elperiodicodechiclana.com/claudia-la-chispa/" target="blank">
            &nbsp;Claudia “La Chispa”&nbsp;
          </a>.
          <br/>
          <br/>
          Sus últimos y mas actuales proyectos incluyen una gira por U.S.A en 2019 con el proyecto personal de
          <a href="https://guitarraespañola.net/juani-de-la-isla/" target="blank">
            &nbsp;Juani de la Isla&nbsp;
          </a>, unos de los grandes guitarristas flamencos españoles. Adicionalmente Malick se encuentra bajo la producción de el primer disco de su nueva formacion
          <a href="https://www.facebook.com/Africaiband/" target="blank">
            &nbsp;“Africai”&nbsp;
          </a>, una banda logra fusionar elementos del jazz, la música africana y el flamenco.

        </p>
        {close}
      </article>

      <article id="work" className={`${this.props.article === 'work'
          ? 'active'
          : ''} ${
        this.props.articleTimeout
          ? 'timeout'
          : ''}`} style={{
          display: 'none'
        }}>
        <h2 className="tc">John Cervantes sextet</h2>
        <p className="tex-combination tc">
          Conducida por una sección de ritmo electrificante formada por batería, cajón y baile flamenco, la banda visita los temas jazzisticos originales del pianista
          <a href="https://www.johncervantes.co.uk/bio" target="blank">
            &nbsp;Jonh Cervanes&nbsp;</a>
          desde una fusión flamenca y latina, acompañados por la improvisación del flautista
          <a href="http://www.garethlockrane.com/biography.html" target="blank">
            &nbsp;Gareth Lockrane&nbsp;
          </a>
          entre otros. La banda a conseguido el “sold out” de sus actuaciones entre audiencias como las de
          <a href="https://efglondonjazzfestival.org.uk/events/john-cervantes" target="blank">
            &nbsp;London Jazz Festival&nbsp;
          </a>,
          <a href="https://lovesupremefestival.com/" target="blank">
            &nbsp;Love Supreme Festival&nbsp;
          </a>, como también salas de referentes del jazz como
          <a href="http://www.vortexjazz.co.uk/" target="blank">
            &nbsp;The Vortex&nbsp;
          </a>y<a href="https://www.pizzaexpresslive.com/venues/soho-jazz-club" target="blank">&nbsp;Pizza Express Jazz Club Soho.&nbsp;</a>

          <a href="http://www.garethlockrane.com/biography.html" target="blank">
            &nbsp;Gareth Lockrane&nbsp;
          </a>
          (flutes);
          <a href="https://www.johncervantes.co.uk/bio" target="blank">
            &nbsp;John Cervantes&nbsp;
          </a>
          (piano);
          <a href="https://www.sandysuchodolski.co.uk/" target="blank">
            &nbsp;Sandy Suchodolski&nbsp;
          </a>
          (double bass);
          <a href="http://www.jondesbruslais.com/" target="blank">
            &nbsp;Jon Desbruslais&nbsp;
          </a>
          (drum kit);
          <a href="http://malickmbengue.com" target="blank">
            &nbsp;Malick Mbengue&nbsp;
          </a>
          (cajón, percusión).
        </p>

        <div className="grow box">
          <div className="iframe-hide">

            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/8p7VL_VEoxc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
          </div>
        </div>

        <h2 className="tc">Africai</h2>
        <p className="tex-combination tc">AFRICAI, es un proyecto donde músicos de Gambia y Cádiz unen sus inquietudes musicales y se produce lo que se podria llamar AFROFLAMENCO.
          <br/>
          Este proyecto es iniciado por:
          <br/>
          <a href="https://www.facebook.com/laleopower/" target="blank">
            &nbsp;Leo Power&nbsp;
          </a>, cantaora de Cádiz inmersa en otras músicas del mundo.
          <br/>
          <a href="" target="blank">
            &nbsp;Sura Susso griot&nbsp;
          </a>
          , cantante, korista, percusionista y compositor de Gambia.
          <br/>
          <a href="" target="blank">
            &nbsp;Pablo Dominguez&nbsp;
          </a>, percusionista, guitarrista y bajista de Cádiz.
          <br/>
          <a href="" target="blank">
            &nbsp;Malick Mbengue&nbsp;
          </a>
          , percusionista nacido en Cádiz de descendencia parental de Senegal.

        </p>
        <div className="grow box">

          <div className="iframe-hide">

            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/rOamjTaH3X0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

          </div>

        </div>

        <h2 className="tc">Tumbando a Monk</h2>
        <p className="tex-combination tc">Tumbando a Monk es un sexteto de latin-jazz formado en
          <a href="https://es.wikipedia.org/wiki/C%C3%A1diz" target="blank">
            &nbsp;Cádiz&nbsp;
          </a>
          que muestra gratitud, respeto y admiración hacia uno de los personajes más influyentes y estrambóticos de la historia del jazz:
          <a href="https://es.wikipedia.org/wiki/Thelonious_Monk" target="blank">
            &nbsp;Thelonious Monk&nbsp;
          </a>. Para ello se sirve de temas originales y de algunas de sus composiciones para transmitir el espíritu de este insigne pianista, empleando para ello ese peculiar sentido rítmico en las melodías y esas armonizaciones disonantes y sofisticadas tan características que impregnan todos sus temas.
          <br/>
          <a href="http://juliansanchezmusic.com/galeria/" target="blank">&nbsp;Julián Sánchez</a>: Trompeta, fliscornio y percusiones menores.
          <a href="https://www.javiergaliana.es/#page1" target="blank">

            &nbsp;Javier Galiana&nbsp;</a>: Piano.
          <a href="http://malickmbengue.com" target="blank">
            &nbsp;Malick Mbengue&nbsp;
          </a>: Congas y cajón.
          <a href="https://jambabrassband.com/miembros/bio/javier-bermudez/" target="blank">
            &nbsp;Javier Bermúdez&nbsp;
          </a>: Bajo eléctrico.
          <a href="https://clasijazz.com/tumbando-a-monk-abriendo-el-thelonious/" target="blank">
            &nbsp;Juan Sainz&nbsp;
          </a>: Batería.
          <a href="http://www.pedrocortejosa.com/" target="blank">
            &nbsp;Pedro Cortejosa&nbsp;</a>: Saxo tenor y percusiones menores.
        </p>
        <div className="grow box">
          <div className="iframe-hide">

            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_Mz_MpIxHHI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

          </div>
        </div>

        <h2 className="tc">Casa Flamenca Alburquerque</h2>
        <p className="tex-combination tc">Uno de los grandes guitarristas andaluces de nuestro tiempo
          <a href="https://guitarraespañola.net/juani-de-la-isla/" target="blank">
            &nbsp;Juani de la Isla&nbsp;
          </a>, dentro del ciclo
          <a href="https://guitarraespañola.net/juani-de-la-isla/" target="blank">
            &nbsp;Domingos en Artes&nbsp;
          </a>
          del
          <a href="http://www.nhccnm.org/" target="blank">
            &nbsp;National Hispanic Culture Centre (University of New Mexico)&nbsp;
          </a>
          , presenta este quinteto junto a una banda compuesta por el pianista puerto riqueno
          <a href="https://www.marianomoralesmusic.com/" target="blank">
            &nbsp;Mariano Morales (Ricky Martin, Marc Anthony)&nbsp;
          </a>, trombonista americano
          <a href="https://trombonistmjhood.wixsite.com/micahhoodmusic" target="blank">
            &nbsp;Micah J. Hood&nbsp;
          </a>
          <a href="https://www.baracutanga.com/" target="blank">
            &nbsp;(Baracutanga)&nbsp;
          </a>,
          <a href="https://jambabrassband.com/miembros/bio/javier-bermudez/" target="blank">
            &nbsp;Valeria F. Montes&nbsp;
          </a>
          <a href="https://www.casaflamenca.org/our-instructors/" target="blank">
            (coordinadora Programa Casa Clamenca)
          </a>, el caotaor gaditano
          <a href="http://tridimensional.com/events/alejandro-silva/" target="blank">
            &nbsp;Alejandro Silva&nbsp;
          </a>
          y el percusionista gaditano/senegalés
          <a href="http://malickmbengue.com" target="blank">
            &nbsp;Malick Mbengue&nbsp;
          </a>
          <br/>
          Gira realizada en 2019 en el Suroeste de U.S.A.
        </p>
        <div className="grow box">

          <div className="iframe-hide">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/4yrsRS0s9r8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
          </div>
        </div>

        <h2 className="tc">Cadiz Vibra</h2>
        <p className="tex-combination tc">Trio de flamenco fusión compuesto por la cantaora de flamenco
          <a href="http://malickmbengue.com" target="blank">
            &nbsp;Leo Power
          </a>
          , el guitarrista portuense
          <a href="http://malickmbengue.com" target="blank">
            &nbsp;Pablo Dominguez&nbsp;
          </a>
          y
          <a href="http://malickmbengue.com" target="blank">
            &nbsp;Malick Mbengue&nbsp;
          </a>
          a la percusión.
          <br/>
          La formación experimenta con la música de
          <a href="https://es.wikipedia.org/wiki/Cantes_de_ida_y_vuelta" target="blank">
            &nbsp;ida y vuelta&nbsp;
          </a>
          pasando por géneros de la música contemporánea como el jazz, el flamenco y el latin</p>
        <div className="grow box">

          <div className="iframe-hide">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/3WKw0QdJ-AI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
          </div>
        </div>

        <h2 className="tc">Villanson</h2>
        <p className="tex-combination tc">Villansón es una banda que fusiona ritmos latinos con el compas de Cádiz y el sur de España tocando versiones de temas que seguramente te sonaran pero con un estilo propio. Villansón asegura fiesta, baile y diversión, al mismo tiempo que ofrece una experiencia musical diferente.
          <br/>
          <a href="" target="blank">
            &nbsp;Chema Quirós&nbsp;
          </a>, (voz)
          <a href="" target="blank">
            &nbsp;Francisco Javier Mera "Ktumba"&nbsp;
          </a>, (timbal)
          <a href="" target="blank">
            &nbsp;Servando Leira Quirós&nbsp;
          </a>, (cantante)
          <a href="" target="blank">
            &nbsp;Malick Mbengue&nbsp;
          </a>, (congas)
          <a href="" target="blank">
            &nbsp;Jaime Andres Monzón "Chamito"&nbsp;
          </a>, (bajo, coros)
          <a href="" target="blank">
            &nbsp;Yasser Herrera Martínez&nbsp;
          </a>
          (pianista/director musical).
        </p>
        <div className="grow box">
          <div className="iframe-hide">

            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/CtdNCJ1Mf6s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
          </div>
        </div>

        <h2 className="tc">
          &nbsp;Pol Omedes 5tet&nbsp;
        </h2>
        <p className="tex-combination tc">
          <a href="http://polomedes.com/" target="blank">
            &nbsp;Pol Omedes&nbsp;
          </a>(trompeta),
          <a href="https://josecarra.com/" target="blank">
            &nbsp;Jose Carra&nbsp;
          </a>
          (piano)<a href="http://www.rizomarecords.com/tumbando-a-monk" target="blank">
            &nbsp;Malick Mbengue&nbsp;
          </a>
          (congas)
          <a href="http://ainsua-fotografia.com/2018/07/blanca-barranco-group-en-el-concurso-de-grupos-del-porton-del-jazz/" target="blank">
            &nbsp;Blanca Barranco&nbsp;
          </a>
          (contrabajo)
          <a href="https://quientocaque.com/directorio-de-bateristas/artistas/sergio-diaz/" target="blank">
            &nbsp;Sergio Díaz&nbsp;
          </a>
          (batería). De entre los músicos más sorprendentes e inquietos de la nueva generación, el trompetista y compositor
          <a href="http://polomedes.com/" target="blank">
            &nbsp;Pol Omedes&nbsp;
          </a>
          es una de las revelaciones más estimulantes de la escena estatal. Lo ha dejado patente con la multitud de proyectos de recorrido que ha liderado y que encabeza actualmente, gracias también a la buena acogida de la prensa y del sector. Entre los últimos reconocimientos hay que destacar el de joven talento del año (2020), concedido por la
          <a href="https://amjm.org/es/" target="blank">
            &nbsp;Asociación de Músicos de Jazz y Música Moderna de Cataluña (AMJM)&nbsp;
          </a>.&nbsp;Actualmente se está presentando su último trabajo
          <a href="https://www.jazzterrassa.org/en/node/41351" target="blank">
            &nbsp;“Bon Viatge” (The Changes, 2019)&nbsp;
          </a>
          y el proyecto ha sido también seleccionado por la
          <a href="http://federacio.joventutsmusicals.cat/" target="blank">
            &nbsp;Federación de &nbsp;Juventudes Musicales de Cataluña
          </a>
          durante la temporada 2018 a 2019. La música de Pol tiene pinceladas cubanas conjuntamente con una sonoridad post bop, con un un aire fresco, potente y dinámico. La banda asimila la tradición del jazz sin que ello suponga un prejuicio para dar una visión personal y concreta de los standards, y se abre también a las composiciones propias.
        </p>
        <div className="grow box">
          <div className="iframe-hide">

            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/k4z8lfE1TQc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
          </div>
        </div>

        {close}
      </article>

      <article id="about" className={`${this.props.article === 'about'
          ? 'active'
          : ''} ${
        this.props.articleTimeout
          ? 'timeout'
          : ''}`} style={{
          display: 'none'
        }}>
        <h2 className="major">IMAGENES</h2>
        <ImageGalery/> {close}
      </article>

      <article id="contact" className={`${this.props.article === 'contact'
          ? 'active'
          : ''} ${
        this.props.articleTimeout
          ? 'timeout'
          : ''}`} style={{
          display: 'none'
        }}>
        <h2 className="major">Contacto</h2>
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" id="name"/>
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email"/>
          </div>
          <div className="field">
            <label htmlFor="message">Mensaje</label>
            <textarea name="message" id="message" rows="4" value="Opps, este formulario no esta disponible todavía. Puedes enviarme un mensaje directamente a malickpercu@hotmail.es o a través de mis redes sociales en los links aquí abajo." disabled></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Enviar" className="special"/>
            </li>
            <li>
              <input type="reset" value="Reiniciar"/>
            </li>
          </ul>
        </form>
        <ul className="icons">
          <li>
            <a href="https://www.youtube.com/channel/UCisnUFE34yH0i6vnWwQGqKw" className="icon fa-youtube" target="blank">
              <span className="label">facebook</span>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCisnUFE34yH0i6vnWwQGqKw" className="icon fa-facebook" target="blank">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/malickmbenguearroyo/?hl=es" className="icon fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>

        </ul>
        {close}
      </article>

    </div>)
  }
}
Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired
}

export default Main
