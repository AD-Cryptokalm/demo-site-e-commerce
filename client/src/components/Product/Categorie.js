import React from "react";

const Categorie = () => {
  return (
    <div className="cat-container">
      
      <div className="wrapper">
        <div className="appear" id="cat1">
          <a href="bijoux" className="">
            Bijoux bois et résine
          </a>
        </div>
      </div>
      <div className="wrapper">
        <div className="appear" id="cat2">
          <a href="bracelet-pierre" className="">
            Bracelet en pierre
          </a>
        </div>
      </div>
      <div className="wrapper">
        <div className="appear" id="cat3">
          <a href="divers" className="">
            Divers
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categorie;
