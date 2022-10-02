import React from "react";
import { useSelector } from "react-redux";

const AddCart = () => {
  const product = useSelector((state) => state.productReducer);

  const nb = document.getElementById("nb");

  const addCartProduct = () => {
    let productsArray = localStorage.getItem("products");

    if (productsArray == null) {
      productsArray = [];
      productsArray.push(product);
      console.log(productsArray);
      localStorage.setItem("products", JSON.stringify(productsArray));
      alert("Ajout au panier réussi");
    } else if (productsArray != null) {
      productsArray = JSON.parse(localStorage.getItem("products"));

      for (let index = 0; index < productsArray.length; index++) {
        console.log(productsArray.length);
        console.log(index);
        if (productsArray[index]._id === product._id) {
          return (
            console.log(productsArray[index]._id, product._id),
            alert("Vous avez déjà ajouté cet article au panier")
          );
        }
      }

      for (let index = 0; index < productsArray.length; index++) {
        productsArray = JSON.parse(localStorage.getItem("products"));

        if (productsArray[index]._id !== product._id) {
          return (
            productsArray.push(product),
            localStorage.setItem("products", JSON.stringify(productsArray)),
            (productsArray = JSON.parse(localStorage.getItem("products"))),
            (nb.innerHTML = productsArray.length),
            alert("Ajout au panier réussi")
          );
        }
      }
    }
  };

  return (
    <i
      className="fa-solid fa-cart-plus btn-profil"
      onClick={addCartProduct}
    ></i>
  );
};

export default AddCart;
