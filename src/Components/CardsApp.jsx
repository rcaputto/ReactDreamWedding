import "../public/css/CardsApp.css";
import { v4 as uuidv4 } from "uuid";
import Card from "./Cards";
import Carousel from "./CarouselII";
import weddingAllTerrain from '../public/images/png/4x4wedding.png';
import alianza from '../public/images/png/alianza.png';
import bodasDeDestino from '../public/images/png/bodasDeDestino.png';
import MicroTuning from '../public/images/png/Microtuning.png';


function CardsApp() {



  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen = {weddingAllTerrain} titulo= '4X4 Wedding' texto='Este servicio te lo incluye todo, si lo que buscas es disfrutar del proceso, te lo recomendamos… .
        Creamos el proyecto íntegro de la boda, gestionamos presupuesto, proveedores, diseño, decoración, papelería personalizada y coordinamos el Día B.
        '  />)
        },
    {
      key: uuidv4(),
      content: (
        <Card imagen={alianza} titulo ='Race Day' texto='Es lo que necesitas para disfrutar de tu boda y no preocuparte por nada.
        Realizamos timing de la boda, visita técnica al espacio de la celebración, seguimiento de proveedores, montaje de puntos de decoración, creamos grupo de Whatsapp para centralizar la información y asistimos como mínimo dos coordinadoras para acompañarlos ese día.
        ' />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={bodasDeDestino} titulo ='Tuning 2.0' texto='En base a tus ideas, elaboramos una propuesta de diseño a medida donde exista un hilo conductor único a lo largo de toda la boda, diseñamos la papelería y personalizamos cada detalle al máximo.' />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={MicroTuning} titulo ='MicroTuning' texto='Estas necesitando un montaje fotográfico, un photocall ,una puesta en escena para capturar un momento mágico? … Nosotras podemos ayudarte!' />
      )
    }
  ];
  return (
    <div className="">
      <Carousel
        cards={cards}
        height="400px"
        width="40%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}

export default CardsApp;
