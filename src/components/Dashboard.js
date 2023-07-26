import React from "react";

const Dashboard = ({ username }) => {
  return (
    <div>
      <h2>Olá, {username}!</h2>
      <p>Seu painel de controle financeiro estará aqui.</p>
    </div>
  );
};

export default Dashboard;
