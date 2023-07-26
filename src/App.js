import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [showCadastro, setShowCadastro] = useState(false);

  const handleLogin = (username) => {
    setUsername(username);
    setLoggedIn(true);
  };

  const handleCadastro = (newUser) => {
    // Verifica se o usuário já está cadastrado
    const existingUser = usuarios.find(
      (user) => user.username === newUser.username
    );
    if (existingUser) {
      alert("Usuário já cadastrado. Por favor, tente outro nome de usuário.");
      return;
    }

    // Adiciona o novo usuário ao estado de usuários
    setUsuarios([...usuarios, newUser]);

    setUsername(newUser.username);
    setLoggedIn(true);
  };

  const handleShowCadastro = () => {
    setShowCadastro(true);
  };

  return (
    <div className='app-container'>
      {loggedIn ? (
        <div>
          <h2>Bem-vindo, {username}!</h2>
          {/* Renderizar o restante do aplicativo após o login */}
        </div>
      ) : showCadastro ? (
        <Cadastro onCadastro={handleCadastro} />
      ) : (
        <Login onLogin={handleLogin} onCadastro={handleShowCadastro} />
      )}
    </div>
  );
};

export default App;
