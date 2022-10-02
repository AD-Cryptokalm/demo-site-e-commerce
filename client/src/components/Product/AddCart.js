import React from "react";
import { useSelector } from "react-redux";

const AddCart = () => {
  const product = useSelector((state) => state.productReducer);
  console.log(product);

  const addCartProduct = () => {
    let productsArray = localStorage.getItem("products");

    if (productsArray == null) {
      productsArray = [];
      productsArray.push(product);
      console.log(productsArray);
      localStorage.setItem("products", JSON.stringify(productsArray));
      alert("Ajout au panier réussi");
    } else if (productsArray != null) {
      // localStorage.getItem("products", JSON.parse(productsArray));
      productsArray = JSON.parse(localStorage.getItem("products"));
      //   console.log(productsArray.length);

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
            (productsArray = JSON.parse(localStorage.getItem("products")))
          );
        }
        //   } else {
        //     console.log(productsArray[index]._id, product._id);
        //     alert("Vous avez déjà ajouté cet article au panier");

        //   }
      }

      // console.log(productsArray);
      // console.log("test")
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
