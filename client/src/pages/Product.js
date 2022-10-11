import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProduct } from "../actions/productAction";
import AddCart from "../components/Product/AddCart";
import "../styles/productPage.css";

const ProductPage = () => {
  const navigate = useNavigate()
  const [loadProduct, setLoadProduct] = useState(true);
  const productUrl = window.location.pathname.split("/product/");
  const productId = productUrl[1];
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer);

  useEffect(() => {
    if (loadProduct) {
      dispatch(getProduct(productId));
      setLoadProduct(false);
    }
  }, [loadProduct, productId, dispatch]);

  return (
    <div className=" product">
      <div className="card-Oneproduct">
        <img src={product.imageUrl} alt="img-card" className="img-Oneproduct" />
        <div className="flex-product">
          <div className="info-product">
            <h3>{product.name}</h3>
            <p className="price-product">{product.price}€</p>
          </div>
          
          <i onClick={() => navigate(-1)} id="back" className="fa-solid fa-left-long icon-back btn-profil"></i>
            <AddCart />
          
        </div>
        <div className="description">
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
          {product.description}
          </div>
      </div>
    </div>
  );
};

export default ProductPage;
