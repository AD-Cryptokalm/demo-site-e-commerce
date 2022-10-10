import axios from "axios";
import { useSelector } from "react-redux";


const Order = () => {

    const user = useSelector((state) => state.userReducer);

    // const createOrder = () => {
    //   axios({
    //     method: "POST",
    //     url: "http://localhost:3000/api/order",
    //     withCredentials: true,
    //     data: {
    //       userId: `${user._id}`,
    //       firstName: `${user.firstName}`,
    //       lastName: `${user.lastName}`,
    //       adress: `${user.adress}`,
    //       tel: `${user.tel}`,
    //       totalPrice: `${user.tel}`,
    //     }
    //   })
    // } 


  return (
    <div>
      <div className="info-user connexion-form card">
        <div className="name">{user.firstName} {user.lastName}</div>
        <div className="adress">{user.adress}</div>
        <div className="tel">{user.tel}</div>
        <div className="email">{user.email}</div>
      </div>
      <div className="price-order"></div>
      <button className="send-order" ></button>
    </div>
  );
};

export default Order;
