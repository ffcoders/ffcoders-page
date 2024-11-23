import React from "react";
import "./App.css";

const App = () => {
  const handleJoinClick = () => {
    alert("Bem-vindo à ffCoders. \nPode passar seu cartao para cobrarmos os $29.90");
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>ffCoders</h1>
        <p>
          Somos uma organização de desenvolvedores apaixonados por tecnologia e inovação.  
          Junte-se a nós para aprender, colaborar e construir o futuro da tecnologia!
        </p>
      </header>

      <button className="join-button" onClick={handleJoinClick}>
        Quero fazer parte
      </button>
    </div>
  );
};

export default App;