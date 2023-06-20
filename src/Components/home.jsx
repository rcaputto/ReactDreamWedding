

import '../public/css/home.css';
import CardsApp from './CardsApp';
import MainImage from './MainImage';
import Navbar from './navBar';
import Nosotras from './nosotras';



function Home() {
  return (
    <>
    <Navbar/>
      <body>
        <div className='homeImage' />
      <MainImage/>
        <h1 className="slogan">
        “Es tu boda, tu la soñaste…. Nosotras te ayudamos a lograrlo.”
        </h1>
      <br />
    </body>
    <span id='us'></span>
    <Nosotras/>
    
    <span id='linkService' style={{  marginTop: "60rem" }}></span>
    <h1 className="service" >Nuestros servicios</h1>
    <h2 className="sloganCopy">
    “En nuestro punto de partida es esencial la conexión, la empatìa, conocernos y escucharnos.”
        </h2>
        <article className='carouselCard'>
    <CardsApp/>
    
    <br/>
    </article>
      <div className='break'/>
    </>
  )
}

export default Home