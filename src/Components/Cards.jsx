import Styles from "../public/css/Card.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";




function Cards( props) {
  const [show, setShown] = useState(false);
  

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  
  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
      
    >
    <img src={props.imagen} alt=""/>
      <h2>{props.titulo}</h2>
      <p>{props.texto}</p>
      <p><Link to = {props.link}> Más información </Link></p>
      
    </animated.div>
  );
}

export default Cards;
