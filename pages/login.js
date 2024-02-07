import React, { useRef, useState } from "react";
import CustomHead from '../components/CustomHead';
import Navbar2 from "../components/navbar2";
import { useAuth } from "../contexts/AuthContext";
import { Mail, Lock } from 'react-feather';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');

      // Check if the password is at least 8 characters
      const password = passwordRef.current.value;
      if (password.length < 8) {
        throw new Error('La contraseña debe tener al menos 8 caracteres.');
      }

      setLoading(true);
      await login(emailRef.current.value, password);
      // Redirect to dashboard or any other page upon successful login
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Error al iniciar sesión", error);
      setError(error.message || "Error al iniciar sesión");
    }

    setLoading(false);
  }

  return (
    <>
      <CustomHead />
      <Navbar2 />

      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-md p-8 shadow-md w-96 dark:bg-trueGray-600">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Iniciar Sesión</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="relative">
              <label htmlFor="email" className="text-sm mb-2 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-gray-500 dark:text-white" />
                Correo Electrónico:
              </label>
              <input
                id="email"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-[#127cb1] transition duration-300 ease-in-out dark:bg-trueGray-700"
                type="email"
                ref={emailRef}
                placeholder="ejemplo@correo.com"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="text-sm mb-2 flex items-center">
                <Lock className="w-5 h-5 mr-2 text-gray-500 dark:text-white" />
                Contraseña:
              </label>
              <input
                id="password"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-[#127cb1] transition duration-300 ease-in-out dark:bg-trueGray-700"
                type="password"
                ref={passwordRef}
                placeholder="Mínimo 8 caracteres"
                required
              />
            </div>
            {error && <p className="text-red-500 mt-2 mb-2">{error}</p>}
            <button
              className="bg-[#127cb1] text-white px-4 py-2 rounded-md hover:bg-[#0b4b7d] focus:outline-none focus:bg-[#0b4b7d] transition duration-300 ease-in-out"
              type="submit"
              disabled={loading}
            >
              Iniciar Sesión
            </button>
          </form>
          <div className="mt-3 text-center" >
            ¿No tienes una cuenta?{' '}
            <a
              href="/signup"
              className="text-[#127cb1] dark:text-[#1797ce] dark:hover:text-white transition-colors duration-300"
            >
              Regístrate
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
