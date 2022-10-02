import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../actions/productAction";
import AddCart from "../components/Product/AddCart";
import "../styles/productPage.css";

const ProductPage = () => {
  const [loadProduct, setLoadProduct] = useState(true)
  const productUrl = window.location.pathname.split("/product/");
  const productId = productUrl[1];
  const dispatch = useDispatch();
  // console.log(productId);
  const product = useSelector((state) => state.productReducer);
  
  useEffect(() => {
    if (loadProduct) {
      dispatch(getProduct(productId));
      setLoadProduct(false)
    }
  }, [loadProduct, productId, dispatch])
  // axios({
  //   method: "GET",
  //   url: `http://localhost:3000/api/product/${productId}`,
    
  // })
  //   .then((res) => {
  //     return (
  //       setProduct(res.data),
  //       console.log(product)

  //     )
  //   })

  //   .catch((err) => {
  //     return console.log(err);
  //   })
  //   ;

  // const addCart = () => {
  //   // console.log(productData);

  //   let productsArray = localStorage.getItem("products");
  //   // console.table(productsArray)

  //   if (productsArray == null) {
  //     productsArray = [];
  //     productsArray.push(product);
  //     console.table(productsArray);
  //     localStorage.setItem("products", JSON.stringify(productsArray));
  //     // console.log(productsArray[0]._id)

  //     alert("Ajout au panier réussi");
  //   } else if (productsArray != null) {
  //     // localStorage.getItem("products", JSON.parse(productsArray));
  //     productsArray = JSON.parse(localStorage.getItem("products"));
  //     console.log(productsArray.length);

  //     for (let index = 0; index < productsArray.length; index++) {
  //       if (productsArray[index]._id !== product._id) {
  //         return (
  //           (productsArray = JSON.parse(localStorage.getItem("products"))),
  //           productsArray.push(product),
  //           localStorage.setItem("products", JSON.stringify(productsArray))
  //         );
  //       } else {
  //         console.log(productsArray[index]._id, product._id);
  //         alert("Vous avez déjà ajouté cet article au panier");
  //       }
  //     }
  //     // console.log(productsArray);
  //     // console.log("test")
  //   }
  // };
  // console.log(product)
  return (
    <div className=" product">
       

        <div className="card-Oneproduct">
          <img
            src={product.imageUrl}
            alt="img-card"
            className="img-Oneproduct"
          />
          <div className="flex-product">
            <div className="info-product">
              <h3>{product.name}</h3>
              <p className="price-product">{product.price}€</p>
            </div>
            <AddCart/>
          </div>
          <div className="description">{product.description}</div>
        </div>
      
      
    </div>
  );
};

export default ProductPage;
