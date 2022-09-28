// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../../styles/card.css";
import { isEmpty } from "../Utils";
import { getProduct} from "../../actions/productAction"

const Card = ({ product }) => {
  const [isLoading, setIsLoading] = useState(true);
  const productsData = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch()

  useEffect(() => {
    !isEmpty(productsData[0]) && setIsLoading(false);
  }, [productsData]);

  const handleProduct = () => {
    const id = product._id
    dispatch(getProduct(id))
  }

  // const addCart = () => {
  //   // console.log(product)

  //   let productsArray = localStorage.getItem("products");
  //   // console.table(productsArray)

  //   if (productsArray == null) {
  //     productsArray = [];
  //     productsArray.push(product);
  //     console.table(productsArray);
  //     localStorage.setItem("products", JSON.stringify(productsArray));
  //     // console.log(productsArray[0]._id)

  //     alert("Ajout au panier réussi");
  //   }
  //   else if (productsArray != null){
  //     localStorage.getItem("products", JSON.parse(productsArray));
  //     console.table(productsArray);

  //     for (let index = 0; index < productsArray.length; index++) {
  //       if (productsArray[index]._id !== product._id) {
  //         console.log(productsArray[index]._id, product._id)
  //         return (
  //           productsArray = JSON.parse(localStorage.getItem("products")),
  //           productsArray.push(product),
  //           localStorage.setItem("products", JSON.stringify(productsArray))
  //         )
  //       }

  //     }
  //     console.log(productsArray);
  //     console.log("test")
  //   }
  // };

  return (
    <div className="card-container" key={product._id}>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <NavLink to={"/product"} onClick={handleProduct}>
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
