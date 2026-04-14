"use client";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function BarraNavegacao() {
  const context = useContext(AuthContext);
  if (!context) return null;

  return (
    <nav style={{ 
      padding: '20px', 
      borderBottom: '1px solid #ccc', 
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center' 
    }}>
      <h2 style={{ margin: 0 }}>Meu App</h2>
      <p style={{ margin: 0 }}>
        Usuário: <strong>{context.estaLogado ? context.usuario : "Visitante"}</strong>
      </p>
    </nav>
  );
}