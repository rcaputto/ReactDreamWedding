import logo from '../public/images/logo.png';
import { Link } from 'react-router-dom';


function Navbar(){
    return (
        <div className="top">
        <div className="logotipo">
          <img src={logo} className="logo" alt="logo" />

          <nav>
            <div className="hamburger">
              <span className="lines"></span>
              <span className="lines"></span>
              <span className="lines"></span>
            </div>


            <ul id="nav-links">
              <li><Link to="#" className="links">Inicio</Link></li>
              <li><Link to="#" className="links">Galeria</Link></li>
              <li> <a href='#linkService'> Servicios</a></li>
              <li><Link to="#" className="links">Nosotras</Link></li>
              <li><Link to="#" className="links">Blog</Link></li>
              <li><Link to="#" className="links">Contacto</Link></li>
              <div className="linea"></div>
            </ul>
          </nav>
        </div>
      </div>

    )
}

export default Navbar