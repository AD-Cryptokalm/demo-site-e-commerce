import React, { useState } from "react";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";
import "../../styles/log.css";

const Auth = () => {
  const [signUpModal, setSignUpModal] = useState(false);
  const [loginModal, setLoginModal] = useState(true);


  const handleModals = (e) => {
    if (e.target.id === "signUp") {
        setLoginModal(false);
        setSignUpModal(true);
    } else if (e.target.id === "login") {
        setSignUpModal(false);
        setLoginModal(true);
    }
  }

  return (
    <div className="connexion-form card">
      <div>
        <ul className="list-log">
          {loginModal ? (
            <li onClick={handleModals} id='signUp' className="card1">Pas de compte? Inscrivez-vous ici !</li>
          ):(
            <div></div>
          )}
          {signUpModal ? (
            <li onClick={handleModals} id='login' className="card1">Vous avez déjà un compte? Connectez-vous ici !</li>
          ):(
            <div></div>
          )}
        </ul>
      </div>
      <div className="form-container">
        {signUpModal && <SignUpForm />}
        {loginModal && <LoginForm />}
      </div>
    </div>
  );
};

export default Auth;
