
import { useSelector } from "react-redux";
import '../styles/order.css'
// import Confirmation from "../pages/Confirmation";


const Order = () => {

    // const user = useSelector((state) => state.userReducer);
    const order = useSelector((state) => state.orderReducer)
   

    const paiement = () => {
      
     if (window.confirm("Merci de vérifier vos coordonnées pour la livraison")) {
         return (window.location.href = "/confirmation")
     }
    }
 


  return (
    <div>
      <div className="info-user connexion-form card">
        <div className="name">{order.firstName} {order.lastName}</div>
        <div className="adress">{order.adress}</div>
        <div className="tel">{order.tel}</div>
        <div className="email">{order.email}</div>
        {/* <div className="total-product">Nombre d'article : {order.products}</div> */}
        <div className="price-order">Prix total : {order.totalPrice} €</div>
        <div className="send-order btn-cmd" onClick={paiement}>Payer</div>
      </div>
    </div>
  );
};

export default Order;
