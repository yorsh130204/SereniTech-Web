// Dashboard.js
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Home from "../pages/index.js";

export default function Dashboard() {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      // Después de cerrar sesión, puedes redirigir a la página de inicio o a donde desees.
      window.location.href = "/";
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  };

  return (
    <div>
      <p>Hola Mundo!!!</p>
      <button onClick={handleLogout}>Cerrar Sesión</button>
      {/* Contenido del dashboard */}
    </div>
  );
}
