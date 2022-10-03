import Card from "../components/Product/Card";
import { isEmpty } from "../components/Utils";
import "../styles/cart.css";


const Cart = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    let totalProducts = [];

    const deleteProduct = () => {
      let corbeille = document.querySelectorAll(".deleteItem");
      const products = JSON.parse(localStorage.getItem("products"));
      console.log(products.length)
      
      if (products.length == 0) {
        return localStorage.removeItem("products")
      } else {
        totalProducts = products.filter((e) => {
          if (
            corbeille.dataset._id !== e._id 
          ) {
            return true;
          }
        });
        localStorage.setItem("products", JSON.stringify(totalProducts))
      }
    }
    
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
                <i className="fa-solid fa-trash-can btn-profil deleteItem" onClick={deleteProduct} data-id={product._id}></i>
              </div>
            );
          })}
      </ul>
      
    </div>
  );
};

export default Cart;
