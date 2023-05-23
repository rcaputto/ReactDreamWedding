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
              <li><Link to="#" className="links">INICIO</Link></li>
              <li><Link to="#" className="links">GALERIA</Link></li>
              <li> <a href='#linkService'> SERVICIOS</a></li>
              <li><Link to="#us" className="links">NOSOTRAS</Link></li>
              <li><Link to="#" className="links">BLOG</Link></li>
              <li><Link to="#" className="links">CONTACTO</Link></li>
              <div className="linea"></div>
            </ul>
          </nav>
        </div>
      </div>

    )
}

export default Navbar