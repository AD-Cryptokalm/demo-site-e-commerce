import axios from "axios";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    emailError.innerHTML = "";
    passwordError.innerHTML = "";

    axios({
      method: "POST",
      url: `http://localhost:3000/api/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userId);
        console.log(res.data);
        window.location = "/";
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.errors) {
          emailError.innerHTML = err.response.data.errors.email;
        } else if (err.response.data.errors) {
          passwordError.innerHTML = err.response.data.errors.password;
        }
        setEmail("");
        setPassword("");
      });
  };

  return (
    <form action="" onSubmit={handleLogin} id="form">
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
      <br />
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
      <br />
      <input className="btn-form" type="submit" value="Se connecter" />
    </form>
  );
};

export default LoginForm;
