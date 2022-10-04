
import { isEmpty } from "../components/Utils";
import "../styles/cart.css";

const Cart = () => {
  
  const nb = document.getElementById("nb");
  const products = JSON.parse(localStorage.getItem("products"));
  if (!products) {
    return window.location.href = "/";
  }
  if (products == null) {
    return [];
  }
  
  let totalProducts = [];

  const deleteProduct = () => {
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
        // cartEmpty.innerText = "Votre panier est vide"
        // (nb.innerHTML = products.length)
        window.location.reload(true)
      );
      // window.location.href("/")
    } else {
      totalProducts = products.filter((e) => {
        console.log(product, e._id);
        if (product !== e._id) {
          return true;
        }
        return null
      });
      localStorage.setItem("products", JSON.stringify(totalProducts));
      nb.innerHTML = products.length;
      window.location.reload(true)

    }
  };
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
                <div>{product.price}€</div>
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
    </div>
  );
};

export default Cart;
