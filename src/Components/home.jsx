import react from 'react';
import logo from '../public/images/logo.png';
import imageCarrousel1 from '../public/images/random/pexels-agung-pandit-wiguna-2970287.jpg';
import imageCarrousel2 from '../public/images/random/pexels-danielle-reese-2496344.jpg';
import imageCarrousel3 from '../public/images/random/pexels-dmitry-zvolskiy-1676123.jpg';
import imageCarrousel4 from '../public/images/random/pexels-emir-kaan-okutan-2403568.jpg';
import '../public/css/home.css'
import backgroundI from '../public/images/pexels-asad-photo-maldives-1024993.jpg'
function Home (){
    return(
        <>
        <body>
        <div/>
        <div className="top">
        <div className="logotipo">
        <img src={logo} className="logo"  alt="logo"/>
        
          <nav>
          
          
          <div className="hamburger">
            <span className="lines"></span>
            <span className="lines"></span>
            <span className="lines"></span>
          </div>
          
          
          <ul id="nav-links">
            <li><a href="#" className="links">Inicio</a></li>
            <li><a href="#" className="links">Galeria</a></li>
            <li><a href="#servicios" className="links">Servicios</a></li>
            <li><a href="#" className="links">Nosotras</a></li>
            <li><a href="#" className="links">Blog</a></li>
            <li><a href="#" className="links">Contacto</a></li>
            <div className="linea"></div>
          </ul>
          </nav>
          </div>
          </div>
      
         
        
        <h1 className="slogan">
          Tu boda, tu estilo, nuestra pasión!
        </h1>
        <h2 className="sloganCopy">
          Creamos experiencias que duran toda la vida. <br/> 
          Sin estrés ni preocupaciones...
        </h2>
        
      
          <br/>
      
      
      <h1 className="carrouselTitle" id="servicios">Creamos momentos inolvidables</h1>
      <div className="carrouselImg">
        <article className="carrousel">
          <img src={imageCarrousel1} alt="1"/>
          <img src={imageCarrousel2} alt="2"/>
          <img src={imageCarrousel3} alt="3"/>
          <img src={imageCarrousel4} alt="4"/>
        </article>
      </div>
      </body>
      </>
    )
}

export default Home