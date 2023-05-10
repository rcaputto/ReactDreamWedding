import "../public/css/CardsApp.css";
import { v4 as uuidv4 } from "uuid";
import Card from "./Cards";
import Carousel from "./CarouselII";
import imageCarrousel1 from '../public/images/random/TDW-55.jpg';
import imageCarrousel2 from '../public/images/random/TDW-60.jpg';
import imageCarrousel3 from '../public/images/random/TDW-69.jpg';
import imageCarrousel4 from '../public/images/random/WP.jpg';

function CardsApp() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen={imageCarrousel1} />
      ),
      text: 'HOLA'
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={imageCarrousel1} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={imageCarrousel3} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={imageCarrousel1}  />
        
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={imageCarrousel4} />
      )
    }
  ];
  return (
    <div className="">
      <Carousel
        cards={cards}
        height="500px"
        width="30%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}

export default CardsApp;
