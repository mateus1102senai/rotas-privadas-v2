// Tela inicial (redireciona)
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { useAuth } from './contexts/AuthContext';

export default function Index() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/(tabs)/home');
    } else {
      router.replace('/(auth)/login');
    }
  }, [isAuthenticated]);

  return null;
}