import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../api";

type ContextType = {
  isLogged: boolean;
  name: string;
  userId: string;
  login: (email: string, senha: string) => Promise<boolean>;
  logout: () => void;
}

export const UsuarioLogadoContext = createContext<ContextType | null>(null);

export const UsuarioLogadoProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    const storedUsername = localStorage.getItem('username');

    if (storedUserId && storedUsername) {
      setUserId(storedUserId);
      setName(storedUsername);
      setIsLogged(true);
    }
  }, []);
  

  const login = async (email: string, senha: string) => {
    try {
      const response = await api.Logar(email, senha);

      if (response.usuario) {
        setName(response.usuario.NOME);
        setUserId(response.usuario.ID);
        setIsLogged(true);
        localStorage.setItem('userId', response.usuario.ID);
        localStorage.setItem('username', response.usuario.NOME);
        localStorage.setItem('token', response.token);
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    setName('');
    setUserId('');
    setIsLogged(false);
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    localStorage.removeItem('token');
  };

  return (
    <UsuarioLogadoContext.Provider value={{
      isLogged,
      name,
      userId,
      login,
      logout
    }}>
      {children}
    </UsuarioLogadoContext.Provider>
  );
};