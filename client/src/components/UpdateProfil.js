import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAdress, updateEmail, updateTel } from "../actions/userAction";
import "../styles/updateProfil.css";

const UpdateProfil = () => {
  const userData = useSelector((state) => state.userReducer);
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [tel, setTel] = useState("");
  const dispatch = useDispatch();

  const handleEmail = () => {
    dispatch(updateEmail(userData._id, email));
  };
  const handleAdress = () => {
    dispatch(updateAdress(userData._id, adress));
  };
  const handleTel = () => {
    dispatch(updateTel(userData._id, tel));
  };

  return (
    <div className="profil-container">
      {/* <h2 className="name-profil">Profil de {userData.firstName}</h2> */}
      <div className="connexion-form card">
        <form action="" id="form">
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder={userData.email}
          />
          <button className="btn-form" onClick={handleEmail} >
            Modifier
          </button>
          <div className="email error"></div>
        </form>

        <form action="" id="form">
          <label htmlFor="adress">Adresse</label>
          <br />
          <input
            type="text"
            name="adress"
            id="adress"
            onChange={(e) => setAdress(e.target.value)}
            placeholder={userData.adress}
          />
          <button className="btn-form" onClick={handleAdress}>
            Modifier
          </button>
          <div className="adress error"></div>
        </form>

        <form action="" id="form">
          <label htmlFor="adress">Téléphone</label>
          <br />
          <input
            type="text"
            name="tel"
            id="tel"
            onChange={(e) => setTel(e.target.value)}
            placeholder={userData.tel}
          />
          <button className="btn-form" onClick={handleTel} >
            Modifier
          </button>
          <div className="tel error"></div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfil;
