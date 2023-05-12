import React from "react";
import { useState } from "react";
import { User } from "../data/User";

import Bag from "./../assets/Bag.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = User;
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { token } = user[0];

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === user[0].email && password === user[0].password) {
      window.location = "/";
      localStorage.setItem("token", token);
    } else if (password !== user[0].password && password !== "") {
      setPasswordError("Mot de passe inconnu");
    } else if (email !== user[0].email && email !== "") {
      setEmailError("Email inconnu");
    }
  };
  return (
    <div className="container">
      <div className="SecondeContainer">
        <form
          action=""
          onSubmit={handleLogin}
          id="sign-in__form"
          className="FormContainer"
        >
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value.toLowerCase().trim())}
            value={email}
            className="emailInput"
          />
          <div className="email error">{emailError}</div>
          <br />
          <label htmlFor="password">Mot de passe</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value.trim())}
            value={password}
            className="passwordInput"
          />
          <div className="password error">{passwordError}</div>
          <br />
          <input type="submit" value="Se connecter" className="submitInput" />
          <div className="SentenceDiv">
            <p className="Sentence">
              Pas de compte?
              <a href="/">Inscrivez</a>
              vous!
            </p>
          </div>
        </form>
        <img src={Bag} alt="bag" className="BagPicture" />
        <p className="paragraph">The world is yours!</p>
      </div>
    </div>
  );
};

export default Login;
