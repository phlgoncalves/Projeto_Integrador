import { ReactNode, createContext, useEffect, useState } from "react";
 
type ContextType = {
    name: string;
    setName: (n:string) => void;
    logout: () => void;
}
 
export const UsuarioLogadoContext = createContext<ContextType | null>(null);
 
 
export const UsuarioLogadoProvider = ({ children}: {children: ReactNode}) => {
    const[name, setName] = useState('');

    useEffect(() => {
        const storedName = localStorage.getItem('username');
        if (storedName) setName(storedName);
      }, []);

      const handleSetName = (n: string) => {
        localStorage.setItem('username', n);
        setName(n);
      };
    
      const logout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('token'); // também remove o token se estiver usando
        setName('');
      };

    return (
        <UsuarioLogadoContext.Provider value={{name, setName: handleSetName, logout}}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
 
}