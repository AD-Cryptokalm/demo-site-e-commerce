import { useContext } from "react";
import { useSelector} from 'react-redux'
import { NavLink } from "react-router-dom";
import { AuthContext } from "../components/AppContext";
import "../styles/navBar.css";
import Logout from "./Log/Logout";


const NavBar = () => {
  const uid = useContext(AuthContext);
  const userData = useSelector((state) => state.userReducer)

  return (
    <div>
      <div className="navBar">
        <NavLink to="/">
          <div className="logo logo-img">
            <img src="../../logo.png" alt="logo entreprise" />
          </div>
        </NavLink>
        <div>
          <h1>Mon Unives Enchanté</h1>
        </div>
        {uid ? (
          <div className="welcomeLogout-container">
            <h4>Bienvenue {userData.firstName}</h4>
            <NavLink to={"/profil"}>
            <div className="icon-profil">
              <i
                className="fa-solid fa-user btn-profil"
                alt="profil"
              ></i>
            </div>
          </NavLink>
            <Logout />
          </div>
        ) : (
          <NavLink to={"/connexion"}>
            <div className="welcomeLogout-container btn-login">
              <i
                className="fa-solid fa-right-to-bracket btn-logout"
                alt="se connecter"
              ></i>
            </div>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default NavBar;
