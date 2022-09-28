import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../styles/carousel.css";

const Slider = () => {
  return (
    <Carousel interval={4000}>
      <div className="img-caroussel ">
        <img src="bijoux.png" alt="categorie bijoux"/>
        <p>Bijoux bois et résine</p>
      </div>
      <div className="img-caroussel ">
        <img src="bracelet.png" alt="categorie bracelet en pierre"/>
        <p>Bracelet pierre</p >
      </div>
      <div className="img-caroussel ">
        <img src="encens.png" alt="categorie divers"/>
        <p>Divers</p >
      </div>
    </Carousel>
  );
};

export default Slider;
