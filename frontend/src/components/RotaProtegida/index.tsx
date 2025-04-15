


import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface RotaProtegidaProps {
  children: ReactNode;
}

const RotaProtegida: React.FC<RotaProtegidaProps> = ({ children }) => {
    const token = localStorage.getItem('token');
  
    if (!token) {
      return <Navigate to="/login" replace />;
    }
  
    return <>{children}</>;
  };
  
  export default RotaProtegida;