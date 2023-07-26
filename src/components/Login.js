// Login.js
import React, { useState } from "react";
import "./Login.css";
import bcrypt from "bcryptjs";

const Login = ({ onLogin, onCadastro }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Aqui você pode adicionar a lógica de autenticação.
    // No exemplo abaixo, vamos verificar se o usuário está cadastrado e se a senha está correta.
    // Na prática, você deve consultar o banco de dados para realizar a autenticação
    const user = {
      username: "test",
      password: "$2a$10$30QlrrhtDrgTdjQ8pF0Vve.rQYNf0J8o8aKT2g6ilWZ4qM05nLvi2", // A senha "123456" foi substituída por um hash gerado pela função hashSync do bcrypt
    };

    if (username === user.username) {
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (isPasswordCorrect) {
        onLogin(username);
      } else {
        alert("Credenciais inválidas! Tente novamente.");
      }
    } else {
      alert("Credenciais inválidas! Tente novamente.");
    }
  };

  return (
    <div className='login-container'>
      <h2 className='login-header'>Login</h2>
      <div className='login-form'>
        <input
          type='text'
          placeholder='Usuário'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='login-input'
        />
        <input
          type='password'
          placeholder='Senha'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='login-input'
        />
        <button onClick={handleLogin} className='login-button'>
          Entrar
        </button>
        <button onClick={onCadastro} className='login-button'>
          Cadastrar
        </button>
      </div>
    </div>
  );
};

export default Login;
