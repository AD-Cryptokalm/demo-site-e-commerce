import axios from "axios";
import { useState } from "react";
import LoginForm from './LoginForm'


const SignUpForm = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");
  const [adress, setAdress] = useState("");
  const [tel, setTel] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const controlPasswordError = document.querySelector(
      ".confirmPassword.error"
    );
   

    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    controlPasswordError.innerHTML = "";

    // if (name === "" || email === "" || password === "" || adress === "" || tel === "" ){
    //   alert("Veuillez remplir tous les champs")
    // }

    if (password !== controlPassword) {
        controlPasswordError.innerHTML =
          "Les mots de passe ne sont pas identiques";

    } else {
      await axios({
        method: "post",
        url: `http://localhost:3000/api/user/signup`,
        withCredentials: true,
        data: {
          name,
          email,
          password,
          adress,
          tel,
        },
      })
        .then(() => {
          setFormSubmit(true);
          setName("");
          setEmail("");
          setPassword("");
          setControlPassword("");
          setAdress("");
          setTel("");
        })
        .catch((err) => {
          console.log(err);
          if (err.response.data.message) {
            console.log("testy")
            emailError.innerHTML = err.response.data.message;
          } else if (err.response.data.error) {
            passwordError.innerHTML = err.response.data.error;
          }
        });
    }
  };

  return (
    <>
      {formSubmit ? (
        <>
          <LoginForm />
          <h4 className="succesSignUp">
            Enregistrement réussi, veuillez-vous connecter
          </h4>
        </>
      ) : (
        <form action="" onSubmit={handleSignUp} id="form">
          <label htmlFor="name">Nom prénom</label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="email error"></div>
          
          <label htmlFor="password">Mot de passe</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="password error"></div>
          
          <label htmlFor="confirmPassword">Confirmer mot de passe</label>
          <br />
          <input
            type="password"
            name="password"
            id="confirmPassword"
            onChange={(e) => setControlPassword(e.target.value)}
            value={controlPassword}
          />
          <div className="confirmPassword error"></div>
          
          <label htmlFor="adress">Adresse</label>
          <br />
          <input
            type="text"
            name="adress"
            id="adress"
            onChange={(e) => setAdress(e.target.value)}
            value={adress}
          />
          <br/>
          <label htmlFor="tel">Téléphone</label>
          <br />
          <input
            type="text"
            name="tel"
            id="tel"
            onChange={(e) => setTel(e.target.value)}
            value={tel}
          />
          <input className="btn-form" type="submit" value="S'enregistrer" />
        </form>
      )}
    </>
  );
};

export default SignUpForm;
