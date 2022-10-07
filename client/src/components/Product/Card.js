// import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../../styles/card.css";
import { isEmpty } from "../Utils";


const Card = ({ product }) => {
  const [isLoading, setIsLoading] = useState(true);
  const productsData = useSelector((state) => state.productsReducer);

  useEffect(() => {
    !isEmpty(productsData[0]) && setIsLoading(false);
  }, [productsData]);

  return (
    <div className="card-container" key={product._id}>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <NavLink to={"/product/" + product._id}>
          <div className="card-product">
            <img
              src={product.imageUrl}
              alt="img-card"
              className="img-product"
            />
            <h3>{product.name}</h3>
            <p className="price">{product.price}€</p>
          </div>
        </NavLink>
      )}
    </div>
  );
};

export default Card;
