import Card from "../components/Product/Card";
import { isEmpty } from "../components/Utils";
import "../styles/cart.css";


const Cart = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    
  return (
    <div className="order-container">
      <ul className="allProduct-order">
        {!isEmpty(products[0]) &&
          products.map((product) => {
            return (
              <div className="product-order" key={product._id}>
                <img className="img-productOrder" src={product.imageUrl}/>
                <div>{product.name}</div>
                <div>{product.price}€</div>
                <i className="fa-solid fa-trash-can btn-profil"></i>
              </div>
            );
          })}
      </ul>
      
    </div>
  );
};

export default Cart;
