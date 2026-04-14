"use client";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function LoginArea() {
  const context = useContext(AuthContext);
  const [nomeInput, setNomeInput] = useState("");

  if (!context) return null;

  const { estaLogado, login, logout } = context;

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      {estaLogado ? (
        <div>
          <p style={{ fontSize: '1.2rem' }}>Bem-vindo ao sistema!</p>
          <button 
            onClick={logout}
            style={{ padding: '10px 20px', cursor: 'pointer' }}
          >
            Sair
          </button>
        </div>
      ) : (
        <div>
          <p>Faça login para continuar:</p>
          <input 
            type="text" 
            placeholder="Digite seu nome" 
            value={nomeInput}
            onChange={(e) => setNomeInput(e.target.value)}
            style={{ padding: '10px', marginRight: '10px' }}
          />
          <button 
            onClick={() => login(nomeInput)}
            style={{ padding: '10px 20px', cursor: 'pointer' }}
          >
            Entrar
          </button>
        </div>
      )}
    </div>
  );
}