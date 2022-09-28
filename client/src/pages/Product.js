import React from "react";
import { useSelector } from "react-redux";
import "../styles/productPage.css";

const Product = () => {
    
  const product = useSelector((state) => state.productReducer);
  //   console.log(product);
  return (
    <div className=" product">
      <div className="card-Oneproduct">
          <img src={product.imageUrl} alt="img-card" className="img-Oneproduct" />
        <div className="flex-product">
          <div className="info-product">
            <h3>{product.name}</h3>
            <p className="price-product">{product.price}€</p>
          </div>
            <i className="fa-solid fa-cart-plus btn-profil" ></i>
        </div>
        <div className="description">{product.description}</div>
      </div>
    </div>
  );
};

export default Product;
