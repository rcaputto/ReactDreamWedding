

import '../public/css/home.css';
import CarouselWeb from './CarouselWeb'


function Home() {
  return (
    <>
      <body>
        <div className='homeImage' />
    
        <h1 className="slogan">
          Tu boda, tu estilo, nuestra pasión!
        </h1>
        
      
    <br />
    </body>
    <span id='linkService' style={{  marginTop: "60rem" }}></span>
    <h1 className="service" >Nuestros servicios</h1>
    <h2 className="sloganCopy">
          Creamos experiencias que duran toda la vida. <br />
          Sin estrés ni preocupaciones...
        </h2>
        <article className='carouselCard'>
    <CarouselWeb/>
    </article>
      
    </>
  )
}

export default Home