import React from "react";

const Galerie = () => {
  return (
    <div className="galerie-container">
      <div className="photo top" id="photo1">
        <img src="bijoux.png" alt="categorie bijoux" />
      </div>
      <div className="photo bottom" id="photo2">
        <img src="bracelet.png" alt="categorie bijoux" />
      </div>
      <div className="photo top" id="photo3">
        <img src="encens.png" alt="categorie bijoux" />
      </div>
      <div className="photo bottom" id="photo4">
        <img src="bijoux.png" alt="categorie bijoux" />
      </div>
    </div>
  );
};

export default Galerie;
