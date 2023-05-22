import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WalletAnimate from "../assets/img/Soccer.png";
import "../styles/login.css";

function Login() {
  const navigate = useNavigate();

  const [apiKey, setApiKey] = useState("");
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const isValidApiKey = (key) => {
    return key === "61aaeef8bd4807617135c75deb0bba21";
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!apiKey) {
      setHasError(true);
      setErrorMessage("Por favor, insira uma API key válida.");
      return;
    }

    if (!isValidApiKey(apiKey)) {
      setHasError(true);
      setErrorMessage("API key inválida. Por favor, verifique novamente.");
      return;
    }

    try {
      const response = await fetch("https://v3.football.api-sports.io/status", {
        headers: {
          "x-apisports-key": apiKey,
        },
      });

      if (response.ok) {
        navigate("/home");
      } else {
        setHasError(true);
        setErrorMessage("API key inválida. Por favor, verifique novamente.");
      }
    } catch (error) {
      setHasError(true);
      setErrorMessage(
        "Ocorreu um erro ao verificar a API key. Por favor, tente novamente mais tarde."
      );
    }
  };

  return (
    <div className="main-login">
      <div className="left-login">
        <img src={WalletAnimate} className="login-image" alt="jogando bola" />
      </div>
      <div className="right-login">
        <div className="card-login">
          <h1>LOGIN</h1>
          <br />
          {hasError && <p>{errorMessage}</p>}
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Digite sua API key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <button type="submit" className="btn-login">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
