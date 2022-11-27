import axios from "axios";
// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getOrder } from "../actions/orderAction";
import { isEmpty } from "../components/Utils";
import "../styles/cart.css";

const Cart = () => {
  const nb = document.getElementById("nb");
  const products = JSON.parse(localStorage.getItem("products"));
  const productPrice = [];
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  
  if (!products) {
    return (window.location.href = "/");
  }
  if (products) {
    products.forEach((product) => {
      productPrice.push(+product.price);
    });
  }
  
  const sum = productPrice.reduce((a, b) => a + b );


  if (products == null) {
    return [];
  }

  let totalProducts = [];

  const deleteProduct = () => {
    if (window.confirm("Vous allez supprimer ce produit")) {
      const products = JSON.parse(localStorage.getItem("products"));
      console.log(products.length);
      const product = document.getElementById("dlt").getAttribute("value");
      console.log(product);

      if (product.length == null) {
        nb.innerText = 0;
      }

      let totalDelete = products.length;

      if (totalDelete === 1) {
        return (
          localStorage.removeItem("products"),
          JSON.parse(localStorage.getItem("products")),
          window.location.reload(true)
        );
      } else {
        totalProducts = products.filter((e) => {
          console.log(product, e._id);
          if (product !== e._id) {
            return true;
          }
          return null;
        });
        localStorage.setItem("products", JSON.stringify(totalProducts));
        window.location.reload(true);
        nb.innerText = products.length;
      }
    }
  };

  const createOrder = () => {
    axios({
      method: "POST",
      url: "http://localhost:3000/api/order",
      withCredentials: true,
      data: {
        userId: `${user._id}`,
        firstName: `${user.firstName}`,
        lastName: `${user.lastName}`,
        adress: `${user.adress}`,
        tel: `${user.tel}`,
        email: `${user.email}`,
        totalPrice: `${sum}`,
        products: products,
        
      }
    })
    .then((res) => {
      dispatch(getOrder(res.data.order._id))
      localStorage.removeItem("products")
    })
    .catch((err) => console.log(err))
  } 

  


  JSON.parse(localStorage.getItem("products"));
  return (
    <div className="order-container">
      <ul className="allProduct-order">
        {!isEmpty(products[0]) &&
          products.map((product) => {
            return (
              <div className="product-order" key={product._id}>
                <img
                  className="img-productOrder"
                  src={product.imageUrl}
                  alt="img produit"
                />
                <div>{product.name}</div>
                <div className="price">{product.price}€</div>
                <i
                  className="fa-solid fa-trash-can btn-profil deleteItem dataset"
                  onClick={deleteProduct}
                  id="dlt"
                  value={product._id}
                ></i>
              </div>
            );
          })}
      </ul>
      <div className="line"></div>
      <div className="price-container">
      <div className="shipping">Frais de livraison : 6 €</div>
      <div className="total-price">Prix total : {sum + 6}  €</div>
      <NavLink to="/order">
      <div className="btn-cmd" onClick={createOrder}>Commander</div>
      </NavLink>
      </div>
    </div>
  );
};

export default Cart;
