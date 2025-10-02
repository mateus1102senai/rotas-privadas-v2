// Tela inicial (redireciona)
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function AuthIndex() {
  const router = useRouter();

  useEffect(() => {
    // Redireciona para login
    router.replace('/login');
  }, []);

  return null;
}