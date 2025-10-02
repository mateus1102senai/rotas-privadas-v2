// Gerencia autenticação
import React, { createContext, useContext, useState } from 'react';
import { useRouter } from 'expo-router';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  const signIn = async (email, password) => {
    try {
      // Simular autenticação (aqui você faria a chamada para sua API)
      if (email && password) {
        const userData = { email, name: 'Usuário' };
        setUser(userData);
        setIsAuthenticated(true);
        router.replace('/(tabs)/home');
        return { success: true };
      } else {
        throw new Error('Credenciais inválidas');
      }
    } catch (error) {
      throw error;
    }
  };

  const signUp = async (name, email, password) => {
    try {
      // Simular cadastro (aqui você faria a chamada para sua API)
      if (name && email && password) {
        const userData = { email, name };
        setUser(userData);
        setIsAuthenticated(true);
        router.replace('/(tabs)/home');
        return { success: true };
      } else {
        throw new Error('Dados inválidos');
      }
    } catch (error) {
      throw error;
    }
  };

  const signOut = () => {
    setUser(null);
    setIsAuthenticated(false);
    router.replace('/(auth)/login');
  };

  return (
    <AuthContext.Provider 
      value={{ 
        isAuthenticated, 
        user, 
        signIn,
        signUp,
        signOut 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }
  return context;
};