import { push, ref, set } from 'firebase/database';
import { useState } from 'react';
import { Mail, Lock } from 'react-feather';
import CustomHead from '../components/CustomHead';
import Navbar2 from '../components/navbar2';
import { database } from "../config/firebaseConfig";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleAddData = async (e) => {
    e.preventDefault();
    setError(""); // Limpiar errores al intentar nuevamente
    setLoading(true); // Establecer el estado de carga a verdadero

    try {
      const usersRef = ref(database, "users");
      const newDataRef = push(usersRef);

      // Validación de campos
      if (firstName && lastName && email && password) {
        await set(newDataRef, {
          firstName,
          lastName,
          email,
          password,
        });

        // Limpiar campos del formulario
        clearFormFields();
        alert("Registrado con éxito!");
      } else {
        setError("Por favor, completa todos los campos.");
      }
    } catch (error) {
      console.error("Firebase Error: ", error.message);
      setError("Error al registrar. Por favor, inténtalo de nuevo.");
    } finally {
      setLoading(false); // Restablecer el estado de carga a falso, independientemente del resultado
    }
  };

  const clearFormFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };


  return (
    <>
      <CustomHead />
      <Navbar2 />

      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-md p-8 shadow-md w-96">
          <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
          <form className="flex flex-col gap-4" onSubmit={handleAddData}>
            <div className="relative">
              <label htmlFor="firstName" className="text-sm mb-1 flex items-center">
                First Name:
              </label>
              <input
                id="firstName"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-[#127cb1] transition duration-300 ease-in-out"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="relative">
              <label htmlFor="lastName" className="text-sm mb-1 flex items-center">
                Last Name:
              </label>
              <input
                id="lastName"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-[#127cb1] transition duration-300 ease-in-out"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="relative">
              <label htmlFor="email" className="text-sm mb-1 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-gray-500" />
                Email:
              </label>
              <input
                id="email"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-[#127cb1] transition duration-300 ease-in-out"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="text-sm mb-1 flex items-center">
                <Lock className="w-5 h-5 mr-2 text-gray-500" />
                Password:
              </label>
              <input
                id="password"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-[#127cb1] transition duration-300 ease-in-out"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="bg-[#127cb1] text-white px-4 py-2 rounded-md hover:bg-[#0b4b7d] focus:outline-none focus:bg-[#0b4b7d] transition duration-300 ease-in-out"
              type="submit"
            >
              Sign Up
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );  
}