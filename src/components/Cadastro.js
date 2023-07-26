// Cadastro.js
import React, { useState } from "react";
import "./Cadastro.css";
import bcrypt from "bcryptjs";

const Cadastro = ({ onCadastro }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCadastro = async () => {
    // Verifica se a senha e a confirmação de senha são iguais
    if (password !== confirmPassword) {
      alert("As senhas não coincidem. Tente novamente.");
      return;
    }

    // Criptografa a senha antes de salvar no banco de dados
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simula a criação de um novo usuário no banco de dados
    // Na prática, você deve enviar esses dados para o backend para realizar o cadastro
    const newUser = {
      username: username,
      password: hashedPassword,
    };

    // Chama a função de callback para realizar o cadastro
    onCadastro(newUser);
  };

  return (
    <div className='cadastro-container'>
      <h2 className='cadastro-header'>Cadastro</h2>
      <div className='cadastro-form'>
        <input
          type='text'
          placeholder='Usuário'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='cadastro-input'
        />
        <input
          type='password'
          placeholder='Senha'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='cadastro-input'
        />
        <input
          type='password'
          placeholder='Confirme a senha'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className='cadastro-input'
        />
        <button onClick={handleCadastro} className='cadastro-button'>
          Cadastrar
        </button>
      </div>
    </div>
  );
};

export default Cadastro;
