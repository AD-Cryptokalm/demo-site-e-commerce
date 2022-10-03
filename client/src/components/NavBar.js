import { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../components/AppContext";
// import ProductPage from "../pages/Product";
import "../styles/navBar.css";
import Logout from "./Log/Logout";

const NavBar = () => {
  const uid = useContext(AuthContext);
  const userData = useSelector((state) => state.userReducer);

  let productsArray = JSON.parse(localStorage.getItem("products"));

  if (productsArray == null) {
    productsArray = [];
    
  }
  const number = productsArray.length;

  return (
    <div>
      <div className="navBar">
       

        <NavLink to="/">
          <div className="logo logo-img">
            <img src="../../logo.png" alt="logo entreprise" />
          </div>
        </NavLink>
        <NavLink to="/">
          <i className="fa-solid fa-left-long icon-back btn-profil"></i>
        </NavLink>
        <div>
          <h1>Mon Univers Enchanté</h1>
        </div>
        {uid ? (
          <div className="welcomeLogout-container">
            <h4>Bienvenue {userData.firstName}</h4>
            <NavLink to={"/profil"}>
              <div className="icon-profil">
                <i className="fa-solid fa-user btn-profil" alt="profil"></i>
              </div>
            </NavLink>
            <NavLink to={"/cart"}>
              <div className="icon-cart">
                <div className="number-product-cart" id="nb">
                  {number}
                </div>
                <i
                  className="fa-solid fa-cart-shopping btn-profil"
                  alt="cart"
                ></i>
              </div>
            </NavLink>
            <Logout />
          </div>
        ) : (
          <>
            <div className="welcomeLogout-container btn-login">
            
              <NavLink to={"/connexion"}>
                <i
                  className="fa-solid fa-right-to-bracket btn-logout"
                  alt="se connecter"
                ></i>
              </NavLink>
              
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
