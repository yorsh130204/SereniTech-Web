// ProtectedPage.js
import React, { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';

const ProtectedPage = ({ children }) => {
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Verifica si estamos en el lado del cliente antes de intentar redirigir
    if (typeof window !== 'undefined' && !currentUser) {
      // Redirige a la página de inicio de sesión si no está autenticado
      router.push('/login');
    }
  }, [currentUser, router]);

  if (!currentUser) {
    // Si no está autenticado, puedes mostrar un mensaje o spinner mientras se redirige
    return <p>Redirigiendo a la página de inicio de sesión...</p>;
  }

  return (
    <div>
      <p>Contenido de la página</p>
    </div>
  );
};

export default ProtectedPage;
