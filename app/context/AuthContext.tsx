"use client";
import { createContext, useState, ReactNode } from "react";

interface AuthContextData {
  usuario: string | null;
  estaLogado: boolean;
  login: (nome: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextData | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<string | null>(null);

  const login = (nome: string) => {
    if (nome.trim() !== "") {
      setUsuario(nome);
    }
  };

  const logout = () => setUsuario(null);
  const estaLogado = !!usuario;

  return (
    <AuthContext.Provider value={{ usuario, estaLogado, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}