import React from "react";
import { useSelector } from "react-redux";
import "../styles/productPage.css";

const Product = () => {
    
  const product = useSelector((state) => state.productReducer);



  const addCart = () => {
      console.log(product)
  
      let productsArray = localStorage.getItem("products");
      // console.table(productsArray)
  
      if (productsArray == null) {
        productsArray = [];
        productsArray.push(product);
        console.table(productsArray);
        localStorage.setItem("products", JSON.stringify(productsArray));
        // console.log(productsArray[0]._id)
  
        alert("Ajout au panier réussi");
      }
      else if (productsArray != null){
        localStorage.getItem("products", JSON.parse(productsArray));
        // productsArray = JSON.parse(localStorage.getItem("products"))
        console.table(productsArray);
  
        for (let index = 0; index < productsArray.length; index++) {
          if (productsArray[index]._id !== product._id) {
            console.log(productsArray[index]._id, product._id)
            return (
              productsArray = JSON.parse(localStorage.getItem("products")),
              productsArray.push(product),
              localStorage.setItem("products", JSON.stringify(productsArray))
            )
          }
  
        }
        console.log(productsArray);
        console.log("test")
      }
    };
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
            <i className="fa-solid fa-cart-plus btn-profil" onClick={addCart}></i>
        </div>
        <div className="description">{product.description}</div>
      </div>
    </div>
  );
};

export default Product;
